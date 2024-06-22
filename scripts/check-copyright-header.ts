/**
 * Copyright (c) Overnight
 */

// biome-ignore lint/correctness/noNodejsModules: process module can be used in a script file
import { exit } from 'node:process'
import chalk from 'chalk'
import { Console, Effect, pipe } from 'effect'

const CopyrightHeader = ['/**', ' * Copyright (c) Overnight', ' */', '', ''].join('\n')

class ApplicationError extends Error {
  constructor(public readonly message: string) {
    super(message)
  }

  static fromUnknown = (error: unknown) => {
    if (error instanceof Error) {
      return new ApplicationError(error.message)
    }
    return new ApplicationError('Unknown error')
  }
}

class CopyrightHeaderError extends Error {
  constructor(public readonly filepath: string) {
    super(`The file ${filepath} does not contain the correct copyright header.`)
  }
}

const isStartingWithCopyrightHeader = (content: string) => content.startsWith(CopyrightHeader)
const isCopyrightHeaderError = (error: unknown): error is CopyrightHeaderError => error instanceof CopyrightHeaderError

const checkCopyrightHeaderInFile = (filepath: string) =>
  pipe(
    Effect.tryPromise({
      try: () => {
        // biome-ignore lint/correctness/noUndeclaredVariables: Bun types can be used in a script file
        const file = Bun.file(filepath)
        return file.text()
      },
      catch: (error) => ApplicationError.fromUnknown(error)
    }),
    Effect.filterOrFail(isStartingWithCopyrightHeader, () => new CopyrightHeaderError(filepath)),
    Effect.asVoid
  )

const printError = (error: Error) =>
  pipe(
    Effect.succeed(error),
    Effect.filterOrFail(isCopyrightHeaderError, (error) => error),
    Effect.tapBoth({
      onSuccess: (error: CopyrightHeaderError) => Console.error(` ${chalk.dim('•')} ${error.filepath}`),
      onFailure: (error: Error) => Console.error(` ${chalk.dim(`• ${error.message}`)}`)
    })
  )

const printErrors = (errors: Error[]) => {
  // biome-ignore lint/nursery/noConsole: console can be used in a script file
  console.error('The following files do not comply with the copyright header requirements:')

  return Effect.forEach(errors, (error) => printError(error))
}

const program = (filepaths: string[]) =>
  pipe(
    Effect.validateAll(filepaths, (filepath) => checkCopyrightHeaderInFile(filepath)),
    Effect.tapBoth({
      onSuccess: () => Console.log('All files are compliant with the copyright header requirements'),
      onFailure: (errors) => printErrors(errors)
    })
  )

const filepaths = process.argv.slice(2)
Effect.runPromise(program(filepaths)).catch(() => exit(1))

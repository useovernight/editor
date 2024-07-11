/**
 * Copyright (c) Overnight
 */

import { RichTextArea } from '@useovernight/rich-text/components/rich-text-area'
import { RichTextContent } from '@useovernight/rich-text/components/rich-text-content'
import { TokenStyle } from '@useovernight/rich-text/enums/token-style.enum'
import { Token } from '@useovernight/rich-text/token'
import type { TokenWithId } from '@useovernight/rich-text/types/object.type'

const RichTextDemoPage = () => {
  const line1: TokenWithId[] = [
    ['QJz', new Token('Lorem ip')],
    ['TYj', new Token('sum do', TokenStyle.Bold)],
    ['y2K', new Token('lor sit am', TokenStyle.Bold | TokenStyle.Italic)],
    ['Wv7', new Token('et, conse', TokenStyle.Italic | TokenStyle.Underline)],
    ['ajv', new Token('ctetur adipisc', TokenStyle.Underline)],
    ['xgA', new Token('ing elit')]
  ]
  const line2: TokenWithId[] = [
    ['gPj', new Token('Hel', TokenStyle.Bold)],
    ['gpD', new Token('l')],
    ['p3e', new Token('o wo', TokenStyle.Strike | TokenStyle.Italic)],
    ['6y4', new Token('rld', TokenStyle.Italic)]
  ]
  const line3: TokenWithId[] = [
    ['53J', new Token('Bonj')],
    ['ABE', new Token('our ', TokenStyle.Italic | TokenStyle.Bold)],
    ['Usp', new Token('à tous', TokenStyle.Underline)]
  ]

  return (
    <main className="m-8">
      <RichTextContent className="flex cursor-default flex-col space-y-2 outline-none">
        <RichTextArea
          className="min-h-8 cursor-text rounded border border-slate-200 bg-white px-2 py-1 text-base"
          tokens={line1}
        />
        <RichTextArea
          className="min-h-8 cursor-text rounded border border-slate-200 bg-white px-2 py-1 text-base"
          tokens={line2}
        />
        <RichTextArea
          className="min-h-8 cursor-text rounded border border-slate-200 bg-white px-2 py-1 text-base"
          tokens={line3}
        />
      </RichTextContent>
    </main>
  )
}

export default RichTextDemoPage

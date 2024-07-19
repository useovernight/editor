/**
 * Copyright (c) Overnight
 */

import { Alphanumeric } from '@/constants/alphabet.const'

const alphabet = Alphanumeric

const generateId = (length: number) =>
  Array.from({ length })
    .map(() => Math.floor(Math.random() * alphabet.length))
    .map((index) => alphabet[index])
    .join('')

const addPrefix = (prefix: string) => (id: string) => `${prefix}${id}`

const generateRandomTokenId = (length = 8) => addPrefix('auto-')(generateId(length))

export { generateRandomTokenId }

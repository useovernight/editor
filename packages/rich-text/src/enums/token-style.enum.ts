/**
 * Copyright (c) Overnight
 */

enum TokenStyle {
  Nothing = 0,
  Bold = 1,
  Italic = 2,
  Underline = 4,
  Strike = 8,
  All = TokenStyle.Bold | TokenStyle.Italic | TokenStyle.Underline | TokenStyle.Strike
}

export { TokenStyle }

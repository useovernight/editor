/**
 * Copyright (c) Overnight
 */

enum TokenStyle {
  Nothing = 0,
  Bold = 1 << 0,
  Italic = 1 << 1,
  Underline = 1 << 2,
  Strike = 1 << 3
}

export { TokenStyle }

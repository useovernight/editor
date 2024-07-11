/**
 * Copyright (c) Overnight
 */

import { TokenStyle } from '@/enums/token-style.enum'

class Token {
  constructor(
    public readonly content: string,
    public readonly styles: TokenStyle = TokenStyle.Nothing
  ) {}

  get isBold(): boolean {
    return (this.styles & TokenStyle.Bold) !== TokenStyle.Nothing
  }

  get isItalic(): boolean {
    return (this.styles & TokenStyle.Italic) !== TokenStyle.Nothing
  }

  get isUnderline(): boolean {
    return (this.styles & TokenStyle.Underline) !== TokenStyle.Nothing
  }

  get isStrike(): boolean {
    return (this.styles & TokenStyle.Strike) !== TokenStyle.Nothing
  }
}

export { Token }

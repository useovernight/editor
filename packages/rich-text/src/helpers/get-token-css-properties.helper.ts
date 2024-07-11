/**
 * Copyright (c) Overnight
 */

import type { Token } from '@/token'
import type { CSSProperties } from 'react'

const getTokenCssProperties = (token: Token) => {
  const properties: CSSProperties = {}

  if (token.isBold) {
    properties.fontWeight = '700'
  }

  if (token.isItalic) {
    properties.fontStyle = 'italic'
  }

  if (token.isUnderline && token.isStrike) {
    properties.textDecorationLine = 'underline line-through'
  } else if (token.isUnderline) {
    properties.textDecorationLine = 'underline'
  } else if (token.isStrike) {
    properties.textDecorationLine = 'line-through'
  }

  return properties
}

export { getTokenCssProperties }

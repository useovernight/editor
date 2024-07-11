/**
 * Copyright (c) Overnight
 */

import { getTokenCssProperties } from '@/helpers/get-token-css-properties.helper'
import type { TokenWithId } from '@/types/object.type'
import { type BaseHTMLAttributes, forwardRef } from 'react'

interface RichTextAreaProps extends Omit<BaseHTMLAttributes<HTMLDivElement>, 'children'> {
  tokens: TokenWithId[]
}

const RichTextArea = forwardRef<HTMLDivElement, RichTextAreaProps>(({ tokens, ...props }, ref) => (
  <div ref={ref} {...props}>
    {tokens.map(([id, token]) => (
      <span key={id} style={getTokenCssProperties(token)}>
        {token.content}
      </span>
    ))}
  </div>
))
RichTextArea.displayName = 'RichTextArea'

export { RichTextArea }
export type { RichTextAreaProps }

/**
 * Copyright (c) Overnight
 */

import { type BaseHTMLAttributes, forwardRef } from 'react'

interface RichTextContentProps extends BaseHTMLAttributes<HTMLDivElement> {}

const RichTextContent = forwardRef<HTMLDivElement, RichTextContentProps>((props, ref) => (
  <div ref={ref} contentEditable suppressContentEditableWarning {...props} />
))
RichTextContent.displayName = 'RichTextContent'

export { RichTextContent }
export type { RichTextContentProps }

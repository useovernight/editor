/**
 * Copyright (c) Overnight
 */

'use client'

import { createSelection } from '@/helpers/create-selection.helper'
import { getTokenCssProperties } from '@/helpers/get-token-css-properties.helper'
import { useComposeRef } from '@/hooks/internal/compose-ref.hook'
import { useRegisterTextAreaActions } from '@/hooks/internal/register-text-area-actions.hook'
import type { TokenWithId } from '@/types/object.type'
import { type BaseHTMLAttributes, forwardRef, useCallback } from 'react'

interface RichTextAreaProps extends Omit<BaseHTMLAttributes<HTMLDivElement>, 'children'> {
  tokens: readonly TokenWithId[]
}

const RichTextArea = forwardRef<HTMLDivElement, RichTextAreaProps>(({ tokens, ...props }, externalRef) => {
  const ref = useComposeRef(externalRef)

  useRegisterTextAreaActions({
    createSnapshot: useCallback(
      ({ range }) => {
        const canSelectionBeCreated = range !== undefined && ref.current !== null
        const selection = canSelectionBeCreated ? createSelection(ref.current, range, tokens) : undefined

        return {
          tokens,
          selection
        }
      },
      [ref, tokens]
    )
  })

  return (
    <div ref={ref} {...props}>
      {tokens.map(([id, token]) => (
        <span key={id} style={getTokenCssProperties(token)}>
          {token.content}
        </span>
      ))}
    </div>
  )
})
RichTextArea.displayName = 'RichTextArea'

export { RichTextArea }
export type { RichTextAreaProps }

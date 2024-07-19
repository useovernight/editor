/**
 * Copyright (c) Overnight
 */

import { RichTextEditorContext } from '@/contexts/rich-text-editor.context'
import { getSelectedTokens } from '@/helpers/get-selected-tokens.helper'
import { useContext } from 'react'

const useSelection = () => {
  const richTextEditorContext = useContext(RichTextEditorContext)

  if (!richTextEditorContext) {
    throw new Error('useSelection should be used within <RichTextEditor>')
  }

  const selectedTokens = getSelectedTokens(richTextEditorContext.snapshots)

  const isBold = selectedTokens.length > 0 ? selectedTokens.every(([, token]) => token.isBold) : false
  const isItalic = selectedTokens.length > 0 ? selectedTokens.every(([, token]) => token.isItalic) : false
  const isUnderline = selectedTokens.length > 0 ? selectedTokens.every(([, token]) => token.isUnderline) : false
  const isStrike = selectedTokens.length > 0 ? selectedTokens.every(([, token]) => token.isStrike) : false

  return {
    isBold,
    isItalic,
    isUnderline,
    isStrike
  }
}

export { useSelection }

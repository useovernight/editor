/**
 * Copyright (c) Overnight
 */

import { RichTextEditorContext } from '@/contexts/rich-text-editor.context'
import type { RichTextAreaActions } from '@/types/internal/rich-text-area-actions.type'
import { useContext, useEffect } from 'react'

const useRegisterTextAreaActions = (actions: RichTextAreaActions) => {
  const richTextEditorContext = useContext(RichTextEditorContext)

  if (!richTextEditorContext) {
    throw new Error('useRegisterTextAreaActions should be used within <RichTextEditor>')
  }

  useEffect(
    () => richTextEditorContext.registerTextAreaActions(actions),
    [actions, richTextEditorContext.registerTextAreaActions]
  )
}

export { useRegisterTextAreaActions }

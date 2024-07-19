/**
 * Copyright (c) Overnight
 */

import type { RichTextAreaActions } from '@/types/internal/rich-text-area-actions.type'
import type { RichTextAreaSnapshot } from '@/types/snapshots/rich-text-area.snapshot'
import { createContext } from 'react'

type CleanupCallback = () => void

interface RichTextEditorContextValue {
  snapshots: readonly RichTextAreaSnapshot[]
  registerTextAreaActions: (actions: RichTextAreaActions) => CleanupCallback
}

const RichTextEditorContext = createContext({} as RichTextEditorContextValue)

export { RichTextEditorContext }
export type { RichTextEditorContextValue }

/**
 * Copyright (c) Overnight
 */

'use client'

import { RichTextEditorContext } from '@/contexts/rich-text-editor.context'
import { getFirstSelectionRange } from '@/helpers/get-first-selection-range.helper'
import type { RichTextAreaActions } from '@/types/internal/rich-text-area-actions.type'
import { LeafId } from '@/types/object.type'
import type { RichTextAreaSnapshot } from '@/types/snapshots/rich-text-area.snapshot'
import { type BaseHTMLAttributes, forwardRef, useCallback, useEffect, useRef, useState } from 'react'

interface RichTextEditorProps extends BaseHTMLAttributes<HTMLDivElement> {}

const RichTextEditor = forwardRef<HTMLDivElement, RichTextEditorProps>((props, ref) => {
  const textAreasActionsRef = useRef(new Map<LeafId, RichTextAreaActions>())
  const [snapshots, setSnapshots] = useState<readonly RichTextAreaSnapshot[]>([])

  const registerTextAreaActions = useCallback((id: LeafId, actions: RichTextAreaActions) => {
    textAreasActionsRef.current.set(id, actions)

    return () => {
      textAreasActionsRef.current.delete(id)
    }
  }, [])

  const handleSelectionChange = useCallback(() => {
    const range = getFirstSelectionRange()
    const arrayActions = Array.from(textAreasActionsRef.current.values())
    const createdSnapshots = arrayActions.map((actions) => actions.createSnapshot({ range }))

    setSnapshots(createdSnapshots)
  }, [])

  useEffect(() => {
    document.addEventListener('selectionchange', handleSelectionChange)

    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange)
    }
  }, [handleSelectionChange])

  return (
    <RichTextEditorContext.Provider
      value={{
        snapshots,
        registerTextAreaActions
      }}
    >
      <div ref={ref} {...props} />
    </RichTextEditorContext.Provider>
  )
})
RichTextEditor.displayName = 'RichTextEditor'

export { RichTextEditor }
export type { RichTextEditorProps }

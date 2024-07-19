/**
 * Copyright (c) Overnight
 */

'use client'

import { RichTextEditorContext } from '@/contexts/rich-text-editor.context'
import { getFirstSelectionRange } from '@/helpers/get-first-selection-range.helper'
import type { RichTextAreaActions } from '@/types/internal/rich-text-area-actions.type'
import type { RichTextAreaSnapshot } from '@/types/snapshots/rich-text-area.snapshot'
import { type BaseHTMLAttributes, forwardRef, useCallback, useEffect, useRef, useState } from 'react'

interface RichTextEditorProps extends BaseHTMLAttributes<HTMLDivElement> {}

const RichTextEditor = forwardRef<HTMLDivElement, RichTextEditorProps>((props, ref) => {
  const textAreasActionsRef = useRef<RichTextAreaActions[]>([])
  const [snapshots, setSnapshots] = useState<readonly RichTextAreaSnapshot[]>([])

  const registerTextAreaActions = useCallback((actions: RichTextAreaActions) => {
    textAreasActionsRef.current.push(actions)

    return () => {
      textAreasActionsRef.current = textAreasActionsRef.current.filter((value) => value !== actions)
    }
  }, [])

  const handleSelectionChange = useCallback(() => {
    const range = getFirstSelectionRange()
    const createdSnapshots = textAreasActionsRef.current.map((actions) => actions.createSnapshot({ range }))

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

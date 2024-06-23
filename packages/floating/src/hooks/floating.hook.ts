/**
 * Copyright (c) Overnight
 */

import { FloatingContext } from '@/contexts/floating.context'
import type { Boundary } from '@/types/boundary.type'
import { useContext } from 'react'

const useFloating = (anchorBoundary: Boundary) => {
  const floatingContext = useContext(FloatingContext)

  if (!floatingContext) {
    throw new Error('useFloating should be used within <Floating>')
  }

  return {
    display: () => floatingContext.display(anchorBoundary),
    hide: floatingContext.hide,
    toggle: () => floatingContext.toggle(anchorBoundary)
  }
}

export { useFloating }

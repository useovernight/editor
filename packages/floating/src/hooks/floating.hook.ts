/**
 * Copyright (c) Overnight
 */

import { FloatingContext } from '@/contexts/floating.context'
import type { Boundary } from '@/types/boundary.type'
import { useContext } from 'react'

const useFloating = () => {
  const floatingContext = useContext(FloatingContext)

  if (!floatingContext) {
    throw new Error('useFloating should be used within <Floating>')
  }

  return {
    toggle: (anchorBoundary: Boundary) => floatingContext.toggle(anchorBoundary),
    display: (anchorBoundary: Boundary) => floatingContext.display(anchorBoundary),
    hide: floatingContext.hide
  }
}

export { useFloating }

/**
 * Copyright (c) Overnight
 */

import { FloatingContext } from '@/contexts/floating.context'
import { useContext } from 'react'

const useFloating = () => {
  const floatingContext = useContext(FloatingContext)

  if (!floatingContext) {
    throw new Error('useFloating should be used within <Floating>')
  }

  return {
    toggle: floatingContext.toggle,
    display: floatingContext.display,
    hide: floatingContext.hide
  }
}

export { useFloating }

/**
 * Copyright (c) Overnight
 */

import { FloatingContext } from '@/contexts/floating.context'
import { useContext } from 'react'

const useFloatingState = () => {
  const floatingContext = useContext(FloatingContext)

  if (!floatingContext) {
    throw new Error('useFloatingState should be used within <Floating>')
  }

  return floatingContext.floatingState
}

export { useFloatingState }

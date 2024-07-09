/**
 * Copyright (c) Overnight
 */

import type { Boundary } from '@/types/boundary.type'
import type { FloatingState } from '@/types/floating-state.type'
import { createContext } from 'react'

interface FloatingContextValue {
  floatingState: FloatingState
  toggle: (anchorBoundary: Boundary) => void
  display: (anchorBoundary: Boundary) => void
  hide: () => void
}

const FloatingContext = createContext<FloatingContextValue>({} as FloatingContextValue)

export { FloatingContext }
export type { FloatingContextValue }

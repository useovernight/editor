/**
 * Copyright (c) Overnight
 */

'use client'

import { FloatingContext } from '@/contexts/floating.context'
import type { Boundary } from '@/types/boundary.type'
import type { FloatingState } from '@/types/floating-state.type'
import { type PropsWithChildren, useCallback, useState } from 'react'

interface FloatingProps extends PropsWithChildren {}

const Floating = ({ children }: FloatingProps) => {
  const [floatingState, setFloatingState] = useState<FloatingState>({
    isVisible: false,
    anchorBoundary: {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }
  })

  const toggle = useCallback(
    (anchorBoundary: Boundary) =>
      setFloatingState(({ isVisible, ...currentFloatingState }) => ({
        ...currentFloatingState,
        anchorBoundary,
        isVisible: !isVisible
      })),
    []
  )

  const display = useCallback(
    (anchorBoundary: Boundary) =>
      setFloatingState((currentFloatingState) => ({
        ...currentFloatingState,
        anchorBoundary,
        isVisible: true
      })),
    []
  )

  const hide = useCallback(
    () =>
      setFloatingState((currentFloatingState) => ({
        ...currentFloatingState,
        isVisible: false
      })),
    []
  )

  return (
    <FloatingContext.Provider
      value={{
        floatingState,
        toggle,
        display,
        hide
      }}
    >
      {children}
    </FloatingContext.Provider>
  )
}

export { Floating }
export type { FloatingProps }

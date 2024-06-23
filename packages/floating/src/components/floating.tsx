/**
 * Copyright (c) Overnight
 */

'use client'

import { FloatingContext } from '@/contexts/floating.context'
import type { Boundary } from '@/types/boundary.type'
import type { FloatingState } from '@/types/floating-state.type'
import { type PropsWithChildren, useState } from 'react'

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

  const display = (anchorBoundary: Boundary) =>
    setFloatingState({
      ...floatingState,
      anchorBoundary,
      isVisible: true
    })
  const hide = () =>
    setFloatingState({
      ...floatingState,
      isVisible: false
    })
  const toggle = (anchorBoundary: Boundary) =>
    setFloatingState(({ isVisible }) => ({
      ...floatingState,
      anchorBoundary,
      isVisible: !isVisible
    }))

  return (
    <FloatingContext.Provider
      value={{
        floatingState,
        display,
        hide,
        toggle
      }}
    >
      {children}
    </FloatingContext.Provider>
  )
}

export { Floating }
export type { FloatingProps }

/**
 * Copyright (c) Overnight
 */

'use client'

import { FloatingPortal } from '@/components/floating-portal'
import { useFloatingState } from '@/hooks/floating-state.hook'
import { useAnchorPoint } from '@/hooks/internal/anchor-point.hook'
import { useComposeRef } from '@/hooks/internal/compose-ref.hook'
import { useElementSize } from '@/hooks/internal/element-size.hook'
import { useInitialPosition } from '@/hooks/internal/initial-position.hook'
import type { Middleware, MiddlewareResult } from '@/types/middleware.type'
import type { Placement } from '@/types/placement.type'
import { type BaseHTMLAttributes, forwardRef, useMemo } from 'react'

interface FloatingElementProps extends BaseHTMLAttributes<HTMLDivElement> {
  placement: Placement
  middlewares?: Middleware[]
}

const FloatingElement = forwardRef<HTMLDivElement, FloatingElementProps>(
  ({ placement, middlewares = [], ...props }, externalRef) => {
    const ref = useComposeRef(externalRef)
    const floatingButtonSize = useElementSize(ref)
    const floatingState = useFloatingState()

    const { x, y, styles } = useMemo(() => {
      const anchorPoint = useAnchorPoint(floatingState.anchorBoundary, placement)
      const initialPosition = useInitialPosition(floatingButtonSize, anchorPoint, placement)

      const initialValue: MiddlewareResult = {
        x: initialPosition.x,
        y: initialPosition.y,
        styles: {
          top: 0,
          left: 0,
          width: 'max-content',
          position: 'absolute'
        }
      }

      return middlewares.reduce<MiddlewareResult>((accumulatedValue, middleware) => {
        const state = Object.assign({}, accumulatedValue, {
          placement
        })
        const result = middleware(state)

        return Object.assign({}, accumulatedValue, result)
      }, initialValue)
    }, [floatingButtonSize, floatingState, placement, middlewares])

    return (
      <FloatingPortal>
        <div
          ref={ref}
          style={{
            ...styles,
            transform: `translate(${x}px, ${y}px)`,
            opacity: floatingState.isVisible ? '1' : '0',
            visibility: floatingState.isVisible ? 'visible' : 'hidden'
          }}
          {...props}
        />
      </FloatingPortal>
    )
  }
)
FloatingElement.displayName = 'FloatingElement'

export { FloatingElement }
export type { FloatingElementProps }

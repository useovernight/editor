/**
 * Copyright (c) Overnight
 */

'use client'

import { FloatingPortal } from '@/components/floating-portal'
import { stylePropertiesToCssProperties } from '@/helpers/style-properties-to-css-properties.helper'
import { useFloatingState } from '@/hooks/floating-state.hook'
import { useAnchorPoint } from '@/hooks/internal/anchor-point.hook'
import { useComposeRef } from '@/hooks/internal/compose-ref.hook'
import { useElementSize } from '@/hooks/internal/element-size.hook'
import { useInitialPosition } from '@/hooks/internal/initial-position.hook'
import type { Middleware, MiddlewareResult } from '@/types/middleware.type'
import type { Placement } from '@/types/placement.type'
import deepmerge from 'deepmerge'
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

    const { x, y, style } = useMemo(() => {
      const anchorPoint = useAnchorPoint(floatingState.anchorBoundary, placement)
      const initialPosition = useInitialPosition(floatingButtonSize, anchorPoint, placement)

      const initialValue: MiddlewareResult = {
        x: initialPosition.x,
        y: initialPosition.y,
        style: {}
      }

      return middlewares.reduce<MiddlewareResult>((accumulatedValue, middleware) => {
        const state = Object.assign({}, accumulatedValue, {
          placement,
          isVisible: floatingState.isVisible
        })
        const result = middleware(state)

        return deepmerge(accumulatedValue, result)
      }, initialValue)
    }, [floatingButtonSize, floatingState, placement, middlewares])

    return (
      <FloatingPortal>
        <div
          style={{
            top: 0,
            left: 0,
            width: 'max-content',
            position: 'absolute',
            transform: `translate(${x}px, ${y}px)`,
            visibility: floatingState.isVisible ? 'visible' : 'hidden'
          }}
        >
          <div ref={ref} style={stylePropertiesToCssProperties(style)} {...props} />
        </div>
      </FloatingPortal>
    )
  }
)
FloatingElement.displayName = 'FloatingElement'

export { FloatingElement }
export type { FloatingElementProps }

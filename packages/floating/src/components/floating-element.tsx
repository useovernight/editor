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
import type { Placement } from '@/types/placement.type'
import { type BaseHTMLAttributes, type CSSProperties, forwardRef } from 'react'

interface FloatingElementProps extends BaseHTMLAttributes<HTMLDivElement> {
  placement: Placement
}

const FloatingElement = forwardRef<HTMLDivElement, FloatingElementProps>(({ placement, ...props }, externalRef) => {
  const ref = useComposeRef(externalRef)
  const floatingButtonSize = useElementSize(ref)
  const floatingState = useFloatingState()

  const anchorPoint = useAnchorPoint(floatingState.anchorBoundary, placement)
  const { x, y } = useInitialPosition(floatingButtonSize, anchorPoint, placement)

  const styles: CSSProperties = {
    top: 0,
    left: 0,
    width: 'max-content',
    position: 'absolute'
  }

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
})
FloatingElement.displayName = 'FloatingElement'

export { FloatingElement }
export type { FloatingElementProps }

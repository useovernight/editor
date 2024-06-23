/**
 * Copyright (c) Overnight
 */

'use client'

import { FloatingPortal } from '@/components/floating-portal'
import { useFloatingState } from '@/hooks/floating-state.hook'
import { useComposeRef } from '@/hooks/internal/compose-ref.hook'
import { type BaseHTMLAttributes, type CSSProperties, forwardRef } from 'react'

interface FloatingElementProps extends BaseHTMLAttributes<HTMLDivElement> {}

const FloatingElement = forwardRef<HTMLDivElement, FloatingElementProps>((props, externalRef) => {
  const ref = useComposeRef(externalRef)
  const floatingState = useFloatingState()

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

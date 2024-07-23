/**
 * Copyright (c) Overnight
 */

'use client'

import { useComposeRef } from '@/hooks/internal/compose-ref.hook'
import { Slot } from '@radix-ui/react-slot'
import { useElementBoundary } from '@useovernight/floating/hooks/element-boundary.hook'
import { useFloating } from '@useovernight/floating/hooks/floating.hook'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

interface TooltipTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const TooltipTrigger = forwardRef<HTMLButtonElement, TooltipTriggerProps>(
  ({ asChild = false, ...props }, externalRef) => {
    const Comp = asChild ? Slot : 'button'

    const ref = useComposeRef(externalRef)
    const triggerBoundary = useElementBoundary(ref)
    const { hide, display } = useFloating()

    return <Comp ref={ref} onMouseEnter={() => display(triggerBoundary)} onMouseLeave={() => hide()} {...props} />
  }
)
TooltipTrigger.displayName = 'TooltipTrigger'

export { TooltipTrigger }

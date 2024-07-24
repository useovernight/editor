/**
 * Copyright (c) Overnight
 */

import { FloatingElement } from '@useovernight/floating/components/floating-element'
import { animate } from '@useovernight/floating/middlewares/animate.middleware'
import { fadeIn } from '@useovernight/floating/middlewares/fade-in.middleware'
import { offset } from '@useovernight/floating/middlewares/offset.middleware'
import { slideIn } from '@useovernight/floating/middlewares/slide-in.middleware'
import { zoomIn } from '@useovernight/floating/middlewares/zoom-in.middleware'
import type { Placement } from '@useovernight/floating/types/placement.type'
import { type BaseHTMLAttributes, forwardRef } from 'react'

interface TooltipContentProps extends BaseHTMLAttributes<HTMLDivElement> {
  placement?: Placement
}

const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(({ placement = 'top', ...props }, ref) => {
  const middlewares = [
    fadeIn(),
    slideIn(),
    zoomIn(),
    animate(180),
    offset({
      mainAxis: 8
    })
  ]

  return <FloatingElement ref={ref} placement={placement} middlewares={middlewares} {...props} />
})
TooltipContent.displayName = 'TooltipContent'

export { TooltipContent }

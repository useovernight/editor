/**
 * Copyright (c) Overnight
 */

import type { Middleware } from '@/types/middleware.type'
import type { Placement } from '@/types/placement.type'

const getTranslateTransformProperty = (placement: Placement, value: number, isVisible: boolean) => {
  switch (placement) {
    case 'top':
    case 'top-start':
    case 'top-end':
      return `translateY(${isVisible ? '0' : `${value}px`})`
    case 'left':
    case 'left-start':
    case 'left-end':
      return `translateX(${isVisible ? '0' : `${value}px`})`
    case 'right':
    case 'right-start':
    case 'right-end':
      return `translateX(${isVisible ? '0' : `-${value}px`})`
    case 'bottom':
    case 'bottom-start':
    case 'bottom-end':
      return `translateY(${isVisible ? '0' : `-${value}px`})`
  }
}

const slideIn =
  (value = 10): Middleware =>
  ({ placement, isVisible }) => ({
    style: {
      transform: [getTranslateTransformProperty(placement, value, isVisible)]
    }
  })

export { slideIn }

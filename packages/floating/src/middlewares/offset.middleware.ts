/**
 * Copyright (c) Overnight
 */

import type { Middleware } from '@/types/middleware.type'
import type { Placement } from '@/types/placement.type'

interface OffsetMiddlewareProps {
  mainAxis: number
  crossAxis: number
  alignmentAxis: number
}

const getMainAxis = (mainAxis: number, placement: Placement) => {
  switch (placement) {
    case 'top':
    case 'top-start':
    case 'top-end':
      return { x: 0, y: -mainAxis }
    case 'left':
    case 'left-start':
    case 'left-end':
      return { x: -mainAxis, y: 0 }
    case 'right':
    case 'right-start':
    case 'right-end':
      return { x: mainAxis, y: 0 }
    case 'bottom':
    case 'bottom-start':
    case 'bottom-end':
      return { x: 0, y: mainAxis }
  }
}

const getCrossAxis = (crossAxis: number, alignmentAxis: number, placement: Placement) => {
  switch (placement) {
    case 'top':
    case 'top-start':
    case 'bottom':
    case 'bottom-start':
      return { x: crossAxis + alignmentAxis, y: 0 }
    case 'top-end':
    case 'bottom-end':
      return { x: crossAxis + -alignmentAxis, y: 0 }
    case 'left':
    case 'left-start':
    case 'right':
    case 'right-start':
      return { x: 0, y: crossAxis + alignmentAxis }
    case 'left-end':
    case 'right-end':
      return { x: 0, y: crossAxis + -alignmentAxis }
  }
}

const offset =
  ({ mainAxis = 0, crossAxis = 0, alignmentAxis = 0 }: Partial<OffsetMiddlewareProps>): Middleware =>
  ({ x, y, placement }) => {
    const { x: x1, y: y1 } = getMainAxis(mainAxis, placement)
    const { x: x2, y: y2 } = getCrossAxis(crossAxis, alignmentAxis, placement)

    return {
      x: x + x1 + x2,
      y: y + y1 + y2
    }
  }

export { offset }

/**
 * Copyright (c) Overnight
 */

import type { Boundary } from '@/types/boundary.type'
import type { Placement } from '@/types/placement.type'
import type { Point } from '@/types/point.type'

const useAnchorPointX = (anchorElementBoundary: Boundary, placement: Placement) => {
  switch (placement) {
    case 'left':
    case 'left-start':
    case 'left-end':
    case 'top-start':
    case 'bottom-start':
      return anchorElementBoundary.x
    case 'top':
    case 'bottom':
      return anchorElementBoundary.x + anchorElementBoundary.width / 2
    case 'right':
    case 'right-start':
    case 'right-end':
    case 'top-end':
    case 'bottom-end':
      return anchorElementBoundary.x + anchorElementBoundary.width
  }
}

const useAnchorPointY = (anchorElementBoundary: Boundary, placement: Placement) => {
  switch (placement) {
    case 'top':
    case 'top-start':
    case 'top-end':
    case 'left-start':
    case 'right-start':
      return anchorElementBoundary.y
    case 'left':
    case 'right':
      return anchorElementBoundary.y + anchorElementBoundary.height / 2
    case 'bottom':
    case 'bottom-start':
    case 'bottom-end':
    case 'left-end':
    case 'right-end':
      return anchorElementBoundary.y + anchorElementBoundary.height
  }
}

const useAnchorPoint = (anchorElementBoundary: Boundary, placement: Placement): Point => {
  const x = useAnchorPointX(anchorElementBoundary, placement)
  const y = useAnchorPointY(anchorElementBoundary, placement)

  return {
    x,
    y
  }
}

export { useAnchorPoint }

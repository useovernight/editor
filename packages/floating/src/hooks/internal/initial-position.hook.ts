/**
 * Copyright (c) Overnight
 */

import type { Placement } from '@/types/placement.type'
import type { Point } from '@/types/point.type'
import type { Size } from '@/types/size.type'

const useInitialPositionX = (floatingElementSize: Size, anchorPoint: Point, placement: Placement) => {
  switch (placement) {
    case 'left':
    case 'left-start':
    case 'left-end':
      return anchorPoint.x - floatingElementSize.width
    case 'top-start':
    case 'bottom-start':
      return anchorPoint.x
    case 'top':
    case 'bottom':
      return anchorPoint.x - floatingElementSize.width / 2
    case 'top-end':
    case 'bottom-end':
      return anchorPoint.x - floatingElementSize.width
    case 'right':
    case 'right-start':
    case 'right-end':
      return anchorPoint.x
  }
}

const useInitialPositionY = (floatingElementSize: Size, anchorPoint: Point, placement: Placement) => {
  switch (placement) {
    case 'top':
    case 'top-start':
    case 'top-end':
      return anchorPoint.y - floatingElementSize.height
    case 'left-start':
    case 'right-start':
      return anchorPoint.y
    case 'left':
    case 'right':
      return anchorPoint.y - floatingElementSize.height / 2
    case 'left-end':
    case 'right-end':
      return anchorPoint.y - floatingElementSize.height
    case 'bottom':
    case 'bottom-start':
    case 'bottom-end':
      return anchorPoint.y
  }
}

const useInitialPosition = (floatingElementSize: Size, anchorPoint: Point, placement: Placement): Point => {
  const x = useInitialPositionX(floatingElementSize, anchorPoint, placement)
  const y = useInitialPositionY(floatingElementSize, anchorPoint, placement)

  return {
    x,
    y
  }
}

export { useInitialPosition }

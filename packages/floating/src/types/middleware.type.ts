/**
 * Copyright (c) Overnight
 */

import type { Placement } from '@/types/placement.type'
import type { StyleProperties } from '@/types/style-properties.type'

interface MiddlewareState {
  x: number
  y: number
  isVisible: boolean
  placement: Placement
  style: StyleProperties
}

interface MiddlewareResult {
  x: number
  y: number
  style: StyleProperties
}

type Middleware = (state: MiddlewareState) => Partial<MiddlewareResult>

export type { MiddlewareState, MiddlewareResult, Middleware }

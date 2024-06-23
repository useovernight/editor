/**
 * Copyright (c) Overnight
 */

import type { Placement } from '@/types/placement.type'
import type { CSSProperties } from 'react'

interface MiddlewareState {
  x: number
  y: number
  placement: Placement
  styles: CSSProperties
}

interface MiddlewareResult {
  x: number
  y: number
  styles: CSSProperties
}

type Middleware = (state: MiddlewareState) => Partial<MiddlewareResult>

export type { MiddlewareState, MiddlewareResult, Middleware }

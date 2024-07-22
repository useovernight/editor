/**
 * Copyright (c) Overnight
 */

import type { Middleware } from '@/types/middleware.type'

const zoomIn =
  (value = 0.8): Middleware =>
  ({ isVisible }) => ({
    style: {
      transform: [`scale(${isVisible ? '1' : value})`]
    }
  })

export { zoomIn }

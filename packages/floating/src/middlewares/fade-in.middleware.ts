/**
 * Copyright (c) Overnight
 */

import type { Middleware } from '@/types/middleware.type'

const fadeIn =
  (): Middleware =>
  ({ isVisible }) => ({
    style: {
      opacity: isVisible ? '1' : '0'
    }
  })

export { fadeIn }

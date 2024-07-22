/**
 * Copyright (c) Overnight
 */

import type { Middleware } from '@/types/middleware.type'

const animate =
  (duration: number): Middleware =>
  () => {
    if (duration <= 0) {
      return {}
    }

    return {
      style: {
        transition: [`opacity ${duration}ms ease-out`, `transform ${duration}ms ease-out`]
      }
    }
  }

export { animate }

/**
 * Copyright (c) Overnight
 */

import type { Middleware } from '@/types/middleware.type'

const fadeIn =
  (duration: number): Middleware =>
  ({ styles }) => {
    if (duration <= 0) {
      return {}
    }

    return {
      styles: {
        ...styles,
        transition: `opacity ${duration}ms ease-out`
      }
    }
  }

export { fadeIn }

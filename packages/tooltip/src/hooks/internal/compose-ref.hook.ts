/**
 * Copyright (c) Overnight
 */

import { useEffect, useRef } from 'react'
import type { ForwardedRef } from 'react'

/**
 * @see https://github.com/facebook/react/issues/24722
 */
const useComposeRef = <T>(reference: ForwardedRef<T>) => {
  const targetReference = useRef<T>(null)

  useEffect(() => {
    if (reference === null) {
      return
    }

    if (typeof reference === 'function') {
      reference(targetReference.current)
    } else {
      reference.current = targetReference.current
    }
  }, [reference])

  return targetReference
}

export { useComposeRef }

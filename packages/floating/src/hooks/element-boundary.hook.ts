/**
 * Copyright (c) Overnight
 */

import type { Boundary } from '@/types/boundary.type'
import { type MutableRefObject, useEffect, useState } from 'react'

const useElementBoundary = (ref: MutableRefObject<HTMLElement | null>): Boundary => {
  const [boundary, setBoundary] = useState<Boundary>({ x: 0, y: 0, width: 0, height: 0 })

  useEffect(() => {
    const { current } = ref

    const updateBoundary = () => {
      if (current !== null) {
        const { x, y, width, height } = current.getBoundingClientRect()
        setBoundary({ x, y, width, height })
      }
    }

    updateBoundary()

    if (current !== null) {
      const resizeObserver = new ResizeObserver(updateBoundary)
      resizeObserver.observe(current)

      return () => resizeObserver.disconnect()
    }
  }, [ref])

  return boundary
}

export { useElementBoundary }

/**
 * Copyright (c) Overnight
 */

import type { Size } from '@/types/size.type'
import { type RefObject, useEffect, useState } from 'react'

const useElementSize = ({ current }: RefObject<HTMLElement>) => {
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0
  })

  useEffect(() => {
    if (current === null) {
      return
    }

    const handleSizeChange = () =>
      setSize({
        width: current.offsetWidth,
        height: current.offsetHeight
      })

    const resizeObserver = new ResizeObserver(handleSizeChange)
    resizeObserver.observe(current)

    return () => resizeObserver.unobserve(current)
  }, [current])

  return size
}

export { useElementSize }

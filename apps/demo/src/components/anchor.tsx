/**
 * Copyright (c) Overnight
 */

'use client'

import { useElementBoundary } from '@useovernight/floating/hooks/element-boundary.hook'
import { useFloating } from '@useovernight/floating/hooks/floating.hook'
import { useRef } from 'react'

const Anchor = () => {
  const anchorElementRef = useRef<HTMLDivElement | null>(null)
  const anchorBoundary = useElementBoundary(anchorElementRef)

  const { toggle } = useFloating()

  return (
    <div
      ref={anchorElementRef}
      className="cursor-pointer select-none bg-blue-300 p-2"
      onClick={() => toggle(anchorBoundary)}
      onKeyDown={() => toggle(anchorBoundary)}
    >
      Anchor
    </div>
  )
}

export { Anchor }

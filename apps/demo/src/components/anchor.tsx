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

  const { toggle } = useFloating(anchorBoundary)

  return (
    <div
      ref={anchorElementRef}
      className="cursor-pointer select-none bg-blue-300 p-2"
      onClick={toggle}
      onKeyDown={toggle}
    >
      Anchor
    </div>
  )
}

export { Anchor }

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

  const { display, hide } = useFloating()

  return (
    <div
      ref={anchorElementRef}
      className="flex h-52 w-80 select-none items-center justify-center rounded-md border border-input bg-background text-primary"
      onMouseEnter={() => display(anchorBoundary)}
      onMouseLeave={() => hide()}
    >
      Hover over me
    </div>
  )
}

export { Anchor }

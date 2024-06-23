/**
 * Copyright (c) Overnight
 */

'use client'

import { FloaterId } from '@/constants/floater.const'
import { type PropsWithChildren, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface FloatingPortalProps extends PropsWithChildren {}

const FloatingPortal = ({ children }: FloatingPortalProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const floater = document.getElementById(FloaterId)

  if (floater === null) {
    throw new Error('<FloatingPortal> should be used with <Floater>')
  }

  return createPortal(children, floater)
}

export { FloatingPortal }
export type { FloatingPortalProps }

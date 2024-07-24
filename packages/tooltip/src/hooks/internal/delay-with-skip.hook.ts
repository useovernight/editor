/**
 * Copyright (c) Overnight
 */

import { useCallback, useEffect, useRef } from 'react'

type Callback = () => void

const useDelayWithSkip = (callback: Callback, delayDuration: number, skipDelayDuration: number) => {
  const timeoutRef = useRef<Timer | null>(null)
  const lastHideTimeRef = useRef<number>(0)

  const setDelay = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      callback()
      lastHideTimeRef.current = Date.now()
    }, delayDuration)
  }, [callback, delayDuration])

  const clearDelay = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  const activateWithDelay = useCallback(() => {
    const now = Date.now()
    if (now - lastHideTimeRef.current < skipDelayDuration) {
      callback()
    } else {
      setDelay()
    }
  }, [callback, setDelay, skipDelayDuration])

  const resetDelayTimer = useCallback(() => {
    clearDelay()
    lastHideTimeRef.current = Date.now()
  }, [clearDelay])

  useEffect(() => {
    return () => {
      clearDelay()
    }
  }, [clearDelay])

  return {
    activateWithDelay,
    resetDelayTimer
  }
}

export { useDelayWithSkip }

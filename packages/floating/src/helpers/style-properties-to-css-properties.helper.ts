/**
 * Copyright (c) Overnight
 */

import type { StyleProperties } from '@/types/style-properties.type'
import type { CSSProperties } from 'react'

const stylePropertiesToCssProperties = ({
  transform = [],
  transition = [],
  ...style
}: StyleProperties): CSSProperties => {
  const transformProperty = transform.join(' ')
  const transitionProperty = transition.join(', ')

  return {
    ...style,
    transform: transformProperty,
    transition: transitionProperty
  }
}

export { stylePropertiesToCssProperties }

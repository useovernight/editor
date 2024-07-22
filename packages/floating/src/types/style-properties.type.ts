/**
 * Copyright (c) Overnight
 */

import type { CSSProperties } from 'react'

interface CustomStyleProperties {
  transform: string[]
  transition: string[]
}

type StyleProperties = Omit<CSSProperties, 'transform' | 'transition'> & Partial<CustomStyleProperties>

export type { StyleProperties }

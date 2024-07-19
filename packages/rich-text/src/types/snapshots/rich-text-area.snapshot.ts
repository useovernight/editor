/**
 * Copyright (c) Overnight
 */

import type { Selection } from '@/selection'
import type { TokenWithId } from '@/types/object.type'

interface RichTextAreaSnapshot {
  tokens: readonly TokenWithId[]
  selection: Selection | undefined
}

export type { RichTextAreaSnapshot }

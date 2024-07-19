/**
 * Copyright (c) Overnight
 */

import type { Cursor } from '@/cursor'

class Selection {
  constructor(
    public readonly start: Cursor,
    public readonly end: Cursor
  ) {}
}

export { Selection }

/**
 * Copyright (c) Overnight
 */

import type { RichTextAreaSnapshot } from '@/types/snapshots/rich-text-area.snapshot'

interface CreateSnapshotParams {
  range: Range | undefined
}

interface RichTextAreaActions {
  createSnapshot: (params: CreateSnapshotParams) => RichTextAreaSnapshot
}

export type { RichTextAreaActions }

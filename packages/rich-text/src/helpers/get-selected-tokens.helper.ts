/**
 * Copyright (c) Overnight
 */

import type { RichTextAreaSnapshot } from '@/types/snapshots/rich-text-area.snapshot'

const getSelectedTokens = (snapshots: readonly RichTextAreaSnapshot[]) =>
  snapshots
    .flatMap(({ tokens, selection }) => {
      if (selection === undefined) {
        return undefined
      }

      return tokens.slice(selection.startIndex, selection.endIndex + 1)
    })
    .filter((snapshot) => snapshot !== undefined)

export { getSelectedTokens }

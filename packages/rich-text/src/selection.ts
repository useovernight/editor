/**
 * Copyright (c) Overnight
 */

class Selection {
  constructor(
    public readonly startIndex: number,
    public readonly startOffset: number,
    public readonly endIndex: number,
    public readonly endOffset: number
  ) {}
}

export { Selection }

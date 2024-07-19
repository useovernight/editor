/**
 * Copyright (c) Overnight
 */

import { Cursor } from '@/cursor'
import { Selection } from '@/selection'
import type { TokenWithId } from '@/types/object.type'

const getStartIndexAndOffset = (leaf: Element, range: Range) => {
  const hasStartMarker = leaf.contains(range.startContainer)

  if (!hasStartMarker) {
    return new Cursor(0, 0)
  }

  const startMarkerElement = range.startContainer.parentElement

  if (startMarkerElement === null) {
    throw new Error('Start element does not exist')
  }

  const children = Array.from(leaf.children)
  const startTokenIndex = children.indexOf(startMarkerElement)

  if (startTokenIndex === -1) {
    throw new Error('Start element is not a first level child of the leaf')
  }

  return new Cursor(startTokenIndex, range.startOffset)
}

const getEndIndexAndOffset = (leaf: Element, range: Range, tokens: readonly TokenWithId[]) => {
  const hasEndMarker = leaf.contains(range.endContainer)

  if (!hasEndMarker) {
    const lastTokenWithId = tokens.at(-1)

    if (lastTokenWithId === undefined) {
      return new Cursor(0, 0)
    }

    const [, lastToken] = lastTokenWithId
    return new Cursor(tokens.length - 1, lastToken.content.length)
  }

  const endMarkerElement = range.endContainer.parentElement

  if (endMarkerElement === null) {
    throw new Error('End element does not exist')
  }

  const children = Array.from(leaf.children)
  const endTokenIndex = children.indexOf(endMarkerElement)

  if (endTokenIndex === -1) {
    throw new Error('End element is not a first level child of the leaf')
  }

  return new Cursor(endTokenIndex, range.endOffset)
}

const createSelection = (leaf: Element, range: Range, tokens: readonly TokenWithId[]) => {
  if (!range.intersectsNode(leaf)) {
    return undefined
  }

  const startCursor = getStartIndexAndOffset(leaf, range)
  const endCursor = getEndIndexAndOffset(leaf, range, tokens)

  return new Selection(startCursor, endCursor)
}

export { createSelection }

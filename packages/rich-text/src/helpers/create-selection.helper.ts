/**
 * Copyright (c) Overnight
 */

import { Selection } from '@/selection'
import type { TokenWithId } from '@/types/object.type'

const getStartIndexAndOffset = (leaf: Element, range: Range): [number, number] => {
  const hasStartMarker = leaf.contains(range.startContainer)

  if (!hasStartMarker) {
    return [0, 0]
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

  return [startTokenIndex, range.startOffset]
}

const getEndIndexAndOffset = (leaf: Element, range: Range, tokens: readonly TokenWithId[]): [number, number] => {
  const hasEndMarker = leaf.contains(range.endContainer)

  if (!hasEndMarker) {
    const lastTokenWithId = tokens.at(-1)

    if (lastTokenWithId === undefined) {
      return [0, 0]
    }

    const [, lastToken] = lastTokenWithId
    return [tokens.length - 1, lastToken.content.length]
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

  return [endTokenIndex, range.endOffset]
}

const createSelection = (leaf: Element, range: Range, tokens: readonly TokenWithId[]) => {
  if (!range.intersectsNode(leaf)) {
    return undefined
  }

  const [startIndex, startOffset] = getStartIndexAndOffset(leaf, range)
  const [endIndex, endOffset] = getEndIndexAndOffset(leaf, range, tokens)

  return new Selection(startIndex, startOffset, endIndex, endOffset)
}

export { createSelection }

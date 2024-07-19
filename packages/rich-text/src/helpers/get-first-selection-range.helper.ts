/**
 * Copyright (c) Overnight
 */

const getFirstSelectionRange = () => {
  const documentSelection = document.getSelection()

  if (documentSelection === null || documentSelection.rangeCount < 1) {
    return undefined
  }

  const range = documentSelection.getRangeAt(0)

  if (range.collapsed) {
    return undefined
  }

  return range
}

export { getFirstSelectionRange }

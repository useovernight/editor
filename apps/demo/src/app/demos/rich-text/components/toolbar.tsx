/**
 * Copyright (c) Overnight
 */

'use client'

import { Button } from '@/components/inputs/button'
import { useSelection } from '@useovernight/rich-text/hooks/selection.hook'
import { cva } from 'class-variance-authority'
import { Bold, Italic, Strikethrough, Underline } from 'lucide-react'

const toolbarIconVariants = cva('size-4', {
  variants: {
    selected: {
      true: 'stroke-3 stroke-black-900',
      false: 'stroke-2 stroke-slate-700'
    }
  }
})

const Toolbar = () => {
  const { isBold, isItalic, isUnderline, isStrike } = useSelection()

  return (
    <div className="flex flex-row space-x-1 rounded-lg border border-slate-200 bg-white p-1">
      <Button variant="ghost" className="cursor-pointer rounded" size="sm">
        <Bold className={toolbarIconVariants({ selected: isBold })} />
      </Button>
      <Button variant="ghost" className="cursor-pointer rounded" size="sm">
        <Italic className={toolbarIconVariants({ selected: isItalic })} />
      </Button>
      <Button variant="ghost" className="cursor-pointer rounded" size="sm">
        <Underline className={toolbarIconVariants({ selected: isUnderline })} />
      </Button>
      <Button variant="ghost" className="cursor-pointer rounded" size="sm">
        <Strikethrough className={toolbarIconVariants({ selected: isStrike })} />
      </Button>
    </div>
  )
}

export { Toolbar }

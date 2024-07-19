/**
 * Copyright (c) Overnight
 */

'use client'

import { Toolbar } from '@/app/demos/rich-text/components/toolbar'
import { RichTextArea } from '@useovernight/rich-text/components/rich-text-area'
import { RichTextContent } from '@useovernight/rich-text/components/rich-text-content'
import { RichTextEditor } from '@useovernight/rich-text/components/rich-text-editor'
import { TokenStyle } from '@useovernight/rich-text/enums/token-style.enum'
import { Token } from '@useovernight/rich-text/token'
import type { TokenWithId } from '@useovernight/rich-text/types/object.type'

const RichTextDemoPage = () => {
  const line1: readonly TokenWithId[] = [
    ['QJz', new Token('Lorem ip')],
    ['TYj', new Token('sum do', TokenStyle.Bold)],
    ['y2K', new Token('lor sit am', TokenStyle.Bold | TokenStyle.Italic)],
    ['Wv7', new Token('et, conse', TokenStyle.Italic | TokenStyle.Underline)],
    ['ajv', new Token('ctetur adipisc', TokenStyle.Underline)],
    ['xgA', new Token('ing elit')]
  ]
  const line2: readonly TokenWithId[] = [
    ['gPj', new Token('Hel', TokenStyle.Bold)],
    ['gpD', new Token('l')],
    ['p3e', new Token('o wo', TokenStyle.Strike | TokenStyle.Italic)],
    ['6y4', new Token('rld', TokenStyle.Italic)]
  ]
  const line3: readonly TokenWithId[] = [
    ['53J', new Token('Bonj')],
    ['ABE', new Token('our ', TokenStyle.Italic | TokenStyle.Bold)],
    ['Usp', new Token('à tous', TokenStyle.Underline)]
  ]

  return (
    <main className="m-8">
      <RichTextEditor className="flex flex-col space-y-3">
        <Toolbar />
        <RichTextContent className="flex cursor-default flex-col space-y-2 outline-none">
          <RichTextArea
            id="1"
            className="min-h-8 cursor-text rounded border border-slate-200 bg-white px-2 py-1 text-base"
            tokens={line1}
          />
          <RichTextArea
            id="2"
            className="min-h-8 cursor-text rounded border border-slate-200 bg-white px-2 py-1 text-base"
            tokens={line2}
          />
          <RichTextArea
            id="3"
            className="min-h-8 cursor-text rounded border border-slate-200 bg-white px-2 py-1 text-base"
            tokens={line3}
          />
        </RichTextContent>
      </RichTextEditor>
    </main>
  )
}

export default RichTextDemoPage

/**
 * Copyright (c) Overnight
 */

'use client'

import { Button } from '@/components/inputs/button'
import { Tooltip } from '@useovernight/tooltip/components/tooltip'
import { TooltipContent } from '@useovernight/tooltip/components/tooltip-content'
import { TooltipTrigger } from '@useovernight/tooltip/components/tooltip-trigger'

const TooltipDemoPage = () => (
  <main className="flex h-screen w-screen items-center justify-center">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover over me</Button>
      </TooltipTrigger>
      <TooltipContent className="rounded bg-primary px-2 py-1 text-secondary text-sm">Tooltip!</TooltipContent>
    </Tooltip>
  </main>
)

export default TooltipDemoPage

/**
 * Copyright (c) Overnight
 */

'use client'

import { cn } from '@/helpers/cn.helper'
import {
  Content as DropdownMenuPrimitiveContent,
  Portal as DropdownMenuPrimitivePortal
} from '@radix-ui/react-dropdown-menu'
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

interface DropdownMenuContentProps extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitiveContent> {}

const DropdownMenuContent = forwardRef<ElementRef<typeof DropdownMenuPrimitiveContent>, DropdownMenuContentProps>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPrimitivePortal>
      <DropdownMenuPrimitiveContent
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in',
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitivePortal>
  )
)
DropdownMenuContent.displayName = DropdownMenuPrimitiveContent.displayName

export { DropdownMenuContent }
export type { DropdownMenuContentProps }

/**
 * Copyright (c) Overnight
 */

'use client'

import { cn } from '@/helpers/cn.helper'
import { Indicator as CheckboxPrimitiveIndicator, Root as CheckboxPrimitiveRoot } from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

interface CheckboxProps extends ComponentPropsWithoutRef<typeof CheckboxPrimitiveRoot> {}

const Checkbox = forwardRef<ElementRef<typeof CheckboxPrimitiveRoot>, CheckboxProps>(({ className, ...props }, ref) => (
  <CheckboxPrimitiveRoot
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      className
    )}
    {...props}
  >
    <CheckboxPrimitiveIndicator className={cn('flex items-center justify-center text-current')}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitiveIndicator>
  </CheckboxPrimitiveRoot>
))
Checkbox.displayName = CheckboxPrimitiveRoot.displayName

export { Checkbox }
export type { CheckboxProps }

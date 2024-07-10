/**
 * Copyright (c) Overnight
 */

'use client'

import { cn } from '@/helpers/cn.helper'
import { Root as LabelPrimitiveRoot } from '@radix-ui/react-label'
import { type VariantProps, cva } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

const labelVariants = cva('font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70')

type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitiveRoot> & VariantProps<typeof labelVariants>

const Label = forwardRef<ElementRef<typeof LabelPrimitiveRoot>, LabelProps>(({ className, ...props }, ref) => (
  <LabelPrimitiveRoot ref={ref} className={cn(labelVariants(), className)} {...props} />
))
Label.displayName = LabelPrimitiveRoot.displayName

export { Label }
export type { LabelProps }

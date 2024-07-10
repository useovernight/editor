/**
 * Copyright (c) Overnight
 */

'use client'

import { Label } from '@/components/typography/label'
import { cn } from '@/helpers/cn.helper'
import { useFormField } from '@/hooks/form-field.hook'
import type { Root as LabelPrimitiveRoot } from '@radix-ui/react-label'
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

interface FormLabelProps extends ComponentPropsWithoutRef<typeof LabelPrimitiveRoot> {}

const FormLabel = forwardRef<ElementRef<typeof LabelPrimitiveRoot>, FormLabelProps>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return <Label ref={ref} className={cn(error && 'text-destructive', className)} htmlFor={formItemId} {...props} />
})
FormLabel.displayName = 'FormLabel'

export { FormLabel }
export type { FormLabelProps }

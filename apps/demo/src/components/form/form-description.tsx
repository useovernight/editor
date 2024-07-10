/**
 * Copyright (c) Overnight
 */

'use client'

import { cn } from '@/helpers/cn.helper'
import { useFormField } from '@/hooks/form-field.hook'
import { type HTMLAttributes, forwardRef } from 'react'

interface FormDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

const FormDescription = forwardRef<HTMLParagraphElement, FormDescriptionProps>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return <p ref={ref} id={formDescriptionId} className={cn('text-muted-foreground text-sm', className)} {...props} />
})
FormDescription.displayName = 'FormDescription'

export { FormDescription }
export type { FormDescriptionProps }

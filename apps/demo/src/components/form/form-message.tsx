/**
 * Copyright (c) Overnight
 */

'use client'

import { cn } from '@/helpers/cn.helper'
import { useFormField } from '@/hooks/form-field.hook'
import { type HTMLAttributes, forwardRef } from 'react'

interface FormMessageProps extends HTMLAttributes<HTMLParagraphElement> {}

const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p ref={ref} id={formMessageId} className={cn('font-medium text-destructive text-sm', className)} {...props}>
      {body}
    </p>
  )
})
FormMessage.displayName = 'FormMessage'

export { FormMessage }
export type { FormMessageProps }

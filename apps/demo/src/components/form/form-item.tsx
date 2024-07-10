/**
 * Copyright (c) Overnight
 */

'use client'

import { FormItemContext } from '@/contexts/form-item.context'
import { cn } from '@/helpers/cn.helper'
import { type HTMLAttributes, forwardRef, useId } from 'react'

interface FormItemsProps extends HTMLAttributes<HTMLDivElement> {}

const FormItem = forwardRef<HTMLDivElement, FormItemsProps>(({ className, ...props }, ref) => {
  const id = useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn('space-y-2', className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = 'FormItem'

export { FormItem }
export type { FormItemsProps }

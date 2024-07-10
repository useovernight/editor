/**
 * Copyright (c) Overnight
 */

'use client'

import { useFormField } from '@/hooks/form-field.hook'
import { Slot } from '@radix-ui/react-slot'
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

interface FormControlProps extends ComponentPropsWithoutRef<typeof Slot> {}

const FormControl = forwardRef<ElementRef<typeof Slot>, FormControlProps>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={error ? `${formDescriptionId} ${formMessageId}` : `${formDescriptionId}`}
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = 'FormControl'

export { FormControl }
export type { FormControlProps }

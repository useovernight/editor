/**
 * Copyright (c) Overnight
 */

import { FormFieldContext } from '@/contexts/form-field.context'
import { FormItemContext } from '@/contexts/form-item.context'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext)
  const itemContext = useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  }
}

export { useFormField }

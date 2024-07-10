/**
 * Copyright (c) Overnight
 */

'use client'

import { FormFieldContext } from '@/contexts/form-field.context'
import { Controller, type ControllerProps, type FieldPath, type FieldValues } from 'react-hook-form'

const FormField = <
  FormFieldValues extends FieldValues = FieldValues,
  FormName extends FieldPath<FormFieldValues> = FieldPath<FormFieldValues>
>({
  ...props
}: ControllerProps<FormFieldValues, FormName>) => (
  <FormFieldContext.Provider value={{ name: props.name }}>
    <Controller {...props} />
  </FormFieldContext.Provider>
)

export { FormField }

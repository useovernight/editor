/**
 * Copyright (c) Overnight
 */

import { createContext } from 'react'
import type { FieldPath, FieldValues } from 'react-hook-form'

type FormFieldContextValue<
  FormFieldValues extends FieldValues = FieldValues,
  FormName extends FieldPath<FormFieldValues> = FieldPath<FormFieldValues>
> = {
  name: FormName
}

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue)

export { FormFieldContext }
export type { FormFieldContextValue }

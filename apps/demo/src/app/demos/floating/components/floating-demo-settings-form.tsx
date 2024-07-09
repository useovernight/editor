/**
 * Copyright (c) Overnight
 */

'use client'

import { Form } from '@/components/form/form'
import { FormControl } from '@/components/form/form-control'
import { FormField } from '@/components/form/form-field'
import { FormItem } from '@/components/form/form-item'
import { FormLabel } from '@/components/form/form-label'
import { FormMessage } from '@/components/form/form-message'
import { Checkbox } from '@/components/inputs/checkbox'
import type { FloatingDemoSettingsFormSchema } from '@/schemas/floating-demo-settings-form.schema'
import type { UseFormReturn } from 'react-hook-form'
import { placementItems } from '../placement-items'

interface FloatingDemoSettingsFormProps {
  form: UseFormReturn<FloatingDemoSettingsFormSchema>
}

const FloatingDemoSettingsForm = ({ form }: FloatingDemoSettingsFormProps) => (
  <Form {...form}>
    <form className="m-2 space-y-8">
      <FormField
        control={form.control}
        name="placements"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-base">Placements</FormLabel>
            </div>
            {placementItems.map((item) => (
              <FormField
                key={item.placement}
                control={form.control}
                name="placements"
                render={({ field }) => (
                  <FormItem key={item.placement} className="flex flex-row items-start space-x-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.placement)}
                        onCheckedChange={(checked) =>
                          checked
                            ? field.onChange([...field.value, item.placement])
                            : field.onChange(field.value?.filter((value) => value !== item.placement))
                        }
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{item.label}</FormLabel>
                  </FormItem>
                )}
              />
            ))}
            <FormMessage />
          </FormItem>
        )}
      />
    </form>
  </Form>
)

export { FloatingDemoSettingsForm }

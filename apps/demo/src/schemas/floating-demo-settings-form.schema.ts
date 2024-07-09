/**
 * Copyright (c) Overnight
 */

import { z } from 'zod'

const floatingDemoSettingsFormSchema = z.object({
  placements: z.array(
    z.enum([
      'top',
      'top-start',
      'top-end',
      'right',
      'right-start',
      'right-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'left',
      'left-start',
      'left-end'
    ])
  )
})
type FloatingDemoSettingsFormSchema = z.infer<typeof floatingDemoSettingsFormSchema>

export { floatingDemoSettingsFormSchema }
export type { FloatingDemoSettingsFormSchema }

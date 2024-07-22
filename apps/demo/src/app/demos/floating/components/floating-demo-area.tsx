/**
 * Copyright (c) Overnight
 */

'use client'

import type { FloatingDemoSettingsFormSchema } from '@/schemas/floating-demo-settings-form.schema'
import { Floating } from '@useovernight/floating/components/floating'
import { FloatingElement } from '@useovernight/floating/components/floating-element'
import { animate } from '@useovernight/floating/middlewares/animate.middleware'
import { fadeIn } from '@useovernight/floating/middlewares/fade-in.middleware'
import { offset } from '@useovernight/floating/middlewares/offset.middleware'
import type { UseFormReturn } from 'react-hook-form'
import { Anchor } from './anchor'

interface FloatingDemoAreaProps {
  form: UseFormReturn<FloatingDemoSettingsFormSchema>
}

const middlewares = [
  fadeIn(),
  animate(180),
  offset({
    mainAxis: 16
  })
]

const FloatingDemoArea = ({ form }: FloatingDemoAreaProps) => {
  const placements = form.watch('placements')

  return (
    <Floating>
      <Anchor />
      {placements.map((placement) => (
        <FloatingElement
          key={placement}
          className="rounded bg-primary px-2 py-1 text-secondary text-sm"
          placement={placement}
          middlewares={middlewares}
        >
          {placement}
        </FloatingElement>
      ))}
    </Floating>
  )
}

export { FloatingDemoArea }

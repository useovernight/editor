/**
 * Copyright (c) Overnight
 */

'use client'

import { FloatingDemoArea } from '@/app/demos/floating/components/floating-demo-area'
import { FloatingDemoSettingsForm } from '@/app/demos/floating/components/floating-demo-settings-form'
import { DropdownMenu } from '@/components/dropdown/dropdown-menu'
import { DropdownMenuContent } from '@/components/dropdown/dropdown-menu-content'
import { DropdownMenuTrigger } from '@/components/dropdown/dropdown-menu-trigger'
import { Button } from '@/components/inputs/button'
import {
  type FloatingDemoSettingsFormSchema,
  floatingDemoSettingsFormSchema
} from '@/schemas/floating-demo-settings-form.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Menu } from 'lucide-react'
import { useForm } from 'react-hook-form'

const FloatingDemoPage = () => {
  const form = useForm<FloatingDemoSettingsFormSchema>({
    resolver: zodResolver(floatingDemoSettingsFormSchema),
    defaultValues: {
      placements: [
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
      ]
    },
    mode: 'all'
  })

  return (
    <main className="flex h-screen">
      <div className="m-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu size="16" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[300px]">
            <FloatingDemoSettingsForm form={form} />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <FloatingDemoArea form={form} />
      </div>
    </main>
  )
}

export default FloatingDemoPage

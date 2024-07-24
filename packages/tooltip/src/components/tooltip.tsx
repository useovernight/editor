/**
 * Copyright (c) Overnight
 */

import { Floating } from '@useovernight/floating/components/floating'
import type { PropsWithChildren } from 'react'

interface TooltipProps extends PropsWithChildren {}

const Tooltip = (props: TooltipProps) => <Floating {...props} />

export { Tooltip }

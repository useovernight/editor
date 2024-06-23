/**
 * Copyright (c) Overnight
 */

import { Anchor } from '@/components/anchor'
import { Floating } from '@useovernight/floating/components/floating'
import { FloatingElement } from '@useovernight/floating/components/floating-element'

const Home = () => (
  <div className="flex h-screen w-screen items-center justify-center">
    <Floating>
      <Anchor />
      <FloatingElement placement="bottom" className="bg-red-500 p-2">
        Floating Element
      </FloatingElement>
    </Floating>
  </div>
)

export default Home

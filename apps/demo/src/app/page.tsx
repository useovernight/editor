/**
 * Copyright (c) Overnight
 */

'use client'

import { Anchor } from '@/components/anchor'
import { Floating } from '@useovernight/floating/components/floating'
import { FloatingElement } from '@useovernight/floating/components/floating-element'
import { fadeIn } from '@useovernight/floating/middlewares/fade-in.middleware'
import { offset } from '@useovernight/floating/middlewares/offset.middleware'

const Home = () => {
  const middlewares = [
    fadeIn(200),
    offset({
      mainAxis: 20
    })
  ]

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Floating>
        <Anchor />
        <FloatingElement placement="bottom" className="bg-red-500 p-2" middlewares={middlewares}>
          Floating Element
        </FloatingElement>
      </Floating>
    </div>
  )
}

export default Home

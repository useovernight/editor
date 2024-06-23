/**
 * Copyright (c) Overnight
 */

import type { Metadata } from 'next'
import './globals.css'
import { Floater } from '@useovernight/floating/components/floater'
import { Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Editor demo'
}

interface RootLayoutProps extends PropsWithChildren {}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body className={inter.className}>
      {children}
      <Floater />
    </body>
  </html>
)

export default RootLayout

// ========== Layout
// import all packages
import React, { type PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// import all components
import { ReduxWrapper } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Klu Chat',
  description: 'Klu Technical Test'
}

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
       <ReduxWrapper>
        {children}
       </ReduxWrapper>
      </body>
    </html>
  )
}

export default RootLayout

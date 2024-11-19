import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles'

import TopNavBar from '@/components/top-nav-bar'
import theme from '@/theme'

import '@/styles/globals.scss'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

export const metadata: Metadata = {
  title: 'Dinezy POS - Point of Sale System',
  description: 'Dinezy POS - Point of Sale System',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <TopNavBar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

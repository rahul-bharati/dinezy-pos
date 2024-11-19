import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.scss'
import TopNavBar from '@/components/top-nav-bar'
import { createTheme, ThemeProvider } from '@mui/material/styles'

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

  const theme = createTheme({
    palette: {
      primary: {
        main: '#0A2463',
        light: '#FFFAFF',
        dark: '#1E1B18',
      },
    },
  })

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <TopNavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

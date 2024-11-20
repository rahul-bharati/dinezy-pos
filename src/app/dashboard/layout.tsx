import Sidemenu from '@/components/sidemenu'
import { Box } from '@mui/material'
import Header from '@/components/header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidemenu />
      <Box component={'main'} sx={{ flexGrow: 1, height: '100%', minHeight: '100dvh', overflow: 'auto' }}>
        <Header />
        {children}
      </Box>
    </Box>
  )
}

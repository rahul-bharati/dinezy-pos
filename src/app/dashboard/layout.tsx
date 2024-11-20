import Sidemenu from '@/components/sidemenu'
import { Box } from '@mui/material'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidemenu />
      <Box component={'main'} sx={{ flexGrow: 1, overflow: 'auto' }}>
        {children}
      </Box>
    </Box>
  )
}

'use client'

import { Box, Divider } from '@mui/material'
import { Drawer } from '@/themes'
import { drawerClasses } from '@mui/material/Drawer'
import OutletSelect from '@/components/outlet-select'
import SideMenuContent from '@/components/side-menu-content'
import { usePathname } from 'next/navigation'

const Sidemenu = () => {

  const path = usePathname();
  if(path.includes('new')) {
    return null;
  }

  return (
    <Drawer
      variant={'permanent'}
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mt: `calc(var(--template-frame-height, 0px) + 4px)`,
          p: 1.5,
        }}
      >
        <OutletSelect />
      </Box>
      <Divider />
      <SideMenuContent />
    </Drawer>
  )
}

export default Sidemenu

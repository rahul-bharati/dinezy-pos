'use client'

import { Box, Divider, Typography } from '@mui/material'
import { Drawer } from '@/themes'
import { drawerClasses } from '@mui/material/Drawer'
import OutletSelect from '@/components/outlet-select'
import SideMenuContent from '@/components/side-menu-content'

const Sidemenu = () => {
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

      {/*<Typography>Orders</Typography>*/}
      {/*<Typography>Menu</Typography>*/}
      {/*<Typography>Settings</Typography>*/}
    </Drawer>
  )
}

export default Sidemenu

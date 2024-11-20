'use client'

import { styled } from '@mui/material/styles'
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer'

export const Drawer = styled(MuiDrawer)({
  width: 240,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: 240,
    boxSizing: 'border-box',
  },
})

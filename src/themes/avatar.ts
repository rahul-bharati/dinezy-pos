'use client'

import { styled } from '@mui/material/styles'
import MuiAvatar from '@mui/material/Avatar'
import MUIListItemAvatar from '@mui/material/ListItemAvatar'

export const Avatar = styled(MuiAvatar)(({ theme }) => ({
  width: 28,
  height: 28,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
}))

export const ListItemAvatar = styled(MUIListItemAvatar)({
  minWidth: 0,
  marginRight: 12,
})

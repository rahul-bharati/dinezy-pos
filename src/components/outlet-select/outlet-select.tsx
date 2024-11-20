import {
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
  SelectChangeEvent,
  selectClasses,
} from '@mui/material'
import { useState } from 'react'
import { Avatar, ListItemAvatar } from '@/themes'
import { StorefrontOutlined } from '@mui/icons-material'

const OutletSelect = () => {
  const [outlet, setOutlet] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setOutlet(event.target.value)
  }

  return (
    <Select
      labelId={'outlet-select'}
      id={'outlet-select'}
      value={outlet}
      displayEmpty
      inputProps={{ 'aria-label': 'Select Outlet' }}
      fullWidth={true}
      onChange={handleChange}
      sx={{
        maxHeight: 58,
        width: 215,
        '&.MuiList-root': {
          p: '8px',
        },
        [`& .${selectClasses.select}`]: {
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          pl: 1,
        },
      }}
    >
      <ListSubheader sx={{ pt: 0 }}>4 States</ListSubheader>
      <MenuItem value={''}>
        <ListItemAvatar>
          <Avatar alt={'4 States'}>
            <StorefrontOutlined sx={{ fontSize: '1rem' }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={'4 States'} secondary={'Vasai'} />
      </MenuItem>
      <MenuItem value={'1'}>
        <ListItemAvatar>
          <Avatar alt={'4 States'}>
            <StorefrontOutlined sx={{ fontSize: '1rem' }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={'4 States'} secondary={'Vasai'} />
      </MenuItem>
      <MenuItem value={'2'}>
        <ListItemAvatar>
          <Avatar alt={'4 States'}>
            <StorefrontOutlined sx={{ fontSize: '1rem' }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={'4 States'} secondary={'Vasai'} />
      </MenuItem>
    </Select>
  )
}

export default OutletSelect

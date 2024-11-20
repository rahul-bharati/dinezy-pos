import {
  Divider,
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
  selectClasses,
} from '@mui/material'
import { Avatar, ListItemAvatar } from '@/themes'
import { StorefrontOutlined, AddRounded } from '@mui/icons-material'
import ListItemIcon from '@mui/material/ListItemIcon'
import { useRouter } from 'next/navigation'

const OutletSelect = () => {
  const router = useRouter()

  return (
    <Select
      labelId={'outlet-select'}
      id={'outlet-select'}
      displayEmpty
      inputProps={{ 'aria-label': 'Select Outlet' }}
      fullWidth={true}
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
      <MenuItem value={'2'} >
        <ListItemAvatar>
          <Avatar alt={'4 States'}>
            <StorefrontOutlined sx={{ fontSize: '1rem' }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={'4 States'} secondary={'Vasai'} />
      </MenuItem>
      <Divider sx={{ mx: -1 }} />
      <MenuItem onClick={() => router.push('/dashboard/new')}>
        <ListItemIcon>
          <AddRounded />
        </ListItemIcon>
        <ListItemText primary="Add Restaurant" secondary={'new restaurant'} />
      </MenuItem>
    </Select>
  )
}

export default OutletSelect

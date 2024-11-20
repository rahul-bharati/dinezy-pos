import {
  Box,
  Button,
  Card,
  Divider,
  Grid2,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material'
import { AddRounded } from '@mui/icons-material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import MenuTable from '@/components/menu-table'

const MenuPage = () => {
  const menuCategories = [
    'All',
    'Tandoor',
    'Appetizer',
    'Main Course',
    'Dessert',
    'Beverage',
  ]

  return (
    <Box>
      <Card>
        <Grid2 container spacing={0} columns={12}>
          <Grid2 size={3} sx={{ borderRight: '1px solid #535353' }} pr={2}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              gap={1}
            >
              <TextField
                variant={'outlined'}
                size={'small'}
                margin={'dense'}
                fullWidth={true}
                label={'Search'}
              />
              <Button
                variant={'contained'}
                size={'small'}
                endIcon={<AddRounded />}
              >
                Add
              </Button>
            </Box>
            <Divider sx={{ my: 1 }} />
            <List>
              {menuCategories.map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    disablePadding={true}
                    sx={{ display: 'block' }}
                  >
                    <ListItemButton>
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </List>
          </Grid2>
          <Grid2 size={9} px={2}>
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Typography>Menu Items</Typography>
              <Box display={'flex'} alignItems={'center'} gap={2} p={0}>
                <TextField
                  variant={'outlined'}
                  size={'small'}
                  margin={'dense'}
                  fullWidth={false}
                  label={'Search'}
                />
                <Button
                  variant={'contained'}
                  size={'small'}
                  endIcon={<AddRounded />}
                >
                  Add Item
                </Button>
              </Box>
            </Box>
            <Divider sx={{ my: 1 }} />
            <MenuTable />
          </Grid2>
        </Grid2>
      </Card>
    </Box>
  )
}

export default MenuPage

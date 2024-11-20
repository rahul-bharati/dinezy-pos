import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid2,
  TextField,
  Typography,
} from '@mui/material'

const AddNewRestaurant = () => {
  return (
    <Grid2
      container={true}
      spacing={2}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        mt: 10,
      }}
    >
      <Grid2 size={4}>
        <Box className={`glass-background`} sx={{ padding: '30px 20px' }}>
          <Typography
            component={'h1'}
            variant={'h4'}
            align={'left'}
            sx={{
              width: '100%',
              fontSize: 'clamp(2rem, 10vw, 2.15rem)',
            }}
          >
            Add New Restaurant
          </Typography>
          <Typography variant={'body1'} color={'textDisabled'}>
            This will be the name of restaurant. Outlet information on next page
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Box
            component={'form'}
            noValidate
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="name">Restaurant Name</FormLabel>
              <TextField
                id="name"
                type={'text'}
                variant={'outlined'}
                margin={'dense'}
                required
                size={'small'}
                fullWidth={true}
              />
            </FormControl>
            <Box gap={2} alignSelf={'end'}>
              <Button
                type={'cancel'}
                href={'/dashboard'}
                variant={'text'}
                size={'small'}
                sx={{ alignSelf: 'end', marginRight: 2 }}
              >
                Cancel
              </Button>
              <Button
                type={'submit'}
                variant={'contained'}
                size={'small'}
                sx={{ alignSelf: 'end' }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  )
}

export default AddNewRestaurant

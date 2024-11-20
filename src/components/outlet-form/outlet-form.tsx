import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material'

const OutletForm = ({ handleNext }: { handleNext: () => void }) => {
  return (
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
        Add New Outlet
      </Typography>
      <Typography variant={'body1'} color={'textDisabled'}>
        Provide all required details for the outlet.
      </Typography>
      <Divider sx={{ my: 3 }} />
      <Box
        component={'form'}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="name">
            Outlet location (This will be used to identify outlet)
          </FormLabel>
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
        <FormControl>
          <FormLabel htmlFor="address">Address 1</FormLabel>
          <TextField
            id="address"
            type={'text'}
            variant={'outlined'}
            margin={'dense'}
            required
            size={'small'}
            fullWidth={true}
          />
        </FormControl>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%',
          }}
        >
          <Box sx={{ display: 'flex', gap: 2, width: '100%', flexGrow: 1 }}>
            <FormControl fullWidth={true}>
              <FormLabel htmlFor="locality">Locality/Area</FormLabel>
              <TextField
                id="locality"
                type={'text'}
                variant={'outlined'}
                margin={'dense'}
                required
                size={'small'}
                fullWidth={true}
              />
            </FormControl>
            <FormControl fullWidth={true}>
              <FormLabel htmlFor="street">Street</FormLabel>
              <TextField
                id="street"
                type={'text'}
                variant={'outlined'}
                margin={'dense'}
                required
                size={'small'}
                fullWidth={true}
              />
            </FormControl>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%',
          }}
        >
          <Box sx={{ display: 'flex', gap: 2, width: '100%', flexGrow: 1 }}>
            <FormControl fullWidth={true}>
              <FormLabel htmlFor="city">City</FormLabel>
              <TextField
                id="city"
                type={'text'}
                variant={'outlined'}
                margin={'dense'}
                required
                size={'small'}
                fullWidth={true}
              />
            </FormControl>
            <FormControl fullWidth={true}>
              <FormLabel htmlFor="pincode">Pincode</FormLabel>
              <TextField
                id="pincode"
                type={'text'}
                variant={'outlined'}
                margin={'dense'}
                required
                size={'small'}
                fullWidth={true}
              />
            </FormControl>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
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
            onClick={handleNext}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default OutletForm

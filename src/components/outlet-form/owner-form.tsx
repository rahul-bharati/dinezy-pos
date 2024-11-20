import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material'

const OwnerForm = ({ handleNext }: { handleNext: () => void }) => {
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
        Owners Details
      </Typography>
      <Typography variant={'body1'} color={'textDisabled'}>
        Owner details for the outlet
      </Typography>
      <Divider sx={{ my: 3 }} />
      <Box
        component={'form'}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="name">
            Owner Name <Typography variant={'caption'}>(Individual or Company)</Typography>
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
          <FormLabel htmlFor="pan">Pan number</FormLabel>
          <TextField
            id="pan"
            type={'text'}
            variant={'outlined'}
            margin={'dense'}
            required
            size={'small'}
            fullWidth={true}
          />
        </FormControl>
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

export default OwnerForm

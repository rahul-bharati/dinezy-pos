import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material'

const OutletDocumentForm = ({ handleNext }: { handleNext: () => void }) => {
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
        Document
      </Typography>
      <Typography variant={'body1'} color={'textDisabled'}>
        Please provide the following details to proceed
      </Typography>
      <Divider sx={{ my: 3 }} />
      <Box
        component={'form'}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="fssai">FSSAI</FormLabel>
          <TextField
            id="fssai"
            type={'text'}
            variant={'outlined'}
            margin={'dense'}
            required
            size={'small'}
            fullWidth={true}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="gst">
            GST number{' '}
            <Typography variant={'caption'}>(if applicable)</Typography>
          </FormLabel>
          <TextField
            id="gst"
            type={'text'}
            variant={'outlined'}
            margin={'dense'}
            required
            size={'small'}
            fullWidth={true}
          />
        </FormControl>
        <Divider sx={{ my: 2 }} />
        <FormControl>
          <FormLabel htmlFor="pan">
            Upload Pan{' '}
            <Typography variant={'caption'}>(jpg, png, pdf)</Typography>
          </FormLabel>
          <TextField
            id="pan"
            type={'file'}
            variant={'outlined'}
            margin={'dense'}
            required
            size={'small'}
            fullWidth={true}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="fssai-doc">
            FSSAI License <Typography variant={'caption'}>(pdf)</Typography>
          </FormLabel>
          <TextField
            id="fssai-doc"
            type={'file'}
            variant={'outlined'}
            margin={'dense'}
            required
            size={'small'}
            fullWidth={true}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="premise-proof">
            Proof of premises <Typography variant={'caption'}>(pdf)</Typography>
          </FormLabel>
          <TextField
            id="premise-proof"
            type={'file'}
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

export default OutletDocumentForm

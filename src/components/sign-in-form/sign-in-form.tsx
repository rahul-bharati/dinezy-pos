import {
  Box,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material'

const SignInForm = () => {
  return (
    <Box className={`glass-background`} sx={{ padding: '30px 20px' }}>
      <Typography
        component={'h1'}
        variant={'h4'}
        align={'center'}
        sx={{ marginBottom: '20px' }}
      >
        Sign In
      </Typography>
      <Box
        component={'form'}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          id="email"
          type={'email'}
          variant={'outlined'}
          margin={'dense'}
          label={'Email'}
          required
          color={'primary'}
        />
      </Box>
    </Box>
  )
}

export default SignInForm

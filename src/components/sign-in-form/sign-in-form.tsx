import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material'
import Link from 'next/link'

const SignInForm = () => {
  return (
    <Box className={`glass-background`} sx={{ padding: '30px 20px' }}>
      <Typography
        component={'h1'}
        variant={'h4'}
        align={'center'}
        sx={{
          marginBottom: '20px',
          width: '100%',
          fontSize: 'clamp(2rem, 10vw, 2.15rem)',
        }}
      >
        Sign In
      </Typography>
      <Box
        component={'form'}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            id="email"
            type={'email'}
            variant={'outlined'}
            margin={'dense'}
            required
            size={'small'}
            fullWidth={true}
            placeholder="your@email.com"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            id="password"
            type={'password'}
            variant={'outlined'}
            margin={'dense'}
            required
            size={'small'}
            color={'primary'}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ textTransform: 'capitalize' }}
        >
          Sign in
        </Button>
        <Typography component={'p'} align={'center'}>
          Don&apos;t have an account?&nbsp;
          <Link href={'/sign-up'}>Sign up</Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default SignInForm

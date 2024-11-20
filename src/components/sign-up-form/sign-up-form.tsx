import {
  Box,
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material'
import Link from 'next/link'

const SignUpForm = () => {
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
        Sign Up
      </Typography>
      <Box
        component={'form'}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
      >
        <Box sx={{ display: 'flex', gap: 2, width: '100%', flexGrow: 1 }}>
          <FormControl fullWidth={true}>
            <FormLabel htmlFor="name">Name</FormLabel>
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
          <FormControl fullWidth={true}>
            <FormLabel htmlFor="name">Name</FormLabel>
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
        </Box>
        <FormControl>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <TextField
            id="phone"
            type={'text'}
            variant={'outlined'}
            margin={'dense'}
            required
            size={'small'}
            fullWidth={true}
          />
        </FormControl>
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
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="confirm-password">Confirm Password</FormLabel>
          <TextField
            id="confirm-password"
            type={'password'}
            variant={'outlined'}
            margin={'dense'}
            required
            size={'small'}
          />
        </FormControl>
        <Box
          component={'form'}
          noValidate
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
        <Button
          // type="submit"
          fullWidth
          variant="contained"
          sx={{ textTransform: 'capitalize' }}
          href={'/restaurants'}
        >
          Sign up
        </Button>
        <Typography component={'p'} align={'center'}>
          Already have an account?&nbsp;
          <Link href={'/sign-in'}>Sign in</Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default SignUpForm

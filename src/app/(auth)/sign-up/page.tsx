import { Box, Container, Grid2 as Grid } from '@mui/material'
import AuthSideFeatures from '@/components/auth-side-features'
import SignUpForm from '@/components/sign-up-form'

const SignUpPage = () => {
  return (
    <Box my={15} className={'center-main-container'}>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid size={6}>
            <AuthSideFeatures />
          </Grid>
          <Grid size={6}>
            <SignUpForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default SignUpPage

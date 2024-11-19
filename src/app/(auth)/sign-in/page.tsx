import { Container, Grid2 as Grid } from '@mui/material'
import AuthSideFeatures from '@/components/auth-side-features'
import SignInForm from '@/components/sign-in-form'

const SignInPage = () => {
  return (
    <div className={'center-main-container'}>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid size={6}>
            <AuthSideFeatures />
          </Grid>
          <Grid size={6}>
            <SignInForm />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default SignInPage

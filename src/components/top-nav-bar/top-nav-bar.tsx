'use client'

import { styled } from '@mui/material/styles'
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material'

import styles from './top-nav-bar.module.scss'
import { usePathname } from 'next/navigation'

export default function TopNavBar() {
  const StylesToolBar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: theme.palette.divider,
    boxShadow: theme.shadows[1],
    padding: '8px 12px',
  }))

  const pathName = usePathname()
  if (pathName.includes('dashboard')) {
    return null
  }

  return (
    <AppBar
      position={'fixed'}
      enableColorOnDark={true}
      sx={{
        boxShadow: 0,
        backgroundImage: 'none',
        backgroundColor: 'transparent',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth={'lg'}>
        <StylesToolBar
          variant={'dense'}
          disableGutters
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              px: 0,
              justifyContent: 'space-between',
            }}
          >
            <Typography className={styles.brand}>Dinezy</Typography>
            <Box sx={{ display: { sx: 'none', md: 'flex' }, gap: 1 }}>
              <Button
                variant={'text'}
                size={'small'}
                sx={{ textTransform: 'capitalize' }}
              >
                Home
              </Button>
              <Button
                variant={'text'}
                size={'small'}
                sx={{ textTransform: 'capitalize' }}
              >
                Features
              </Button>
              <Button
                variant={'text'}
                size={'small'}
                sx={{ textTransform: 'capitalize' }}
              >
                Pricing
              </Button>
              <Button
                variant={'text'}
                size={'small'}
                sx={{ textTransform: 'capitalize', minWidth: 0 }}
              >
                Blog
              </Button>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 1,
                alignItems: 'center',
              }}
            >
              <Button
                href={'/sign-in'}
                color={'primary'}
                variant={'text'}
                size={'small'}
                sx={{ textTransform: 'capitalize' }}
              >
                Sign in
              </Button>
              <Button
                color={'primary'}
                variant={'contained'}
                size={'small'}
                sx={{ textTransform: 'capitalize' }}
              >
                Sign up
              </Button>
            </Box>
          </Box>
        </StylesToolBar>
      </Container>
    </AppBar>
  )
}

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

export default function TopNavBar() {
  const StylesToolBar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    padding: '8px 12px',
  }))

  return (
    <AppBar
      position={'fixed'}
      sx={{
        boxShadow: 0,
        backgroundImage: 'none',
        bgcolor: 'transparent',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth={'lg'}>
        <StylesToolBar
          variant={'dense'}
          disableGutters
          className={styles.topNavBar}
        >
          <Box
            sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}
          >
            <Typography variant={'h6'} className={styles.brand}>
              Dinezy
            </Typography>
            <Box sx={{ display: { sx: 'none', md: 'flex' } }}>
              <Button variant={'text'} size={'small'}>
                Home
              </Button>
              <Button variant={'text'} size={'small'}>
                Features
              </Button>
              <Button variant={'text'} size={'small'}>
                Pricing
              </Button>
              <Button variant={'text'} size={'small'}>
                Blog
              </Button>
            </Box>
          </Box>
        </StylesToolBar>
      </Container>
    </AppBar>
  )
}

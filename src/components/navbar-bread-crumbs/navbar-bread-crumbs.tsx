import * as React from 'react'
import Typography from '@mui/material/Typography'
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded'
import { StyledBreadcrumbs } from '@/themes'
import Link from 'next/link'

export default function NavbarBreadcrumbs() {
  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      <Typography variant="body1">
        <Link
          href={'/dashboard'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Dashboard
        </Link>
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'text.primary', fontWeight: 600 }}
      >
        Home
      </Typography>
    </StyledBreadcrumbs>
  )
}

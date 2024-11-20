'use client';

import Stack from '@mui/material/Stack'
import NavbarBreadcrumbs from '@/components/navbar-bread-crumbs'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const isNew = pathname.includes('new')

  return (
    <Stack
      direction={'row'}
      spacing={2}
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        maxWidth: '100%',
        py: 1.5,
        borderBottom: isNew ? '1px solid gray' : '',
      }}
    >
      <NavbarBreadcrumbs />
    </Stack>
  )
}

export default Header

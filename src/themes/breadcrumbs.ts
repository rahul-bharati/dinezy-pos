'use client'

import { styled } from '@mui/material/styles'
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs'

export const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: theme.palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}))

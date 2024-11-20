'use client'
import { createTheme } from '@mui/material/styles'

import { colorSchemes, typography, shadows, shape } from './primitives'
import { navigationCustomizations } from '@/themes/customizations/navigation'
import { dataDisplayCustomizations } from '@/themes/customizations/dataDisplay'
import { inputsCustomizations } from '@/themes/customizations/input'
import { surfacesCustomizations } from '@/themes/customizations/surfaces'
import { feedbackCustomizations } from '@/themes/customizations/feedback'

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-mui-color-scheme',
    cssVarPrefix: 'template',
  },
  colorSchemes,
  typography,
  shadows,
  shape,
  components: {
    ...navigationCustomizations,
    ...dataDisplayCustomizations,
    ...inputsCustomizations,
    ...surfacesCustomizations,
    ...feedbackCustomizations
  },
})

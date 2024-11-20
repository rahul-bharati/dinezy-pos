'use client'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFFAFF',
    },
    secondary: {
      main: '#0A2463',
    },
    error: {
      main:'#D8315B'
    }
  }
})

export default theme

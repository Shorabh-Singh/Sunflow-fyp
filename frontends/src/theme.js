import { createTheme } from '@mui/material/styles'

export const solarTheme = createTheme({
  palette: {
    primary: {
      main: '#2E7D32',
    },
    secondary: {
      main: '#FF8F00',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '20px',
          borderRadius: '12px',
        },
      },
    },
  },
})

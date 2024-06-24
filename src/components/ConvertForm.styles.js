import { createTheme } from '@mui/material/styles';
import { styled, ThemeProvider } from '@mui/system';
import { Paper, TextField, Button, Typography } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5f6d',
    },
    secondary: {
      main: '#ffc371',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export const GlobalStyles = styled('div')(({ theme }) => ({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  },
  body: {
    margin: 0,
    padding: 0,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #ff5f6d, #ffc371)',
  },
}));

export const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
}));

export const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 600,
  width: '100%',
  textAlign: 'center',
}));

export const CustomTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const CustomHeader = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

import { styled } from '@mui/system';
import { Paper, Button, Typography } from '@mui/material';

export const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #ff5f6d, #ffc371)',
  padding: theme.spacing(3),
  color: '#fff',
}));

export const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 600,
  width: '100%',
  textAlign: 'center',
  background: '#fff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  color: '#333',
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5),
  fontSize: '1.1rem',
  background: '#ff5f6d',
  color: '#fff',
  '&:hover': {
    background: '#ff3f4d',
  },
}));

export const CustomHeader = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontSize: '2rem',
  fontWeight: 700,
}));

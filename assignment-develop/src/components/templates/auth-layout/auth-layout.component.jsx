import { Container, Box, CssBaseline, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import './auth-layout.component.scss';

const AuthLayout = () => {
  return (
    <Box className="auth-background">
      <Container component="main" maxWidth="xs" className="auth-container">
        <CssBaseline />
        <Box className="auth-box">
          <Typography component="h1" variant="h5" className="auth-title">
            ÁGORA
          </Typography>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
};

export default AuthLayout;

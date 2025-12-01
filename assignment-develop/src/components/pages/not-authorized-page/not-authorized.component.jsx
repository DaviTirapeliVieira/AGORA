import { useNavigate } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';
import './not-authorized.component.scss';

const NotAuthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <Box className="not-authorized-page">
      <Typography variant="h1" gutterBottom>
        403
      </Typography>
      <Typography variant="h5" gutterBottom>
        Acesso Negado
      </Typography>

      <Button
        className="not-authorized-button"
        variant="contained"
        color="primary"
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>
    </Box>
  );
};

export default NotAuthorizedPage;

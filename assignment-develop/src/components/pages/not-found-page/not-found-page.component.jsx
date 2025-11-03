import PropTypes from 'prop-types';
import { Typography, Box, Button } from '@mui/material';

import './not-found-page.component.scss';

const propTypes = {
  goBack: PropTypes.func.isRequired,
};

const NotFoundPage = ({ goBack }) => {
  return (
    <Box className="not-found-page">
      <Typography variant="h1" component="div" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="div" gutterBottom>
        Page Not Found
      </Typography>
      <Button
        className="not-found-button"
        variant="contained"
        color="primary"
        onClick={goBack}
      >
        Go Back
      </Button>
    </Box>
  );
};

NotFoundPage.propTypes = propTypes;

export default NotFoundPage;

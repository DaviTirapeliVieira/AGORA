import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

import './footer.component.scss';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const Footer = ({ text }) => {
  return (
    <Box component="footer" className="footer">
      <Typography variant="body1">{text}</Typography>
    </Box>
  );
};

Footer.propTypes = propTypes;

export default Footer;

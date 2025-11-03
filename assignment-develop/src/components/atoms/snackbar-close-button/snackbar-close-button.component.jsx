import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSnackbar } from 'notistack';
import './snackbar-close-button.component.scss';

const propTypes = {
  snackbarKey: PropTypes.number.isRequired,
};

const SnackbarCloseButton = ({ snackbarKey }) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton
      color="inherit"
      onClick={() => closeSnackbar(snackbarKey)}
      className="snackbar-close-button"
    >
      <CloseIcon />
    </IconButton>
  );
};

SnackbarCloseButton.propTypes = propTypes;

export default SnackbarCloseButton;

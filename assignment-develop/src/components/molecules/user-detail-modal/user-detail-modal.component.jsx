import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Box,
  Typography,
  CircularProgress,
  Alert,
  Divider,
  IconButton,
  Button,
  Fade,
  Backdrop,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './user-detail-modal.component.scss';

const propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  fetchUserDetails: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

const UserDetailModal = ({
  user,
  open,
  handleClose,
  loading,
  error,
  fetchUserDetails,
  userId,
}) => {
  useEffect(() => {
    if (open) {
      fetchUserDetails(userId);
    }
  }, [open, userId, fetchUserDetails]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open} timeout={500}>
        <Box className="user-detail-box">
          <Box className="user-detail-header">
            <Typography id="user-detail-title" variant="h6">
              User Detail
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          {loading && <CircularProgress />}
          {error && <Alert severity="error">{error}</Alert>}
          {!loading && !error && user && (
            <Box className="user-detail-content">
              <Typography variant="body1">
                <strong>ID:</strong> {user.id}
              </Typography>
              <Typography variant="body1">
                <strong>Name:</strong> {user.name}
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong> {user.email}
              </Typography>
            </Box>
          )}
          <Divider />
          <Box className="user-detail-footer">
            <Button onClick={handleClose} color="error" variant="contained">
              Close
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

UserDetailModal.propTypes = propTypes;

export default UserDetailModal;

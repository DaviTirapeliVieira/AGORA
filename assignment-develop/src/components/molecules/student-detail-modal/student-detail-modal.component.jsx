import PropTypes from 'prop-types';
import {
  Modal,
  Box,
  Typography,
  CircularProgress,
  Alert,
  Divider,
  IconButton,
  Fade,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './student-detail-modal.component.scss';

const propTypes = {
  entity: PropTypes.object,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string,
    }),
  ).isRequired,
};

const StudentDetailModal = ({
  entity,
  open,
  handleClose,
  loading,
  error,
  title,
  fields,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={null}
      disableEnforceFocus
      disableAutoFocus
      disableRestoreFocus
      disableScrollLock
    >
      <Fade in={open} timeout={400}>
        <Box className="entity-detail-box">
          <Box className="entity-detail-header">
            <Typography variant="h6">{title}</Typography>
            <IconButton onClick={handleClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          {loading && (
            <Box className="entity-detail-loading">
              <CircularProgress />
            </Box>
          )}

          {error && <Alert severity="error">{error}</Alert>}

          {!loading && !error && entity && (
            <Box className="entity-detail-content">
              {entity.foto && (
                <Box className="entity-image-box">
                  <img
                    src={entity.foto || '/icon-user.png'}
                    alt={entity.name || 'Foto do aluno'}
                    className="entity-image"
                  />
                </Box>
              )}
              <Box className="entity-fields-box" />
              {fields
                .filter(f => f.key !== 'foto' && f.key !== 'id')
                .map(({ key, label }) => (
                  <Typography key={key} variant="body1">
                    <strong>{label}:</strong> {entity[key] ?? '--'}
                  </Typography>
                ))}
              <Box />
            </Box>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

StudentDetailModal.propTypes = propTypes;

export default StudentDetailModal;

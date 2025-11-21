import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Button, TextField, Box, Typography } from '@mui/material';
import './reset-password-form.component.scss';

const propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  sendResetLink: PropTypes.func.isRequired,
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Email é obrigatório'),
});

const PasswordRecoveryForm = ({ error = null, loading, sendResetLink }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    sendResetLink(data.email);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className="password-recovery-form"
    >
      <Typography variant="h4" gutterBottom className="password-recovery-form-title">
        Recuperar Senha
      </Typography>
      <TextField
        label="Email"
        type="email"
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
        margin="normal"
        className="password-recovery-form-input"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        className="password-recovery-form-button"
      >
        {loading ? 'Enviando...' : 'Enviar Link de Redefinição'}
      </Button>
      {error && (
        <Typography className="password-recovery-form-error" color="error">
          {error}
        </Typography>
      )}
    </Box>
  );
};

PasswordRecoveryForm.propTypes = propTypes;

export default PasswordRecoveryForm;

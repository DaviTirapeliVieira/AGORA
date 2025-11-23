import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  Button,
  TextField,
  Box,
  Typography,
  CircularProgress,
} from '@mui/material';
import LinkButton from '@/components/atoms/link-button/link-button.component';
import { useDispatch, useSelector } from 'react-redux';
import { sendResetLinkRequest } from '@/logic/password_recovery/ducks/password_recovery.slice';
import './reset-password-form.component.scss';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
});

const PasswordRecoveryForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.passwordRecovery);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    dispatch(sendResetLinkRequest(data.email));
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className="password-recovery-form"
    >
      <Typography
        variant="h5"
        gutterBottom
        className="password-recovery-form-title"
      >
        Recuperar Senha
      </Typography>

      <TextField
        label="Email"
        type="email"
        id="email"
        autoComplete="email"
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
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          'Enviar Link de Redefinição'
        )}
      </Button>

      <LinkButton
        to="/login"
        label="Voltar ao Login"
        className="password-recovery-form-login-link"
      />
    </Box>
  );
};

export default PasswordRecoveryForm;

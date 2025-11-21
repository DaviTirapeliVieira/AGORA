import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Button, TextField, Box, Typography } from '@mui/material';
import LinkButton from '@/components/atoms/link-button/link-button.component';
import './login-form.component.scss';

const propTypes = {
  token: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = ({ token = null, error = null, loading, login }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    login(data.email, data.password);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className="login-form"
    >
      <Typography variant="h4" gutterBottom className="login-form-title">
        Login
      </Typography>
      <TextField
        label="Email"
        type="email"
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
        margin="normal"
        className="login-form-input"
      />
      <TextField
        label="Password"
        type="password"
        {...register('password')}
        error={!!errors.password}
        helperText={errors.password?.message}
        fullWidth
        margin="normal"
        className="login-form-input"
      />
      <LinkButton
        to="/reset-password"
        label="Forgot Password?"
        className="login-form-forgot-password"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        className="login-form-button"
      >
        {loading ? 'Logging in...' : 'Login'}
      </Button>
      {error && (
        <Typography className="login-form-error" color="error">
          {error}
        </Typography>
      )}
      {token && (
        <Typography className="login-form-error" color="primary">
          Login successful!
        </Typography>
      )}
    </Box>
  );
};

LoginForm.propTypes = propTypes;

export default LoginForm;

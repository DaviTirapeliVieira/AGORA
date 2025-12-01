import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  CircularProgress,
} from '@mui/material';
import './user-form.component.scss';

const UserForm = ({ currentUserRole, loading, error, createUser }) => {
  const allRoles = [
    { label: 'Administrador', value: 'admin' },
    { label: 'Secretaria', value: 'secretary' },
    { label: 'Professor', value: 'teacher' },
    { label: 'Aluno', value: 'student' },
  ];

  const availableRoles =
    currentUserRole === 'admin'
      ? allRoles
      : currentUserRole === 'secretary'
      ? allRoles.filter(r => r.value === 'teacher' || r.value === 'student')
      : [];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
    role: Yup.string().required('Perfil é obrigatório'),
    photo: Yup.mixed()
      .test('fileSize', 'A foto deve ter no máximo 2MB', value => {
        return !value || (value && value.size <= 2097152);
      })
      .test('fileType', 'Formato inválido (jpg/png)', value => {
        return (
          !value ||
          (value &&
            ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type))
        );
      }),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: availableRoles[0]?.value || 'student',
      photo: null,
    },
  });

  const onSubmit = data => {
    const payload = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value) payload.append(key, value);
    });

    createUser(payload);
    reset({
      name: '',
      email: '',
      password: '',
      role: availableRoles[0]?.value || 'student',
      photo: null,
    });
  };

  if (!currentUserRole) return null;

  if (!['admin', 'secretary'].includes(currentUserRole)) {
    return (
      <Typography color="error">
        Você não tem permissão para criar usuários.
      </Typography>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className="user-form"
    >
      <Typography variant="h4" gutterBottom className="user-form-title">
        Criar Usuário
      </Typography>

      <Box className="user-form-grid">
        <Box className="left-column">
          <TextField
            label="Nome"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Email"
            type="email"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
            margin="normal"
          />
        </Box>

        <Box className="right-column">
          <TextField
            label="Senha"
            type="password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
            margin="normal"
          />

          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <TextField
                select
                label="Perfil"
                {...field}
                error={!!errors.role}
                helperText={errors.role?.message}
                fullWidth
                margin="normal"
              >
                {availableRoles.map(r => (
                  <MenuItem key={r.value} value={r.value}>
                    {r.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

          <Controller
            name="photo"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                margin="normal"
                label="Foto de Perfil"
                value={field.value ? field.value.name : ''}
                placeholder="Foto de Perfil"
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      id="photo-input"
                      onChange={e => field.onChange(e.target.files[0])}
                    />
                  ),
                }}
                onClick={() => document.getElementById('photo-input').click()}
                error={!!errors.photo}
                helperText={errors.photo?.message}
                InputLabelProps={{ shrink: true }}
              />
            )}
          />
        </Box>
      </Box>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        className="user-form-button"
        startIcon={loading && <CircularProgress size={20} />}
      >
        {loading ? 'Criando...' : 'Criar'}
      </Button>

      {error && (
        <Typography color="error" className="user-form-error">
          {error}
        </Typography>
      )}
    </Box>
  );
};

UserForm.propTypes = {
  currentUserRole: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string,
  createUser: PropTypes.func.isRequired,
};

export default UserForm;

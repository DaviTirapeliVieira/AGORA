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
import './discipline-form.component.scss';

const DisciplineForm = ({
  currentUserRole,
  loading,
  error,
  teachers,
  createDiscipline,
}) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Nome da disciplina é obrigatório'),
    workload: Yup.number()
      .typeError('Informe um número válido')
      .required('Carga horária é obrigatória')
      .min(1, 'Carga horária mínima é 1 hora'),
    description: Yup.string()
      .required('Descrição é obrigatória')
      .max(300, 'Máximo de 300 caracteres'),
    teacherId: Yup.string().required('Selecione um professor responsável'),
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
      workload: '',
      description: '',
      teacherId: '',
    },
  });

  const onSubmit = data => {
    createDiscipline(data);
    reset();
  };

  if (!['admin', 'secretary'].includes(currentUserRole)) {
    return (
      <Typography color="error">
        Você não tem permissão para criar disciplinas.
      </Typography>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className="discipline-form"
    >
      <Typography variant="h4" gutterBottom className="discipline-form-title">
        Criar Disciplina
      </Typography>

      <Box className="discipline-form-grid">
        <TextField
          label="Nome da Disciplina"
          {...register('name')}
          fullWidth
          margin="normal"
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <TextField
          label="Carga Horária (horas)"
          type="number"
          {...register('workload')}
          fullWidth
          margin="normal"
          error={!!errors.workload}
          helperText={errors.workload?.message}
        />

        <Controller
          name="teacherId"
          control={control}
          render={({ field }) => (
            <TextField
              select
              label="Professor Responsável"
              {...field}
              fullWidth
              margin="normal"
              error={!!errors.teacherId}
              helperText={errors.teacherId?.message}
            >
              {teachers.map(t => (
                <MenuItem key={t.id} value={t.id}>
                  {t.name}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <TextField
          label="Descrição"
          {...register('description')}
          multiline
          rows={4}
          fullWidth
          margin="normal"
          error={!!errors.description}
          helperText={errors.description?.message}
        />
      </Box>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        className="discipline-form-button"
        startIcon={loading && <CircularProgress size={20} />}
      >
        {loading ? 'Criando...' : 'Criar Disciplina'}
      </Button>

      {error && (
        <Typography color="error" className="discipline-form-error">
          {error}
        </Typography>
      )}
    </Box>
  );
};

DisciplineForm.propTypes = {
  currentUserRole: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string,
  teachers: PropTypes.array.isRequired,
  createDiscipline: PropTypes.func.isRequired,
};

export default DisciplineForm;

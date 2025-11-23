import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  CircularProgress,
  Alert,
  Button,
} from "@mui/material";
import MainLayout from "@/components/templates/main-layout/main-layout.component";
import { GradesTemplate } from "@/components/templates/grades-layout/grades-layout.component";
import {
  fetchGradesRequest,
  saveGradesRequest,
} from "@/logic/grades/ducks/grades.slice";
import {
  selectAlunos,
  selectNotas,
  selectLoading,
  selectError,
} from "@/logic/grades/ducks/grades.selector";

const GradesPage = () => {
  const dispatch = useDispatch();

  const alunos = useSelector(selectAlunos);
  const notas = useSelector(selectNotas);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [editedNotas, setEditedNotas] = useState({});

  useEffect(() => {
    dispatch(fetchGradesRequest());
  }, [dispatch]);

  const handleNotaChange = (idAluno, novaNota) => {
    setEditedNotas((prev) => ({
      ...prev,
      [idAluno]: novaNota,
    }));
  };

  const handleSave = () => {
    const notasParaSalvar = { ...notas, ...editedNotas };
    dispatch(saveGradesRequest(notasParaSalvar));
  };

  return (
    <MainLayout>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && alunos.length > 0 && (
        <GradesTemplate
          alunos={alunos}
          notas={notas}
          editedNotas={editedNotas}
          onNotaChange={handleNotaChange}
        />
      )}

      {!loading && !error && alunos.length === 0 && (
        <Alert severity="info">Nenhum aluno encontrado.</Alert>
      )}

      {!loading && (
        <Box className="grades-actions" mt={2}>
          <Button variant="contained" color="primary" onClick={handleSave} disabled={Object.keys(editedNotas).length === 0}>
            Salvar Notas
          </Button>
        </Box>
      )}
    </MainLayout>
  );
};

export default GradesPage;

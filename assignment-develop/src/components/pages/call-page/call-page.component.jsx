import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  CircularProgress,
  Alert,
  Button,
} from "@mui/material";
import MainLayout from "@/components/templates/main-layout/main-layout.component";
import { ChamadaTemplate } from "@/components/templates/call-layout/call-layout.component";
import {
  fetchChamadaRequest,
  togglePresenca,
  moveSelectedDown,
  moveSelectedUp,
  saveChamadaRequest,
} from "@/logic/call/ducks/call.slice";
import {
  selectAlunos,
  selectPresenca,
  selectSelectedIndex,
  selectLoading,
  selectError,
} from "@/logic/call/ducks/call.selectors";
import "./call-page.component.scss";

const CallPage = () => {
  const dispatch = useDispatch();

  const alunos = useSelector(selectAlunos);
  const presenca = useSelector(selectPresenca);
  const selectedIndex = useSelector(selectSelectedIndex);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchChamadaRequest());
  }, [dispatch]);

  const moveWithKey = (e) => {
    if (e.key === "ArrowDown") dispatch(moveSelectedDown());
    if (e.key === "ArrowUp") dispatch(moveSelectedUp());
    if (e.key === "Enter" && alunos[selectedIndex])
      dispatch(togglePresenca(alunos[selectedIndex].nome));
  };

  const handleSave = () => {
    dispatch(saveChamadaRequest(presenca));
  };

  return (
    <MainLayout>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && alunos.length > 0 && (
        <ChamadaTemplate
          alunos={alunos}
          presenca={presenca}
          selectedIndex={selectedIndex}
          onToggle={(nome) => dispatch(togglePresenca(nome))}
          onInfo={(a) => alert(`Aluno: ${a.nome}`)}
          onKey={moveWithKey}
          onSave={handleSave}
        />
      )}

      {!loading && !error && alunos.length === 0 && (
        <Alert severity="info">Nenhum aluno encontrado.</Alert>
      )}

      {!loading && (
        <div className="btn-primary">
          <Box className="chamada-actions" mt={2}>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Salvar Presença
            </Button>
          </Box>
        </div>
      )}
    </MainLayout>
  );
};

export default CallPage;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchCallRequest,
  togglePresenca,
  moveSelectedDown,
  moveSelectedUp,
  saveCallRequest,
} from '@/logic/call/ducks/call.slice';
import {
  selectAlunos,
  selectPresenca,
  selectSelectedIndex,
  selectLoading,
  selectError,
} from '@/logic/call/ducks/call.selectors';
import MainLayout from '@/components/templates/main-layout/main-layout.component';
import ChamadaTemplate from '@/components/templates/call-layout/call-layout.component';
import StudentDetailModal from '@/components/molecules/student-detail-modal/student-detail-modal.component';
import { CircularProgress, Alert, Button } from '@mui/material';

const CallPage = () => {
  const dispatch = useDispatch();
  const { classId } = useParams();
  const alunos = useSelector(selectAlunos);
  const presenca = useSelector(selectPresenca);
  const selectedIndex = useSelector(selectSelectedIndex);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [openModal, setOpenModal] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  useEffect(() => {
    dispatch(fetchCallRequest(classId));
  }, [dispatch, classId]);

  useEffect(() => {
    if (alunos[selectedIndex]) handleViewDetails(alunos[selectedIndex]);
  }, [selectedIndex, alunos]);

  useEffect(() => {
    const handleKeyDown = e => {
      switch (e.key) {
        case 'ArrowDown':
          dispatch(moveSelectedDown());
          break;
        case 'ArrowUp':
          dispatch(moveSelectedUp());
          break;
        case 'Enter':
          e.preventDefault();
          if (alunos[selectedIndex]) {
            dispatch(
              togglePresenca({
                alunoId: alunos[selectedIndex].id,
                aulaIndex: 0,
              }),
            );
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dispatch, alunos, selectedIndex]);

  const handleViewDetails = aluno => {
    if (!aluno.id) return;
    setSelectedStudentId(aluno.id);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);
  const handleSave = () => dispatch(saveCallRequest(presenca));

  return (
    <MainLayout>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && alunos.length > 0 && (
        <ChamadaTemplate
          alunos={alunos}
          presenca={presenca}
          selectedIndex={selectedIndex}
          onToggle={name => dispatch(togglePresenca({ name, aulaIndex: 0 }))}
          onSave={handleSave}
          handleViewDetails={handleViewDetails}
        />
      )}

      {!loading && !error && alunos.length === 0 && (
        <Alert severity="info">Nenhum aluno encontrado.</Alert>
      )}

      <div className="call-actions" style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          disabled={Object.keys(presenca).length === 0}
        >
          Salvar Presença
        </Button>
      </div>

      {openModal && selectedStudentId && (
        <StudentDetailModal
          open={openModal}
          handleClose={handleCloseModal}
          disableEnforceFocus={true}
          entity={alunos.find(a => a.id === selectedStudentId)}
          entityId={selectedStudentId}
          loading={false}
          error={null}
          fetchEntityDetails={() => {}}
          title="Detalhes do Aluno"
          fields={[
            { key: 'foto', type: 'image', label: '' },
            { key: 'nome', label: 'Nome' },
            { key: 'idade', label: 'Idade' },
            { key: 'email', label: 'Email' },
            { key: 'matricula', label: 'Matrícula' },
            { key: 'observacoes', label: 'Observações' },
          ]}
        />
      )}
    </MainLayout>
  );
};

export default CallPage;

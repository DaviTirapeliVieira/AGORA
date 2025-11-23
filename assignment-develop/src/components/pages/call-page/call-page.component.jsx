import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Alert, Button } from '@mui/material';
import MainLayout from '@/components/templates/main-layout/main-layout.component';
import { ChamadaTemplate } from '@/components/templates/call-layout/call-layout.component';
import {
  fetchCallRequest,
  togglePresenca,
  moveSelectedDown,
  moveSelectedUp,
  saveCallRequest,
} from "@/logic/call/ducks/call.slice";
import {
  selectAlunos,
  selectPresenca,
  selectSelectedIndex,
  selectLoading,
  selectError,
} from '@/logic/call/ducks/call.selectors';
import UserDetailModal from '@/components/molecules/user-detail-modal/user-detail-modal.component';
import './call-page.component.scss';

const CallPage = () => {
  const dispatch = useDispatch();
  const alunos = useSelector(selectAlunos);
  const presenca = useSelector(selectPresenca);
  const selectedIndex = useSelector(selectSelectedIndex);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [openModal, setOpenModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    dispatch(fetchCallRequest());
  }, [dispatch]);

  const handleViewDetails = aluno => {
    if (!aluno.id) {
      console.warn('⚠ Aluno sem ID. Adicione um ID no objeto aluno.');
      return;
    }
    setSelectedUserId(aluno.id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const moveWithKey = e => {
    if (e.key === 'ArrowDown') dispatch(moveSelectedDown());
    if (e.key === 'ArrowUp') dispatch(moveSelectedUp());
    if (e.key === 'Enter' && alunos[selectedIndex])
      dispatch(togglePresenca(alunos[selectedIndex].nome));
  };

  const handleSave = () => {
    dispatch(saveCallRequest(presenca));
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
          onToggle={name => dispatch(togglePresenca(name))}
          onKey={moveWithKey}
          onSave={handleSave}
          handleViewDetails={handleViewDetails}
        />
      )}

      {!loading && !error && alunos.length === 0 && (
        <Alert severity="info">Nenhum aluno encontrado.</Alert>
      )}

      {!loading && (
        <div className="call-actions">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            disabled={Object.keys(presenca).length === 0}
          >
            Salvar Presença
          </Button>
        </div>
      )}

      {openModal && selectedUserId && (
        <UserDetailModal
          open={openModal}
          handleClose={handleCloseModal}
          userId={selectedUserId}
          fetchUserDetails={id => console.log('Buscar detalhes do aluno', id)}
          loading={false}
          error={null}
          user={alunos.find(aluno => aluno.id === selectedUserId)}
        />
      )}
    </MainLayout>
  );
};

export default CallPage;

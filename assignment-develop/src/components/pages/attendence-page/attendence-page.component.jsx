import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '@/components/templates/main-layout/main-layout.component';
import Select from '@/components/atoms/select/select.component';
import {
  fetchAnosRequest,
  fetchFrequenciaRequest,
} from '@/logic/attendence/ducks/attendence.slice';
import {
  selectItems,
  selectAnos,
  selectAno,
  selectLoading,
  selectError,
} from '@/logic/attendence/ducks/attendence.selectors';
import { Alert } from '@mui/material';
import './attendence-page.component.scss';

const AttendancePage = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectItems);
  const anos = useSelector(selectAnos);
  const ano = useSelector(selectAno);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAnosRequest());
  }, []);

  const handleChangeAno = e => {
    const selectedAno = e.target.value;
    dispatch(fetchFrequenciaRequest(selectedAno));
  };

  return (
    <MainLayout>
      <div className="card">
        <div className="top-controls">
          <Select
            label="Ano"
            name="ano"
            value={ano ?? ''}
            onChange={handleChangeAno}
            options={anos?.map(a => ({ label: a, value: a }))}
          />
        </div>
      </div>

      <div className="card table-wrap">
        {loading ? (
          <Alert severity="info">Carregando frequência...</Alert>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <table className="attendance">
            <thead>
              <tr>
                <th>Componente Curricular</th>
                <th>Frequência</th>
                <th>Situação</th>
              </tr>
            </thead>

            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={3} style={{ textAlign: 'center' }}>
                    <Alert severity="info">
                      Nenhum dado de frequência encontrado.
                    </Alert>
                  </td>
                </tr>
              ) : (
                items.map(it => (
                  <tr key={it.id}>
                    <td>{it.nome}</td>
                    <td>{it.frequencia}%</td>
                    <td
                      className={
                        it.frequencia < 75
                          ? 'status-reprovado'
                          : 'status-aprovado'
                      }
                    >
                      {it.frequencia < 75 ? 'Reprovado' : 'Aprovado'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </MainLayout>
  );
};

export default AttendancePage;

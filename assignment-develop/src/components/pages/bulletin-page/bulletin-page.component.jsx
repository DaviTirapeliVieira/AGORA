import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchBoletimRequest,
  fetchBoletimAnosRequest,
  sendBoletimEmailRequest,
} from '@/logic/bulletin/ducks/bulletin.slice';
import MainLayout from '@/components/templates/main-layout/main-layout.component';
import Select from '@/components/atoms/select/select.component';
import { Alert } from '@mui/material';
import './bulletin-page.component.scss';
const BulletinPage = () => {
  const dispatch = useDispatch();

  const {
    items = [],
    loading,
    ano,
    anos = [],
    sendingEmail,
    emailStatus,
    error,
  } = useSelector(state => state.boletim);

  useEffect(() => {
    dispatch(fetchBoletimAnosRequest());
  }, []);

  useEffect(() => {
    if (anos.length > 0 && !ano) {
      dispatch(fetchBoletimRequest(anos[0]));
    }
  }, [anos]);

  function handleChangeAno(e) {
    const newAno = e.target.value;
    dispatch(fetchBoletimRequest(newAno));
  }

  function handleEnviarEmail() {
    dispatch(sendBoletimEmailRequest());
  }

  return (
    <MainLayout>
      <div className="card">
        <div className="top-controls">
          <Select
            label="Ano"
            name="ano"
            value={ano ?? ''}
            onChange={handleChangeAno}
            options={anos.map(a => ({ label: a, value: a }))}
          />

          <button
            className="primary"
            onClick={handleEnviarEmail}
            disabled={sendingEmail}
          >
            {sendingEmail ? 'Enviando...' : 'Enviar Boletim por Email'}
          </button>

          {emailStatus === 'success' && (
            <Alert severity="success">Email enviado com sucesso</Alert>
          )}

          {emailStatus === 'failure' && (
            <Alert severity="error">Erro ao enviar o email</Alert>
          )}
        </div>
      </div>

      <div className="card table-wrap">
        {loading ? (
          <Alert severity="info">Carregando boletim...</Alert>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <table className="boletim">
            <thead>
              <tr>
                <th>Componente curricular</th>
                <th>1ª Sin.</th>
                <th>2ª Sin.</th>
                <th>3ª Sin.</th>
                <th>4ª Sin.</th>
                <th>Frequência %</th>
                <th>Situação</th>
              </tr>
            </thead>

            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center' }}>
                    <Alert severity="info">
                      Nenhum dado de boletim encontrado.
                    </Alert>
                  </td>
                </tr>
              ) : (
                items.map(it => (
                  <tr key={it.id}>
                    <td>{it.nome}</td>
                    <td>{it.s1}</td>
                    <td>{it.s2}</td>
                    <td>{it.s3}</td>
                    <td>{it.s4}</td>
                    <td>{it.freq}%</td>
                    <td className="status-cursando">Cursando</td>
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

export default BulletinPage;

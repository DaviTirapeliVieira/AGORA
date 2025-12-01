import PropTypes from 'prop-types';
import MainLayout from '@/components/templates/main-layout/main-layout.component';
import Select from '@/components/atoms/select/select.component';
import Input from '@/components/atoms/input/input.component';
import Button from '@/components/atoms/button/button.component';
import './grades-layout.component.scss';

export const GradeAssignmentTemplate = ({
  title = 'Atribuição de Notas',
  filters,
  filterOptions,
  onChangeFilter,
  onSearch,
  rows,
  onChangeConcept,
  onSave,
  onCancel,
  loading,
  saving,
  error,
}) => {
  const isBusy = loading || saving;

  return (
    <MainLayout>
      <div className="grade-assignment">
        <header className="grade-assignment__header">
          <h1 className="grade-assignment__title">{title}</h1>

          <div className="grade-assignment__filters">
            <Select
              label="Ano Letivo"
              value={filters.anoLetivo}
              options={filterOptions.anosLetivos}
              onChange={e => onChangeFilter('anoLetivo', e.target.value)}
            />

            <Select
              label="Curso"
              value={filters.curso}
              options={filterOptions.cursos}
              onChange={e => onChangeFilter('curso', e.target.value)}
            />

            <Select
              label="Série"
              value={filters.serie}
              options={filterOptions.series}
              onChange={e => onChangeFilter('serie', e.target.value)}
            />

            <Select
              label="Turma"
              value={filters.turma}
              options={filterOptions.turmas}
              onChange={e => onChangeFilter('turma', e.target.value)}
            />

            <Select
              label="Componente Curricular"
              value={filters.componente}
              options={filterOptions.componentes}
              onChange={e => onChangeFilter('componente', e.target.value)}
            />

            <Select
              label="Período"
              value={filters.periodo}
              options={filterOptions.periodos}
              onChange={e => onChangeFilter('periodo', e.target.value)}
            />

            <div className="grade-assignment__filters-actions">
              <Button
                label={loading ? 'Carregando...' : 'Buscar'}
                onClick={onSearch}
                disabled={isBusy}
              />
            </div>
          </div>
        </header>

        {error && (
          <div className="grade-assignment__alert grade-assignment__alert--error">
            {error}
          </div>
        )}

        <section className="grade-assignment__content">
          <div className="grade-assignment__table-wrapper">
            <table className="grade-assignment__table">
              <thead>
                <tr>
                  <th className="grade-assignment__th grade-assignment__th--center">
                    Nº
                  </th>
                  <th className="grade-assignment__th">RA</th>
                  <th className="grade-assignment__th">Aluno</th>
                  <th className="grade-assignment__th grade-assignment__th--small">
                    Faltas
                  </th>
                  <th className="grade-assignment__th grade-assignment__th--small">
                    Conceito 1
                  </th>
                  <th className="grade-assignment__th grade-assignment__th--small">
                    Conceito 2
                  </th>
                  <th className="grade-assignment__th grade-assignment__th--small">
                    Conceito 3
                  </th>
                  <th className="grade-assignment__th grade-assignment__th--status">
                    Situação
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.length === 0 && (
                  <tr>
                    <td
                      className="grade-assignment__td grade-assignment__td--empty"
                      colSpan={8}
                    >
                      Nenhum registro encontrado para os filtros selecionados.
                    </td>
                  </tr>
                )}

                {rows.map((row, index) => (
                  <tr key={row.id}>
                    <td className="grade-assignment__td grade-assignment__td--center">
                      {index + 1}
                    </td>

                    <td className="grade-assignment__td">{row.ra}</td>

                    <td className="grade-assignment__td grade-assignment__td--student">
                      {row.nome}
                    </td>

                    <td className="grade-assignment__td grade-assignment__td--small">
                      <Input
                        type="number"
                        min={0}
                        value={row.faltas ?? ''}
                        onChange={e =>
                          onChangeConcept(row.id, 'faltas', e.target.value)
                        }
                      />
                    </td>

                    <td className="grade-assignment__td grade-assignment__td--small">
                      <Select
                        value={row.conceito ?? ''}
                        options={[
                          { value: '', label: 'Selecione...' },
                          { value: 'I', label: 'Insatisfatório (I)' },
                          { value: 'R', label: 'Regular (R)' },
                          { value: 'B', label: 'Bom (B)' },
                          { value: 'MB', label: 'Muito Bom (MB)' },
                        ]}
                        onChange={e =>
                          onChangeConcept(row.id, 'conceito', e.target.value)
                        }
                      />
                    </td>

                    <td className="grade-assignment__td grade-assignment__td--small">
                      <Select
                        value={row.conceito2 ?? ''}
                        options={[
                          { value: '', label: 'Selecione...' },
                          { value: 'I', label: 'Insatisfatório (I)' },
                          { value: 'R', label: 'Regular (R)' },
                          { value: 'B', label: 'Bom (B)' },
                          { value: 'MB', label: 'Muito Bom (MB)' },
                        ]}
                        onChange={e =>
                          onChangeConcept(row.id, 'conceito2', e.target.value)
                        }
                      />
                    </td>

                    <td className="grade-assignment__td grade-assignment__td--small">
                      <Select
                        value={row.conceito3 ?? ''}
                        options={[
                          { value: '', label: 'Selecione...' },
                          { value: 'I', label: 'Insatisfatório (I)' },
                          { value: 'R', label: 'Regular (R)' },
                          { value: 'B', label: 'Bom (B)' },
                          { value: 'MB', label: 'Muito Bom (MB)' },
                        ]}
                        onChange={e =>
                          onChangeConcept(row.id, 'conceito3', e.target.value)
                        }
                      />
                    </td>

                    <td className="grade-assignment__td grade-assignment__td--status">
                      <span
                        className={`grade-assignment__status grade-assignment__status--${row.situacaoClass}`}
                      >
                        {row.situacao}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="grade-assignment__footer">
          <span className="grade-assignment__footer-info">
            Alterações não salvas serão perdidas.
          </span>

          <div className="grade-assignment__footer-actions">
            <Button
              variant="secondary"
              label="Cancelar"
              onClick={onCancel}
              disabled={isBusy}
            />
            <Button
              label={saving ? 'Salvando...' : 'Salvar'}
              onClick={onSave}
              disabled={isBusy || rows.length === 0}
            />
          </div>
        </footer>
      </div>
    </MainLayout>
  );
};

GradeAssignmentTemplate.propTypes = {
  title: PropTypes.string,
  filters: PropTypes.shape({
    anoLetivo: PropTypes.string,
    curso: PropTypes.string,
    serie: PropTypes.string,
    turma: PropTypes.string,
    componente: PropTypes.string,
    periodo: PropTypes.string,
  }).isRequired,
  filterOptions: PropTypes.shape({
    anosLetivos: PropTypes.array,
    cursos: PropTypes.array,
    series: PropTypes.array,
    turmas: PropTypes.array,
    componentes: PropTypes.array,
    periodos: PropTypes.array,
  }).isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      ra: PropTypes.string,
      nome: PropTypes.string,
      faltas: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      conceito: PropTypes.string,
      conceito2: PropTypes.string,
      conceito3: PropTypes.string,
      situacao: PropTypes.string,
      situacaoClass: PropTypes.string,
    }),
  ).isRequired,
  onChangeConcept: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  saving: PropTypes.bool,
  error: PropTypes.string,
};

export default GradeAssignmentTemplate;

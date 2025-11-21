import { StudentList } from '@/components/organisms/student-list/student-list.component';
import './call-layout.component.scss';

export const ChamadaTemplate = ({
  alunos,
  presenca,
  selectedIndex,
  onToggle,
  onKey,
  numAulas,
  handleViewDetails,
}) => (
  <div className="chamada-template">
    <h2>Chamada - Classe {alunos[0]?.serie_classe}</h2>
    <StudentList
      alunos={alunos}
      presenca={presenca}
      selectedIndex={selectedIndex}
      onToggle={onToggle}
      onKey={onKey}
      numAulas={numAulas}
      onViewDetails={handleViewDetails}
    />
  </div>
);

import './call-layout.component.scss';
import { StudentList } from '@/components/organisms/student-list/student-list.component';

export const ChamadaTemplate = ({
  alunos,
  presenca,
  selectedIndex,
  onToggle,
  onInfo,
  onKey,
  onSave,
}) => (
  <>
    <div className="chamada-template">
      <h2>Chamada - Classe {alunos[0]?.serie_classe}</h2>
      <StudentList
        alunos={alunos}
        presenca={presenca}
        selectedIndex={selectedIndex}
        onToggle={onToggle}
        onInfo={onInfo}
        onKey={onKey}
      />
    </div>
  </>
);

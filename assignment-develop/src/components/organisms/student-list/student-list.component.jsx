import "./student-list.component.scss";
import { StudentItem } from "@/components/molecules/student-item/student-iten.component";

export const StudentList = ({
  alunos,
  presenca,
  selectedIndex,
  onToggle,
  onKey,
  numAulas,
  onViewDetails,
}) => (
  <div className="student-list-container">
    <ul className="student-list" tabIndex={0} onKeyDown={onKey}>
      {alunos.map((aluno, index) => (
      <StudentItem
        key={aluno.id}
        aluno={aluno}
        presenca={presenca[aluno.id]}
        selected={selectedIndex === index}
        onToggle={onToggle}
        numAulas={numAulas}
        onViewDetails={onViewDetails}
      />
    ))}
    </ul>
  </div>
);

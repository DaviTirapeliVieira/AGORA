import "./student-list.component.scss";
import { StudentItem } from "@/components/molecules/student-item/student-iten.component";

export const StudentList = ({
  alunos,
  presenca,
  selectedIndex,
  onToggle,
  onInfo,
  onKey,
}) => (
  <ul className="student-list" tabIndex="0" onKeyDown={onKey}>
    {alunos.map((aluno, index) => (
      <StudentItem
        key={index}
        aluno={aluno}
        checked={presenca[aluno.nome]}
        onToggle={() => onToggle(aluno.nome)}
        onInfo={() => onInfo(aluno)}
        selected={selectedIndex === index}
      />
    ))}
  </ul>
);

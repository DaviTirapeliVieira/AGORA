import "./student-item.component.scss";
import { Checkbox } from "@/components/atoms/checkbox/checkbox.component";
import AddIcon from '@mui/icons-material/Add';

export const StudentItem = ({ aluno, checked, onToggle, onInfo, selected }) => {
  return (
    <li className={`student-item ${selected ? "selected" : ""}`}>
      <div className="info">
        <Checkbox checked={checked} onChange={onToggle} />
        <span>{aluno.nome}</span>
      </div>
      <button onClick={onInfo} className="info-btn">
        <AddIcon />
      </button>
    </li>
  );
};

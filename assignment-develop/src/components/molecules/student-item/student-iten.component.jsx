import { Checkbox } from '@/components/atoms/checkbox/checkbox.component';
import { IconButton, Tooltip } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import './student-item.component.scss';

export const StudentItem = ({
  aluno,
  presenca = [],
  onToggle,
  selected,
  onViewDetails,
}) => {
  return (
    <li className={`student-item ${selected ? 'selected' : ''}`}>
      <div className="info">
        {Array.from({ length: aluno.numAula }).map((_, index) => (
          <Checkbox
            key={index}
            checked={presenca[index] || false}
            onChange={() => onToggle(aluno.id, index)}
          />
        ))}
        <span>{aluno.nome}</span>
      </div>

      <Tooltip title="Ver detalhes">
        <IconButton
          aria-label="view"
          color="primary"
          onClick={() => onViewDetails(aluno)}
        >
          <Visibility />
        </IconButton>
      </Tooltip>
    </li>
  );
};

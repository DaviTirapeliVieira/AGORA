import { useState } from 'react';
import Input from '@/components/atoms/input/input.component';
import Button from '@/components/atoms/button/button.component';
import SendIcon from '@mui/icons-material/Send';
import './code-form.component.scss';

const CodeForm = ({ placeholder = 'Gerar Código', onSend, disabled }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  return (
    <div className="code-form">
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Button
        onClick={handleSubmit}
        disabled={disabled}
        label={<SendIcon />}
      />
    </div>
  );
};

export default CodeForm;

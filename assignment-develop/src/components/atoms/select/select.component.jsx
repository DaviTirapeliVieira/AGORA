import './select.component.scss'

const Select = ({ label, name, value, onChange, options = [] }) => {
  return (
    <div className="atom-select">
      {label && <label htmlFor={name} className="select-label">{label}</label>}

      <div className="select-wrapper">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="select-modern"
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;

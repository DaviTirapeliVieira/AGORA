import "./input.component.scss";

const Input = ({ value, onChange, placeholder, name, type = "text" }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input"
    />
  );
};

export default Input;

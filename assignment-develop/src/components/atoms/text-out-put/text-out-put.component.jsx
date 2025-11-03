import "./text-out-put.component.scss";

const TextOutput = ({ text }) => {
  return <div className="text-output">{text || "O código gerado aparecerá aqui..."}</div>;
};

export default TextOutput;

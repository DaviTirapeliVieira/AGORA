import { Link } from "react-router-dom";

function LinkButton({ to, label, className }) {
  return (
    <Link
      to={to}
      className={className}
    >
      {label}
    </Link>
  );
}

export default LinkButton;

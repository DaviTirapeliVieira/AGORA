import Label from "@/components/atoms/label/label.component";
import './form-group.component.scss'

const FormGroup = ({ label, children }) => {
  return (
    <div className="form-group">
      {label && <Label className="form-label">{label}</Label>}
      <div className="form-control">{children}</div>
    </div>
)
}

export default FormGroup;

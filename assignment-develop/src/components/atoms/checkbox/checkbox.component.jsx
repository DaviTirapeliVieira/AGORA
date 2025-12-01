import "./checkbox.component.scss";

export const Checkbox = ({ presenca, onChange }) => (
  <label className="checkbox">
    <input type="checkbox" checked={presenca} onChange={onChange} />
    <span className="checkmark" />
  </label>
);

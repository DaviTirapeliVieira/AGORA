  import PropTypes from 'prop-types';

  import './label.component.scss';

  const propTypes = {
    text: PropTypes.string.isRequired,
  };

  const Label = ({ text, className }) => {
    return <span className={`label ${className}`}>{text}</span>;
  };

  Label.propTypes = propTypes;

  export default Label;

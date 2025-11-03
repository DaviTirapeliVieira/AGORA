import PropTypes from 'prop-types';
import './avatar.component.scss';

const AvatarComponent = ({ src, alt, className = '' }) => {
  return <img src={src} alt={alt} className={`avatar ${className}`} />;
};

AvatarComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default AvatarComponent;

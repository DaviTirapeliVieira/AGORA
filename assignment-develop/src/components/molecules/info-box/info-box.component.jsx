import PropTypes from 'prop-types';
import Label from '@/components/atoms/label/label.component';

import './info-box.component.scss';

const propTypes = {
  label: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

const InfoBox = ({ label, info }) => {
  return (
    <div className="info-box">
      <Label text={label} />
      <p>{info}</p>
    </div>
  );
};

InfoBox.propTypes = propTypes;

export default InfoBox;

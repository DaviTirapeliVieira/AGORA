import Label from '@/components/atoms/label/label.component';
import { getLabelsByRole } from './label-users';
import './user-info.component.scss';

const UserInfo = ({ user = {} }) => {
  const labels = getLabelsByRole(user.role);

  return (
    <div className="user-info">
      <div className="user-info__columns">
        {labels.map(({ key, label }) => (
          <div key={key} className="user-info__item">
            <Label text={`${label}: `} className="title-user" type="subtitle" />
            <Label
              text={user?.[key] ?? '—'}
              className="title"
              type="subtitle"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;

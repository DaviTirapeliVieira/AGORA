import Label from '@/components/atoms/label/label.component';
import './user-info.component.scss';

const UserInfo = ({ user = {} }) => {
  const infoEntries = Object.entries(user);

  return (
    <div className="user-info">
      <div className="user-info__columns">
        {infoEntries.map(([key, labelText]) => (
          <div key={key} className="user-info__item">
            <Label text={labelText} className="title" type="subtitle" />
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

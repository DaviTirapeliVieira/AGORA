import Avatar from '@/components/atoms/avatar/avatar.component';
import UserInfo from '@/components/molecules/user-info/user-info.component';
import './user-card.component.scss';

const UserCard = ({ userInformation, user }) => {
  return (
    <div className="user-card">
      <div className="avatar-section">
        <Avatar src={user.image} alt={user.name} />
      </div>

      <div className="user-info">
        <UserInfo
          userInformation={userInformation}
          name={user.name}
          email={user.email}
          phone={user.phone}
          cpf={user.cpf}
          address={user.address}
          date={user.date}
        />
      </div>
    </div>
  );
};

export default UserCard;

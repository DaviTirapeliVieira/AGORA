import Avatar from '@/components/atoms/avatar/avatar.component';
import UserInfo from '@/components/molecules/user-info/user-info.component';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import './user-card.component.scss';

const UserCard = ({ user, loading, error }) => {
  return (
    <div className="user-card">
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && user && (
        <>
          <div className="avatar-section">
            <Avatar src={user.image} alt={user.name} />
          </div>

          <div className="user-info">
            <UserInfo
              name={user.name}
              email={user.email}
              phone={user.phone}
              cpf={user.cpf}
              address={user.address}
              date={user.date}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default UserCard;

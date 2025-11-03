import { connect } from 'react-redux';
import { logout } from '@/logic/authentication/ducks/auth-slice';
import UserMenu from './user-menu.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  onLogout: logout,
};

const UserMenuEnhanced = connect(mapStateToProps, mapDispatchToProps)(UserMenu);

export default UserMenuEnhanced;

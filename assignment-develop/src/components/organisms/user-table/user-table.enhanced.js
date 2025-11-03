import { connect } from 'react-redux';
import { deleteUserRequest } from '@/logic/user/ducks/delete-user-slice';
import {
  usersSelector,
  userListLoadingSelector,
  userListErrorSelector,
} from '@/logic/user/ducks/user-selectors';
import UserTable from './user-table.component';

const mapStateToProps = state => ({
  users: usersSelector(state),
  loading: userListLoadingSelector(state),
  error: userListErrorSelector(state),
  deleteLoading: state.user.deleteUser.loading,
  deleteSuccess: state.user.deleteUser.success,
});

const mapDispatchToProps = dispatch => ({
  deleteUser: userId => dispatch(deleteUserRequest(userId)),
});

const UserTableEnhanced = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserTable);

export default UserTableEnhanced;

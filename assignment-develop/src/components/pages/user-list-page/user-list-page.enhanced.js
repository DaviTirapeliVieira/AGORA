import { connect } from 'react-redux';
import { fetchUsersRequest } from '@/logic/user/ducks/get-users-slice';
import {
  usersSelector,
  userListLoadingSelector,
  userListErrorSelector,
} from '@/logic/user/ducks/user-selectors';
import UserListPage from './user-list-page.component';

const mapStateToProps = state => ({
  users: usersSelector(state),
  loading: userListLoadingSelector(state),
  error: userListErrorSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsersRequest()),
});

const UserListPageEnhanced = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserListPage);

export default UserListPageEnhanced;

import { connect } from 'react-redux';
import { fetchUserRequest } from '@/logic/user/ducks/get-user-slice';
import {
  userDetailsSelector,
  userDetailsLoadingSelector,
  userDetailsErrorSelector,
} from '@/logic/user/ducks/user-selectors';
import UserDetailModal from './user-detail-modal.component';

const mapStateToProps = state => ({
  user: userDetailsSelector(state),
  loading: userDetailsLoadingSelector(state),
  error: userDetailsErrorSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchUserDetails: userId => dispatch(fetchUserRequest(userId)),
});

const UserDetailModalEnhanced = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDetailModal);

export default UserDetailModalEnhanced;

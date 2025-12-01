import { connect } from 'react-redux';
import UserForm from './user-form.component.jsx';
import { createUserRequest } from '@/logic/user/ducks/create-user-slice';
import {
  userDetailsSelector,
  userDetailsLoadingSelector,
  userDetailsErrorSelector,
} from '@/logic/user/ducks/user-selectors';

const mapStateToProps = state => ({
  currentUserRole: userDetailsSelector(state)?.role,
  loading: userDetailsLoadingSelector(state),
  error: userDetailsErrorSelector(state),
});

const mapDispatchToProps = dispatch => ({
  createUser: payload => dispatch(createUserRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);

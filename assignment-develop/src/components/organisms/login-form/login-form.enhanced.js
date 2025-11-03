import { connect } from 'react-redux';
import { loginRequest } from '@/logic/authentication/ducks/auth-slice';
import {
  authTokenSelector,
  authErrorSelector,
  authLoadingSelector,
} from '@/logic/authentication/ducks/auth-selectors';
import LoginForm from './login-form.component';

const mapStateToProps = state => ({
  token: authTokenSelector(state),
  error: authErrorSelector(state),
  loading: authLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(loginRequest({ email, password })),
});

const LoginFormEnhanced = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default LoginFormEnhanced;

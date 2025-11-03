import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
  redirectPath: PropTypes.string,
};

const Unauthenticated = ({ redirectPath = '/' }) => {
  const token = useSelector(state => state.auth.token);
  return !token ? <Outlet /> : <Navigate to={redirectPath} />;
};

Unauthenticated.propTypes = propTypes;

export default Unauthenticated;

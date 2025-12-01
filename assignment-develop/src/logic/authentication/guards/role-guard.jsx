import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const RoleGuard = ({ allowedRoles }) => {
  const userRole = useSelector(state => state.user.userDetails.user?.role);

  if (!userRole) {
    return <Navigate to="/not-authorized" replace />;
  }

  return allowedRoles.includes(userRole) ? (
    <Outlet />
  ) : (
    <Navigate to="/not-authorized" replace />
  );
};

export default RoleGuard;

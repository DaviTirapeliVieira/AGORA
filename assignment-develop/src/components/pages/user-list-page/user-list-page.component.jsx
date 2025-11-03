import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Box, CircularProgress, Alert } from '@mui/material';
import MainLayout from '@/components/templates/main-layout/main-layout.component';
import { UserTable } from '@/components/organisms/user-table';

import './user-list-page.component.scss';

const propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ).isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  fetchUsers: PropTypes.func.isRequired,
};

const UserListPage = ({
  users = [],
  loading = false,
  error = null,
  fetchUsers,
}) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <MainLayout>
      <Box className="user-list-page">
        <Paper className="user-list-paper" elevation={3}>
          <Typography className="user-list-title" variant="h4" gutterBottom>
            User List
          </Typography>
          {loading && <CircularProgress />}
          {error && <Alert severity="error">{error}</Alert>}
          {!loading && !error && <UserTable users={users} />}
        </Paper>
      </Box>
    </MainLayout>
  );
};

UserListPage.propTypes = propTypes;

export default UserListPage;

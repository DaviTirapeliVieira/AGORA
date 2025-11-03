import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TableFooter,
  TablePagination,
  Tooltip,
  Typography,
} from '@mui/material';
import { Visibility, Edit, Delete } from '@mui/icons-material';
import Swal from 'sweetalert2';
import { UserDetailModal } from '@/components/molecules/user-detail-modal';
import './user-table.component.scss';

const propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ),
  deleteUser: PropTypes.func.isRequired,
  deleteSuccess: PropTypes.bool.isRequired,
  deleteLoading: PropTypes.bool.isRequired,
};

const UserTable = ({
  users = [],
  deleteUser,
  deleteSuccess,
  deleteLoading,
}) => {
  const [page, setPage] = useState(0);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rowsPerPage = 20;

  useEffect(() => {
    if (!deleteLoading && deleteSuccess) {
      Swal.close();
      Swal.fire('Deleted!', 'The user has been deleted.', 'success');
    }
  }, [deleteLoading, deleteSuccess]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleOpenModal = userId => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedUserId(null);
    setIsModalOpen(false);
  };

  const handleDeleteUser = userId => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action is permanent and cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel',
      preConfirm: () => {
        Swal.fire({
          title: 'Deleting...',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
            deleteUser(userId);
          },
        });
      },
    });
  };

  return (
    <TableContainer component={Paper} className="user-table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4}>
                <Typography align="center">User list is empty</Typography>
              </TableCell>
            </TableRow>
          ) : (
            users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(user => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Tooltip title="View">
                      <IconButton
                        aria-label="view"
                        color="primary"
                        onClick={() => handleOpenModal(user.id)}
                      >
                        <Visibility />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton aria-label="edit" color="secondary">
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        aria-label="delete"
                        color="error"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <Delete />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
          )}
        </TableBody>
        {users.length > 0 && (
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[]}
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                labelRowsPerPage=""
              />
            </TableRow>
          </TableFooter>
        )}
      </Table>
      {selectedUserId && (
        <UserDetailModal
          open={isModalOpen}
          handleClose={handleCloseModal}
          userId={selectedUserId}
        />
      )}
    </TableContainer>
  );
};

UserTable.propTypes = propTypes;

export default UserTable;

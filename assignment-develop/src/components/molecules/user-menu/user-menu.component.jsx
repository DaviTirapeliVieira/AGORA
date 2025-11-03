import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  IconButton,
  Menu,
  MenuItem,
  Box,
  Avatar,
  Typography,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { userDetailsSelector } from "@/logic/user/ducks/user-selectors";
import './user-menu.component.scss';

const propTypes = {
  onLogout: PropTypes.func.isRequired,
};

const UserMenu = ({ onLogout }) => {
  const user = useSelector(userDetailsSelector);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    onLogout();
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton
        onClick={handleMenu}
        size="large"
        edge="end"
        color="inherit"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        className="header-icon-button"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ paper: 'custom-menu-paper' }}
        className="profile-menu"
      >
        <Box
          display="flex"
          alignItems="center"
          p={2}
          className="profile-menu-header"
        >
          <Avatar alt="User" src={user.avatar} />
          <Box ml={2}>
            <Typography variant="body1">{user.name}</Typography>
            <Typography variant="body2">{user.email}</Typography>
          </Box>
        </Box>
        <MenuItem onClick={handleLogout} className="profile-menu-item">
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

UserMenu.propTypes = propTypes;

export default UserMenu;

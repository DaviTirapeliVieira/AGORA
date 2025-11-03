import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import navigationConfig from '@/config/navigation-config';
import { UserMenu } from '@/components/molecules/user-menu';
import './header.component.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const Header = ({ title }) => {
  const [submenuAnchorEls, setSubmenuAnchorEls] = useState({});

  const navItems = navigationConfig;

  const handleSubmenu = (event, path) => {
    setSubmenuAnchorEls(prevState => ({
      ...prevState,
      [path]: event.currentTarget,
    }));
  };

  const handleClose = path => {
    setSubmenuAnchorEls(prevState => ({
      ...prevState,
      [path]: null,
    }));
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar className="header-toolbar">
          <Typography variant="h6" className="header-title">
            <Link className="header-link" to="/">
              {title}
            </Link>
          </Typography>
        {navItems.map(item =>
          item.children ? (
            <Box key={item.path}>
              <Button
                color="inherit"
                onClick={event => handleSubmenu(event, item.path)}
              >
                {item.label}
              </Button>
              <Menu
                anchorEl={submenuAnchorEls[item.path]}
                open={Boolean(submenuAnchorEls[item.path])}
                onClose={() => handleClose(item.path)}
                keepMounted
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
              >
                {item.children.map(subItem => (
                  <MenuItem
                    key={`${item.path}${subItem.path}`}
                    component={Link}
                    to={`${item.path}${subItem.path}`}
                    onClick={() => handleClose(item.path)}
                  >
                    {subItem.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Button
              key={item.path}
              color="inherit"
              component={Link}
              to={item.path}
            >
              {item.label}
            </Button>
          ),
        )}
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = propTypes;

export default Header;

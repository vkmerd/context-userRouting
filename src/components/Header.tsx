import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Box
} from '@mui/material';
import {Link} from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#000' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ödev
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <MenuItem component={Link} to="/" >Home</MenuItem>
          <MenuItem component={Link} to="/login" >Login</MenuItem>
          <MenuItem component={Link} to="/users" >Users</MenuItem>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 'bold' }}
        >
          Your Name
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
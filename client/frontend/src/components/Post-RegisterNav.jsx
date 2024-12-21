import React from 'react';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './Post-RegisterNav.css';

function PostRegisterNav() {
  const theme = createTheme({
    palette: {
      darkGreen: {
        main: '#003E33',
      },
    },
    typography: {
      button: {
        textTransform: 'none',
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            fontFamily: 'League Spartan',
            fontSize: '18px',
            '&:hover': {
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
              backgroundColor: 'transparent',
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="post-register-bar">
        <div className="nav-left">
          <div className="logo">
            <img src="/public/logofulltransparent.png" alt="Logo" />
          </div>
          <Button variant="text" color="darkGreen" component={Link} to="/">
            Home
          </Button>
          <Button variant="text" color="darkGreen" component={Link} to="/create-group">
            Create Group
          </Button>
          <Button variant="text" color="darkGreen" component={Link} to="/groups">
            Groups
          </Button>
        </div>

        <div className="nav-center">
          <input type="text" placeholder="Search Groups & People" />
        </div>

        <div className="nav-right">
          {/* Placeholder icons*/}
          <div className="icon">
            <Link to="/notifications">
              <span role="img" aria-label="Notifications">🔔</span>
            </Link>
          </div>
          <div className="icon">
            <Link to="/settings">
              <span role="img" aria-label="Profile icon">👤</span>
            </Link>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default PostRegisterNav;
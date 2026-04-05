import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Box, IconButton,
  Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = ['Home', 'New Arrivals', 'Services'];

const styles = {
  appBar: {
    backgroundColor: '#FDF8F5',
    boxShadow: 'none',
    borderBottom: '1px solid #F0E0DC',
    top: 0,
    zIndex: 1100,
    position: "fixed"
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '64px',
    px: { xs: 2, md: 4 },
  },
  navLink: {
    fontFamily: '"Raleway", sans-serif',
    fontWeight: 400,
    fontSize: '0.85rem',
    color: '#3D2B2E',
    cursor: 'pointer',
    letterSpacing: '0.05em',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: -2,
      left: 0,
      width: '100%',
      height: '1px',
      backgroundColor: '#A0616A',
    },
  },
  brandName: {
    fontFamily: '"Great Vibes", cursive',
    fontSize: { xs: '1.6rem', md: '2rem' },
    color: '#3D2B2E',
    letterSpacing: '0.02em',
    position: { md: 'absolute' },
    left: { md: '50%' },
    transform: { md: 'translateX(-50%)' },
  },
  iconBtn: {
    color: '#3D2B2E',
    p: 0.8,
  },
};

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <AppBar sx={styles.appBar} component="nav">
        <Toolbar sx={styles.toolbar}>
          {/* Left Nav or Hamburger */}
          {isMobile ? (
            <IconButton onClick={() => setDrawerOpen(true)} sx={styles.iconBtn}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 4 }}>
              {navLinks.map((link, i) => (
                <Typography key={link} sx={{ ...styles.navLink, '&:after': i === 0 ? styles.navLink['&:after'] : { display: 'none' } }}>
                  {link}
                </Typography>
              ))}
            </Box>
          )}

          {/* Brand Name */}
          <Typography sx={styles.brandName}>
            Parsa Design
          </Typography>

          {/* Right Icons */}
          <Box sx={{ display: 'flex', gap: { xs: 0.5, md: 1 } }}>
            <IconButton sx={styles.iconBtn}><FavoriteBorderIcon fontSize="small" /></IconButton>
            <IconButton sx={styles.iconBtn}><ShoppingCartOutlinedIcon fontSize="small" /></IconButton>
            <IconButton sx={styles.iconBtn}><SearchIcon fontSize="small" /></IconButton>
            <IconButton sx={styles.iconBtn}><ShoppingCartOutlinedIcon fontSize="small" /></IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 260, bgcolor: '#FDF8F5', height: '100%', p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography sx={{ fontFamily: '"Great Vibes", cursive', fontSize: '1.6rem', color: '#3D2B2E' }}>
              Parsa Design
            </Typography>
            <IconButton onClick={() => setDrawerOpen(false)}><CloseIcon /></IconButton>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link} onClick={() => setDrawerOpen(false)} sx={{ cursor: 'pointer' }}>
                <ListItemText
                  primary={link}
                  primaryTypographyProps={{
                    fontFamily: '"Raleway", sans-serif',
                    fontWeight: 400,
                    color: '#3D2B2E',
                    letterSpacing: '0.05em',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

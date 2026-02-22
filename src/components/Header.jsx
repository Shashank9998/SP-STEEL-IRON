import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar, IconButton, Box, Drawer, List, ListItem,
  ListItemButton, ListItemText, Collapse, Button,
  Avatar, Menu, MenuItem, Divider, ListItemIcon
} from '@mui/material';

import { motion } from 'framer-motion';

import CloseIcon from '@mui/icons-material/Close';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

import './Header.css';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  
  // Dropdown state
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleProfileMenuClose = () => setAnchorEl(null);

  const handleMegaOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const handleMegaClose = () => {
    closeTimer.current = setTimeout(() => { setMegaOpen(false); }, 200);
  };

  const handleInstantClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    handleProfileMenuClose();
    setIsDrawerOpen(false);
  };

  return (
    <AppBar position="sticky" className="premium-header">
      <Toolbar className="header-container">
        {/* LOGO */}
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="main-logo">
            <div className="logo-box">SP</div>
            <div className="logo-text d-none d-sm-flex">
              <span className="brand-name">IRON & STEEL</span>
              <span className="brand-tagline">STRENGTH REDEFINED</span>
            </div>
          </Link>
        </motion.div>

        <Box sx={{ flexGrow: 1 }} />

        {/* DESKTOP NAV */}
        <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: '1.8rem', alignItems: 'center', position: 'relative' }}>
          <Link to="/" className="nav-item-link" onMouseEnter={handleInstantClose}>Home</Link>
          <Link to="/about" className="nav-item-link" onMouseEnter={handleInstantClose}>About</Link>

          {/* MEGA MENU */}
          <div className="mega-wrapper" onMouseEnter={handleMegaOpen} onMouseLeave={handleMegaClose}>
            <span className="nav-item-link products-nav">
              Products <KeyboardArrowDownIcon sx={{ fontSize: '1rem' }} />
            </span>
            {megaOpen && (
              <Box className="mega-menu">
                <Box className="mega-column">
                  <h4>Structural Steel</h4>
                  <Link to="/products/tmt">TMT Bars</Link>
                  <Link to="/products/beams-columns">Beams & Columns</Link>
                  <Link to="/products/plates">MS Plates</Link>
                </Box>
                <Box className="mega-column">
                  <h4>Pipes & Tubes</h4>
                  <Link to="/products/pipes">GI Pipes</Link>
                  <Link to="/products/stainless-steel-coils">SS Coils</Link>
                  <Link to="/products/steelsheets">Steel Sheets</Link>
                </Box>
                <Box className="mega-column">
                  <h4>Premium Steel</h4>
                  <Link to="/products/sheets">Cold Rolled Sheets</Link>
                  <Link to="/products/stainless-steel">Stainless Steel</Link>
                </Box>
              </Box>
            )}
          </div>

          <Link to="/services" className="nav-item-link" onMouseEnter={handleInstantClose}>Services</Link>
          <Link to="/projects" className="nav-item-link" onMouseEnter={handleInstantClose}>Projects</Link>
          <Link to="/contact" className="nav-item-link" onMouseEnter={handleInstantClose}>Contact</Link>

          {/* USER SECTION / LOGIN */}
          <Box onMouseEnter={handleInstantClose}>
            {user ? (
              <>
                <Button 
                  onClick={handleProfileMenuOpen}
                  className="user-profile-btn"
                  startIcon={<Avatar sx={{ width: 32, height: 32, bgcolor: '#ff3c00', fontSize: '14px' }}>{user.name[0]}</Avatar>}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  <span className="user-name-text">Hi, {user.name.split(' ')[0]}</span>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={isMenuOpen}
                  onClose={handleProfileMenuClose}
                  PaperProps={{ className: 'user-dropdown-paper' }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={handleProfileMenuClose}>
                    <ListItemIcon><PersonIcon fontSize="small" /></ListItemIcon> Profile
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout} sx={{ color: '#d32f2f' }}>
                    <ListItemIcon><LogoutIcon fontSize="small" sx={{ color: '#d32f2f' }} /></ListItemIcon> Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button component={Link} to="/login" variant="contained" className="premium-login-btn" startIcon={<LoginIcon />}>
                  Login
                </Button>
              </motion.div>
            )}
          </Box>
        </Box>

        <IconButton className="hamburger-btn d-lg-none" onClick={() => setIsDrawerOpen(true)}>
          <MenuRoundedIcon />
        </IconButton>
      </Toolbar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box sx={{ width: 280 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px", borderBottom: "1px solid #eee" }}>
            <Link to="/" className="main-logo" onClick={() => setIsDrawerOpen(false)}>
              <div className="logo-box">SP</div>
              <div className="logo-text">
                <span className="brand-name">IRON & STEEL</span>
                <span className="brand-tagline">STRENGTH REDEFINED</span>
              </div>
            </Link>
            <IconButton onClick={() => setIsDrawerOpen(false)}><CloseIcon /></IconButton>
          </Box>

          <List>
            {/* MOBILE USER PROFILE CARD */}
            {user && (
              <Box className="mobile-user-card">
                <Avatar sx={{ bgcolor: '#ff3c00', width: 45, height: 45 }}>{user.name[0]}</Avatar>
                <Box>
                  <ListItemText primary={user.name} secondary="Premium Member" primaryTypographyProps={{ fontWeight: 'bold' }} />
                </Box>
              </Box>
            )}

            <ListItem disablePadding>
              <ListItemButton component={Link} to="/" onClick={() => setIsDrawerOpen(false)}><ListItemText primary="Home" /></ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/about" onClick={() => setIsDrawerOpen(false)}><ListItemText primary="About" /></ListItemButton>
            </ListItem>

            {/* MOBILE PRODUCTS */}
            
             {/* PRODUCTS */}


             {/* MOBILE PRODUCTS MEGA MENU */}
             <ListItem disablePadding>
               <ListItemButton onClick={() => setMobileProductsOpen(!mobileProductsOpen)}>
                 <ListItemText
                   primary="Products"
                   primaryTypographyProps={{ fontWeight: "bold" }}
                 />
                 {mobileProductsOpen ? <ExpandLess /> : <ExpandMore />}
               </ListItemButton>
             </ListItem>

             <Collapse in={mobileProductsOpen} timeout="auto" unmountOnExit>

               <Box
                 sx={{
                   padding: "10px 20px 20px 20px",
                   background: "#fafafa"
                 }}
               >

                 {/* Structural Steel */}
                 <Box sx={{ marginBottom: "15px" }}>
                   <Box sx={{ fontWeight: "bold", marginBottom: "8px", color: "#ff3c00" }}>
                     Structural Steel
                   </Box>

                   <List disablePadding>
                     <ListItemButton
                       component={Link}
                       to="/products/tmt"
                       onClick={() => setIsDrawerOpen(false)}
                       sx={{ pl: 2 }}
                     >
                       <ListItemText primary="TMT Bars" />
                     </ListItemButton>

                     <ListItemButton
                       component={Link}
                       to="/products/beams-columns"
                       onClick={() => setIsDrawerOpen(false)}
                       sx={{ pl: 2 }}
                     >
                       <ListItemText primary="Beams & Columns" />
                     </ListItemButton>

                     <ListItemButton
                       component={Link}
                       to="/products/plates"
                       onClick={() => setIsDrawerOpen(false)}
                       sx={{ pl: 2 }}
                     >
                       <ListItemText primary="MS Plates" />
                     </ListItemButton>
                   </List>
                 </Box>


                 {/* Pipes & Tubes */}
                 <Box sx={{ marginBottom: "15px" }}>
                   <Box sx={{ fontWeight: "bold", marginBottom: "8px", color: "#ff3c00" }}>
                     Pipes & Tubes
                   </Box>

                   <List disablePadding>
                     <ListItemButton
                       component={Link}
                       to="/products/pipes"
                       onClick={() => setIsDrawerOpen(false)}
                       sx={{ pl: 2 }}
                     >
                       <ListItemText primary="GI Pipes" />
                     </ListItemButton>

                     <ListItemButton
                       component={Link}
                       to="/products/stainless-steel-coils"
                       onClick={() => setIsDrawerOpen(false)}
                       sx={{ pl: 2 }}
                     >
                       <ListItemText primary="SS Coils" />
                     </ListItemButton>

                     <ListItemButton
                       component={Link}
                       to="/products/sheets"
                       onClick={() => setIsDrawerOpen(false)}
                       sx={{ pl: 2 }}
                     >
                       <ListItemText primary="Steel Sheets" />
                     </ListItemButton>
                   </List>
                 </Box>


                 {/* Premium Steel */}
                 <Box>
                   <Box sx={{ fontWeight: "bold", marginBottom: "8px", color: "#ff3c00" }}>
                     Premium Steel
                   </Box>

                   <List disablePadding>
                     <ListItemButton
                       component={Link}
                       to="/products/sheets"
                       onClick={() => setIsDrawerOpen(false)}
                       sx={{ pl: 2 }}
                     >
                       <ListItemText primary="Cold Rolled Sheets" />
                     </ListItemButton>

                     <ListItemButton
                       component={Link}
                       to="/products/stainless-steel-coils"
                       onClick={() => setIsDrawerOpen(false)}
                       sx={{ pl: 2 }}
                     >
                       <ListItemText primary="Stainless Steel" />
                     </ListItemButton>
                   </List>
                 </Box>

               </Box>

             </Collapse>



             {/* SERVICES */}
             <ListItem disablePadding>
               <ListItemButton
                 component={Link}
                 to="/services"
                 onClick={() => setIsDrawerOpen(false)}
               >
                 <ListItemText primary="Services" />
               </ListItemButton>
             </ListItem>


             {/* PROJECTS */}
             <ListItem disablePadding>
               <ListItemButton
                 component={Link}
                 to="/projects"
                 onClick={() => setIsDrawerOpen(false)}
               >
                 <ListItemText primary="Projects" />
               </ListItemButton>
             </ListItem>


             {/* CONTACT */}
             <ListItem disablePadding>
               <ListItemButton
                 component={Link}
                 to="/contact"
                 onClick={() => setIsDrawerOpen(false)}
               >
                 <ListItemText primary="Contact" />
               </ListItemButton>
             </ListItem>

            <ListItem sx={{ padding: "20px" }}>
              {user ? (
                <Button fullWidth onClick={handleLogout} className="mobile-logout-btn" startIcon={<LogoutIcon />}> Logout </Button>
              ) : (
                <Button component={Link} to="/login" fullWidth className="mobile-login-btn" startIcon={<LoginIcon />} onClick={() => setIsDrawerOpen(false)}> Login </Button>
              )}
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
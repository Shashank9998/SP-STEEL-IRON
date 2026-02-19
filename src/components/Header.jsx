// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { AppBar, Toolbar, IconButton, InputBase, Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
// // import SearchIcon from '@mui/icons-material/Search';
// // import CloseIcon from '@mui/icons-material/Close';
// // import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

// // const Header = () => {
// //   const [isSearchOpen, setIsSearchOpen] = useState(false);
// //   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
// //   const [searchQuery, setSearchQuery] = useState("");

// //   const navLinks = [
// //     { title: 'Home', path: '/' },
// //     { title: 'About', path: '/about' },
// //     { title: 'Services', path: '/services' },
// //     { title: 'Products', path: '/products' },
// //     { title: 'Projects', path: '/projects' },
// //     { title: 'Contact', path: '/contact' },
// //   ];

// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     if (searchQuery.trim()) {
// //       console.log("Searching for:", searchQuery);
// //       setIsSearchOpen(false);
// //       setSearchQuery("");
// //     }
// //   };

// //   return (
// //     <AppBar position="sticky" className="custom-header">
// //       <Toolbar className="container d-flex justify-content-between align-items-center">

// //         {/* --- PREMIUM LOGO --- */}
// //         <div className="logo-section">
// //           <Link to="/" className="main-logo">
// //             <div className="logo-icon">SP</div>
// //             <div className="logo-text d-none d-sm-flex">
// //               <span className="brand-name">IRON & STEEL</span>
// //               <span className="brand-tagline">STRENGTH & RELIABILITY</span>
// //             </div>
// //           </Link>
// //         </div>

// //         {/* --- DESKTOP NAVIGATION (ALL LINKS) --- */}
// //         <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: '1.8rem' }}>
// //           {navLinks.map((link) => (
// //             <Link key={link.title} to={link.path} className="nav-item-link">
// //               {link.title}
// //             </Link>
// //           ))}
// //         </Box>

// //         {/* --- ACTION ICONS --- */}
// //         <div className="d-flex align-items-center gap-2">

// //           {/* Animated Search Bar Logic */}
// //           <form onSubmit={handleSearch} className={`search-wrapper ${isSearchOpen ? 'active' : ''}`}>
// //             <InputBase
// //               placeholder="Search items..."
// //               className="search-input"
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //               autoFocus={isSearchOpen}
// //             />
// //             <IconButton 
// //               onClick={() => setIsSearchOpen(!isSearchOpen)}
// //               className="search-trigger"
// //             >
// //               {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
// //             </IconButton>
// //           </form>

// //           {/* Unique Hamburger for Mobile */}
// //           <IconButton
// //             className="hamburger-btn d-lg-none"
// //             onClick={() => setIsDrawerOpen(true)}
// //           >
// //             <MenuRoundedIcon sx={{ fontSize: '1.8rem' }} />
// //           </IconButton>
// //         </div>
// //       </Toolbar>

// //       {/* --- MOBILE SIDE DRAWER --- */}
// //       <Drawer
// //         anchor="right"
// //         open={isDrawerOpen}
// //         onClose={() => setIsDrawerOpen(false)}
// //         PaperProps={{ className: "mobile-drawer-paper" }}
// //       >
// //         <div className="drawer-header">
// //            <span className="drawer-logo-text">SP MENU</span>
// //            <IconButton onClick={() => setIsDrawerOpen(false)}><CloseIcon /></IconButton>
// //         </div>
// //         <List className="mt-3">
// //           {navLinks.map((link) => (
// //             <ListItem key={link.title} disablePadding>
// //               <ListItemButton component={Link} to={link.path} onClick={() => setIsDrawerOpen(false)}>
// //                 <ListItemText primary={link.title} className="drawer-link-text" />
// //               </ListItemButton>
// //             </ListItem>
// //           ))}
// //         </List>
// //       </Drawer>
// //     </AppBar>
// //   );
// // };

// // export default Header;

// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Box,
//   InputBase
// } from "@mui/material";

// import SearchIcon from "@mui/icons-material/Search";
// import CloseIcon from "@mui/icons-material/Close";
// import MenuIcon from "@mui/icons-material/Menu";

// import { Link } from "react-router-dom";
// import "./Header.css";

// const navItems = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "/about" },
//   { name: "Services", path: "/services" },
//   { name: "Products", path: "/products" },
//   { name: "Projects", path: "/projects" },
//   { name: "Contact", path: "/contact" }
// ];

// const Header = () => {
//   const [openDrawer, setOpenDrawer] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const toggleDrawer = () => setOpenDrawer(!openDrawer);
//   const toggleSearch = () => setSearchOpen(!searchOpen);

//   const handleSearch = (e) => {
//     if (e.key === "Enter") {
//       alert(`Searching for: ${searchTerm}`);
//     }
//   };

//   return (
//     <>
//       <AppBar position="sticky" className="custom-navbar">
//         <Toolbar className="d-flex justify-content-between">

//           {/* Logo */}
//           <h4 className="logo">Patel Glasswork</h4>

//           {/* Desktop Nav */}
//           <Box className="nav-links d-none d-md-flex">
//             {navItems.map((item) => (
//               <Link key={item.name} to={item.path} className="nav-link">
//                 {item.name}
//               </Link>
//             ))}
//           </Box>

//           {/* Right Icons */}
//           <Box className="d-flex align-items-center">

//             {/* Search Icon */}
//             <IconButton color="inherit" onClick={toggleSearch}>
//               {searchOpen ? <CloseIcon /> : <SearchIcon />}
//             </IconButton>

//             {/* Hamburger */}
//             <IconButton
//               color="inherit"
//               className="d-md-none unique-hamburger"
//               onClick={toggleDrawer}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>

//         {/* Animated Search Bar */}
//         <div className={`search-bar ${searchOpen ? "active" : ""}`}>
//           <InputBase
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onKeyDown={handleSearch}
//             className="search-input"
//           />
//         </div>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
//         <Box className="drawer-menu" role="presentation">
//           <List>
//             {navItems.map((item) => (
//               <ListItem
//                 button
//                 key={item.name}
//                 component={Link}
//                 to={item.path}
//                 onClick={toggleDrawer}
//               >
//                 <ListItemText primary={item.name} />
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Header;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, IconButton, InputBase, Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';
// import SearchIcon from '@mui/icons-material/Search';
// import CloseIcon from '@mui/icons-material/Close';
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import './Header.css';

// const Header = () => {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const navLinks = [
//     { title: 'Home', path: '/' },
//     { title: 'About', path: '/about' },
//     { title: 'Services', path: '/services' },
//     { title: 'Products', path: '/products' },
//     { title: 'Projects', path: '/projects' },
//     { title: 'Contact', path: '/contact' },
//   ];

//   return (
//     <AppBar position="sticky" className="premium-header">
//       <Toolbar className="container d-flex justify-content-between align-items-center">

//         {/* LOGO WITH ENTRANCE ANIMATION */}
//         <motion.div
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Link to="/" className="main-logo">
//             <div className="logo-box">SP</div>
//             <div className="logo-text d-none d-sm-flex">
//               <span className="brand-name">IRON & STEEL</span>
//               <span className="brand-tagline">STRENGTH REDEFINED</span>
//             </div>
//           </Link>
//         </motion.div>

//         {/* DESKTOP NAV WITH HOVER ANIMATION */}
//         <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: '2rem' }}>
//           {navLinks.map((link, index) => (
//             <motion.div
//               key={link.title}
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <Link to={link.path} className="nav-item-link">
//                 {link.title}
//                 <motion.div className="underline" whileHover={{ width: '100%' }} />
//               </Link>
//             </motion.div>
//           ))}
//         </Box>

//         {/* ACTIONS SECTION */}
//         <div className="d-flex align-items-center gap-3">

//           {/* SEARCH BAR WITH EXPANDING ANIMATION */}
//           <div className="search-box-wrapper">
//             <AnimatePresence>
//               {isSearchOpen && (
//                 <motion.div
//                   initial={{ width: 0, opacity: 0 }}
//                   animate={{ width: 240, opacity: 1 }}
//                   exit={{ width: 0, opacity: 0 }}
//                   className="animated-search-input"
//                 >
//                   <InputBase placeholder="Search steel products..." fullWidth autoFocus />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//             <IconButton
//               onClick={() => setIsSearchOpen(!isSearchOpen)}
//               className={`search-toggle-btn ${isSearchOpen ? 'active' : ''}`}
//             >
//               {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
//             </IconButton>
//           </div>

//           {/* UNIQUE ANIMATED HAMBURGER */}
//           <motion.div whileTap={{ scale: 0.9 }}>
//             <IconButton className="hamburger-btn d-lg-none" onClick={() => setIsDrawerOpen(true)}>
//               <MenuRoundedIcon />
//             </IconButton>
//           </motion.div>
//         </div>
//       </Toolbar>

//       {/* MOBILE DRAWER */}

//       {/* --- MOBILE DRAWER INSIDE HEADER --- */}
//       <Drawer
//         anchor="right"
//         open={isDrawerOpen}
//         onClose={() => setIsDrawerOpen(false)}
//         PaperProps={{ className: "mobile-drawer-paper" }}
//       >
//         {/* Drawer Header with Centered Logo */}
//         <div className="drawer-branding-area">
//           <IconButton onClick={() => setIsDrawerOpen(false)} className="drawer-close-icon">
//             <CloseIcon />
//           </IconButton>

//           <div className="drawer-logo-container">
//             <div className="mini-logo-box">SP</div>
//             <h3 className="drawer-logo-title">SP IRON & STEEL</h3>
//             <p className="drawer-logo-subtitle">STRENGTH & RELIABILITY</p>
//           </div>
//         </div>

//         <List className="drawer-nav-list">
//           {navLinks.map((link) => (
//             <ListItem key={link.title} disablePadding>
//               <ListItemButton
//                 component={Link}
//                 to={link.path}
//                 onClick={() => setIsDrawerOpen(false)}
//                 className="drawer-nav-btn" // Aa class CSS mate jaruri chhe
//               >
//                 <ListItemText primary={link.title} className="drawer-nav-text" />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </AppBar>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, IconButton, InputBase, Box, Drawer, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Collapse } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';
// import SearchIcon from '@mui/icons-material/Search';
// import CloseIcon from '@mui/icons-material/Close';
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import { useProductContext } from '../context/ProductContext'; // Context mathi data leva mate
// import './Header.css';

// const Header = () => {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [mobileProductsOpen, setMobileProductsOpen] = useState(false); // Mobile dropdown mate
//   const [anchorEl, setAnchorEl] = useState(null); // Desktop dropdown mate

//   const { searchTerm, setSearchTerm } = useProductContext();

//   // Desktop Dropdown handlers
//   const handleOpenDropdown = (event) => setAnchorEl(event.currentTarget);
//   const handleCloseDropdown = () => setAnchorEl(null);

//   // Nav Links (Products ne ahiya thi kadhi ne niche manually handle karyu che)
//   const navLinks = [
//     { title: 'Home', path: '/' },
//     { title: 'About', path: '/about' },
//     { title: 'Services', path: '/services' },
//     { title: 'Projects', path: '/projects' },
//     { title: 'Contact', path: '/contact' },
//   ];

//   // New Categories
//   const productCategories = [
//     { title: 'TMT Steel Bars', path: '/products/tmt' },
//     { title: 'MS Plates', path: '/products/plates' },
//     { title: 'GI Pipes', path: '/products/pipes' },
//     { title: 'Stainless Steel Coils', path: '/products/stainless-steel-coils' },
//     { title: 'Steel Sheets', path: '/products/sheets' },
//     { title: 'Beams & Columns', path: '/products/beams-columns' }

//   ];

//   return (
//     <AppBar position="sticky" className="premium-header">
//       <Toolbar className="container d-flex justify-content-between align-items-center">

//         {/* LOGO */}
//         <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
//           <Link to="/" className="main-logo">
//             <div className="logo-box">SP</div>
//             <div className="logo-text d-none d-sm-flex">
//               <span className="brand-name">IRON & STEEL</span>
//               <span className="brand-tagline">STRENGTH REDEFINED</span>
//             </div>
//           </Link>
//         </motion.div>

//         {/* DESKTOP NAV */}
//         <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: '1.5rem', alignItems: 'center' }}>
//           <Link to="/" className="nav-item-link">Home</Link>
//           <Link to="/about" className="nav-item-link">About</Link>

//           {/* PRODUCTS DROPDOWN DESKTOP */}
//           <div onMouseEnter={handleOpenDropdown} onMouseLeave={handleCloseDropdown} className="dropdown-wrapper">
//             <span className="nav-item-link products-nav">
//               Products <KeyboardArrowDownIcon sx={{ fontSize: '1rem' }} />
//             </span>
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleCloseDropdown}
//               className="desktop-product-menu"
//               disableScrollLock
//               MenuListProps={{ onMouseLeave: handleCloseDropdown }}
//             >
//               {productCategories.map((cat) => (
//                 <MenuItem key={cat.title} component={Link} to={cat.path} onClick={handleCloseDropdown}>
//                   {cat.title}
//                 </MenuItem>
//               ))}
//               <hr />
//               <MenuItem component={Link} to="/products" onClick={handleCloseDropdown} sx={{fontWeight: 'bold'}}>View All</MenuItem>
//             </Menu>
//           </div>

//           <Link to="/services" className="nav-item-link">Services</Link>
//           <Link to="/projects" className="nav-item-link">Projects</Link>
//           <Link to="/contact" className="nav-item-link">Contact</Link>
//         </Box>

//         {/* ACTIONS SECTION */}
//         <div className="d-flex align-items-center gap-3">
//           <div className="search-box-wrapper">
//             <AnimatePresence>
//               {isSearchOpen && (
//                 <motion.div initial={{ width: 0, opacity: 0 }} animate={{ width: 220, opacity: 1 }} exit={{ width: 0, opacity: 0 }} className="animated-search-input">
//                   <InputBase 
//                     placeholder="Search steel..." 
//                     fullWidth autoFocus 
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//             <IconButton onClick={() => setIsSearchOpen(!isSearchOpen)} className={`search-toggle-btn ${isSearchOpen ? 'active' : ''}`}>
//               {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
//             </IconButton>
//           </div>

//           <motion.div whileTap={{ scale: 0.9 }}>
//             <IconButton className="hamburger-btn d-lg-none" onClick={() => setIsDrawerOpen(true)}>
//               <MenuRoundedIcon />
//             </IconButton>
//           </motion.div>
//         </div>
//       </Toolbar>

//       {/* MOBILE DRAWER */}
//       <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} PaperProps={{ className: "mobile-drawer-paper" }}>
//         <div className="drawer-branding-area">
//           <IconButton onClick={() => setIsDrawerOpen(false)} className="drawer-close-icon"><CloseIcon /></IconButton>
//           <div className="drawer-logo-container">
//             <div className="mini-logo-box">SP</div>
//             <h3 className="drawer-logo-title">SP IRON & STEEL</h3>
//           </div>
//         </div>

//         <List className="drawer-nav-list">
//           <ListItem disablePadding><ListItemButton component={Link} to="/" onClick={() => setIsDrawerOpen(false)} className="drawer-nav-btn"><ListItemText primary="Home" /></ListItemButton></ListItem>

//           {/* MOBILE PRODUCTS DROPDOWN (Accordion) */}
//           <ListItem disablePadding sx={{ display: 'block' }}>
//             <ListItemButton onClick={() => setMobileProductsOpen(!mobileProductsOpen)} className="drawer-nav-btn">
//               <ListItemText primary="Products" />
//               {mobileProductsOpen ? <ExpandLess /> : <ExpandMore />}
//             </ListItemButton>
//             <Collapse in={mobileProductsOpen} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding sx={{ bgcolor: '#f9f9f9' }}>
//                 {productCategories.map((cat) => (
//                   <ListItemButton key={cat.title} component={Link} to={cat.path} onClick={() => setIsDrawerOpen(false)} sx={{ pl: 4 }}>
//                     <ListItemText primary={cat.title} />
//                   </ListItemButton>
//                 ))}
//               </List>
//             </Collapse>
//           </ListItem>

//           {/* OTHER LINKS */}
//           {['About', 'Services', 'Projects', 'Contact'].map((item) => (
//             <ListItem key={item} disablePadding>
//               <ListItemButton component={Link} to={`/${item.toLowerCase()}`} onClick={() => setIsDrawerOpen(false)} className="drawer-nav-btn">
//                 <ListItemText primary={item} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </AppBar>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, IconButton, Box, Drawer, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Collapse } from '@mui/material';
// import { motion } from 'framer-motion';
// import CloseIcon from '@mui/icons-material/Close';
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import './Header.css';

// const Header = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);

//   // Desktop Dropdown handlers
//   const handleOpenDropdown = (event) => setAnchorEl(event.currentTarget);
//   const handleCloseDropdown = () => setAnchorEl(null);

//   // Categories
//   const productCategories = [
//     { title: 'TMT Steel Bars', path: '/products/tmt' },
//     { title: 'MS Plates', path: '/products/plates' },
//     { title: 'GI Pipes', path: '/products/pipes' },
//     { title: 'Stainless Steel Coils', path: '/products/stainless-steel-coils' },
//     { title: 'Steel Sheets', path: '/products/sheets' },
//     { title: 'Beams & Columns', path: '/products/beams-columns' }
//   ];

//   return (
//     <AppBar position="sticky" className="premium-header">
//       <Toolbar className="container d-flex justify-content-between align-items-center">

//         {/* LOGO */}
//         <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
//           <Link to="/" className="main-logo">
//             <div className="logo-box">SP</div>
//             <div className="logo-text d-none d-sm-flex">
//               <span className="brand-name">IRON & STEEL</span>
//               <span className="brand-tagline">STRENGTH REDEFINED</span>
//             </div>
//           </Link>
//         </motion.div>

//         {/* DESKTOP NAV */}
//         <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: '1.5rem', alignItems: 'center' }}>
//           <Link to="/" className="nav-item-link">Home</Link>
//           <Link to="/about" className="nav-item-link">About</Link>

//           {/* PRODUCTS DROPDOWN DESKTOP */}
//           <div onMouseEnter={handleOpenDropdown} onMouseLeave={handleCloseDropdown} className="dropdown-wrapper">
//             <span className="nav-item-link products-nav">
//               Products <KeyboardArrowDownIcon sx={{ fontSize: '1rem' }} />
//             </span>
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleCloseDropdown}
//               className="desktop-product-menu"
//               disableScrollLock
//               MenuListProps={{ onMouseLeave: handleCloseDropdown }}
//             >
//               {productCategories.map((cat) => (
//                 <MenuItem key={cat.title} component={Link} to={cat.path} onClick={handleCloseDropdown}>
//                   {cat.title}
//                 </MenuItem>
//               ))}
//               <hr />
//               <MenuItem component={Link} to="/products" onClick={handleCloseDropdown} sx={{fontWeight: 'bold'}}>View All</MenuItem>
//             </Menu>
//           </div>

//           <Link to="/services" className="nav-item-link">Services</Link>
//           <Link to="/projects" className="nav-item-link">Projects</Link>
//           <Link to="/contact" className="nav-item-link">Contact</Link>
//         </Box>

//         {/* ACTIONS SECTION (Only Hamburger now) */}
//         <div className="d-flex align-items-center">
//           <motion.div whileTap={{ scale: 0.9 }}>
//             <IconButton className="hamburger-btn d-lg-none" onClick={() => setIsDrawerOpen(true)}>
//               <MenuRoundedIcon />
//             </IconButton>
//           </motion.div>
//         </div>
//       </Toolbar>

//       {/* MOBILE DRAWER */}
//       <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} PaperProps={{ className: "mobile-drawer-paper" }}>
//         <div className="drawer-branding-area">
//           <IconButton onClick={() => setIsDrawerOpen(false)} className="drawer-close-icon"><CloseIcon /></IconButton>
//           <div className="drawer-logo-container">
//             <div className="mini-logo-box">SP</div>
//             <h3 className="drawer-logo-title">SP IRON & STEEL</h3>
//           </div>
//         </div>

//         <List className="drawer-nav-list">
//           <ListItem disablePadding><ListItemButton component={Link} to="/" onClick={() => setIsDrawerOpen(false)} className="drawer-nav-btn"><ListItemText primary="Home" /></ListItemButton></ListItem>

//           <ListItem disablePadding sx={{ display: 'block' }}>
//             <ListItemButton onClick={() => setMobileProductsOpen(!mobileProductsOpen)} className="drawer-nav-btn">
//               <ListItemText primary="Products" />
//               {mobileProductsOpen ? <ExpandLess /> : <ExpandMore />}
//             </ListItemButton>
//             <Collapse in={mobileProductsOpen} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding sx={{ bgcolor: '#f9f9f9' }}>
//                 {productCategories.map((cat) => (
//                   <ListItemButton key={cat.title} component={Link} to={cat.path} onClick={() => setIsDrawerOpen(false)} sx={{ pl: 4 }}>
//                     <ListItemText primary={cat.title} />
//                   </ListItemButton>
//                 ))}
//               </List>
//             </Collapse>
//           </ListItem>

//           {['About', 'Services', 'Projects', 'Contact'].map((item) => (
//             <ListItem key={item} disablePadding>
//               <ListItemButton component={Link} to={`/${item.toLowerCase()}`} onClick={() => setIsDrawerOpen(false)} className="drawer-nav-btn">
//                 <ListItemText primary={item} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </AppBar>
//   );
// };

// export default Header;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, IconButton, Box, Drawer, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Collapse, Button } from '@mui/material';
// import { motion } from 'framer-motion';
// import CloseIcon from '@mui/icons-material/Close';
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import LoginIcon from '@mui/icons-material/Login';
// import './Header.css';

// const Header = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);

//   // Desktop Dropdown handlers
//   const handleOpenDropdown = (event) => setAnchorEl(event.currentTarget);
//   const handleCloseDropdown = () => setAnchorEl(null);

//   // Product Categories
//   const productCategories = [
//     { title: 'TMT Steel Bars', path: '/products/tmt' },
//     { title: 'MS Plates', path: '/products/plates' },
//     { title: 'GI Pipes', path: '/products/pipes' },
//     { title: 'Stainless Steel Coils', path: '/products/stainless-steel-coils' },
//     { title: 'Steel Sheets', path: '/products/sheets' },
//     { title: 'Beams & Columns', path: '/products/beams-columns' }
//   ];

//   return (
//     <AppBar position="sticky" className="premium-header">
//       <Toolbar className="header-container">

//         {/* 1. LOGO (LEFT) */}
//         <motion.div 
//           initial={{ x: -20, opacity: 0 }} 
//           animate={{ x: 0, opacity: 1 }} 
//           transition={{ duration: 0.5 }}
//         >
//           <Link to="/" className="main-logo">
//             <div className="logo-box">SP</div>
//             <div className="logo-text d-none d-sm-flex">
//               <span className="brand-name">IRON & STEEL</span>
//               <span className="brand-tagline">STRENGTH REDEFINED</span>
//             </div>
//           </Link>
//         </motion.div>

//         {/* 2. DESKTOP NAV (MIDDLE) */}
//         <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: '2rem', ml: 5, alignItems: 'center' }}>
//           <Link to="/" className="nav-item-link">Home</Link>
//           <Link to="/about" className="nav-item-link">About</Link>

//           <div onMouseEnter={handleOpenDropdown} onMouseLeave={handleCloseDropdown} className="dropdown-wrapper">
//             <span className="nav-item-link products-nav">
//               Products <KeyboardArrowDownIcon sx={{ fontSize: '1rem' }} />
//             </span>
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleCloseDropdown}
//               className="desktop-product-menu"
//               disableScrollLock
//               MenuListProps={{ onMouseLeave: handleCloseDropdown }}
//               sx={{ mt: '10px' }}
//             >
//               {productCategories.map((cat) => (
//                 <MenuItem key={cat.title} component={Link} to={cat.path} onClick={handleCloseDropdown}>
//                   {cat.title}
//                 </MenuItem>
//               ))}
//               <hr className="dropdown-divider" />
//               <MenuItem component={Link} to="/products" onClick={handleCloseDropdown} sx={{fontWeight: 'bold', color: '#1a237e'}}>View All</MenuItem>
//             </Menu>
//           </div>

//           <Link to="/services" className="nav-item-link">Services</Link>
//           <Link to="/projects" className="nav-item-link">Projects</Link>
//           <Link to="/contact" className="nav-item-link">Contact</Link>
//         </Box>

//         {/* SPACE FILLER (PUSHES ACTIONS TO RIGHT) */}
//         <Box sx={{ flexGrow: 1 }} />

//         {/* 3. RIGHT SIDE ACTIONS (LOGIN & MOBILE MENU) */}
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

//           {/* DESIGNER LOGIN BUTTON */}
//           <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button 
//                 component={Link} 
//                 to="/login" 
//                 variant="contained" 
//                 className="premium-login-btn"
//                 startIcon={<LoginIcon />}
//               >
//                 Login
//               </Button>
//             </motion.div>
//           </Box>

//           {/* HAMBURGER BUTTON (MOBILE ONLY) */}
//           <IconButton 
//             className="hamburger-btn d-lg-none" 
//             onClick={() => setIsDrawerOpen(true)}
//             sx={{ color: '#1a237e' }}
//           >
//             <MenuRoundedIcon fontSize="large" />
//           </IconButton>
//         </Box>

//       </Toolbar>

//       {/* MOBILE DRAWER */}
//       <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} PaperProps={{ className: "mobile-drawer-paper" }}>
//         <div className="drawer-branding-area">
//           <IconButton onClick={() => setIsDrawerOpen(false)} className="drawer-close-icon"><CloseIcon /></IconButton>
//           <div className="drawer-logo-container">
//             <div className="mini-logo-box">SP</div>
//             <h3 className="drawer-logo-title">SP IRON & STEEL</h3>
//           </div>
//         </div>

//         <List className="drawer-nav-list">
//           <ListItem disablePadding><ListItemButton component={Link} to="/" onClick={() => setIsDrawerOpen(false)} className="drawer-nav-btn"><ListItemText primary="Home" /></ListItemButton></ListItem>

//           <ListItem disablePadding sx={{ display: 'block' }}>
//             <ListItemButton onClick={() => setMobileProductsOpen(!mobileProductsOpen)} className="drawer-nav-btn">
//               <ListItemText primary="Products" />
//               {mobileProductsOpen ? <ExpandLess /> : <ExpandMore />}
//             </ListItemButton>
//             <Collapse in={mobileProductsOpen} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding sx={{ bgcolor: '#f5f5f5' }}>
//                 {productCategories.map((cat) => (
//                   <ListItemButton key={cat.title} component={Link} to={cat.path} onClick={() => setIsDrawerOpen(false)} sx={{ pl: 4 }}>
//                     <ListItemText primary={cat.title} />
//                   </ListItemButton>
//                 ))}
//               </List>
//             </Collapse>
//           </ListItem>

//           {['About', 'Services', 'Projects', 'Contact'].map((item) => (
//             <ListItem key={item} disablePadding>
//               <ListItemButton component={Link} to={`/${item.toLowerCase()}`} onClick={() => setIsDrawerOpen(false)} className="drawer-nav-btn">
//                 <ListItemText primary={item} />
//               </ListItemButton>
//             </ListItem>
//           ))}

//           <Box sx={{ p: 2, mt: 'auto' }}>
//             <Button 
//               component={Link} 
//               to="/login" 
//               fullWidth 
//               variant="contained" 
//               className="premium-login-btn"
//               onClick={() => setIsDrawerOpen(false)}
//               startIcon={<LoginIcon />}
//             >
//               Login
//             </Button>
//           </Box>
//         </List>
//       </Drawer>
//     </AppBar>
//   );
// };

// export default Header;

// "build": "react-scripts build",

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, IconButton, Box, Drawer, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Collapse, Button } from '@mui/material';
// import { motion } from 'framer-motion';
// import CloseIcon from '@mui/icons-material/Close';
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import LoginIcon from '@mui/icons-material/Login';
// import './Header.css';

// const Header = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleOpenDropdown = (event) => setAnchorEl(event.currentTarget);
//   const handleCloseDropdown = () => setAnchorEl(null);

//   const productCategories = [
//     { title: 'TMT Steel Bars', path: '/products/tmt' },
//     { title: 'MS Plates', path: '/products/plates' },
//     { title: 'GI Pipes', path: '/products/pipes' },
//     { title: 'Stainless Steel Coils', path: '/products/stainless-steel-coils' },
//     { title: 'Steel Sheets', path: '/products/sheets' },
//     { title: 'Beams & Columns', path: '/products/beams-columns' }
//   ];

//   return (
//     <AppBar position="sticky" className="premium-header">
//       <Toolbar className="header-container">

//         {/* LOGO (STAYS ON THE LEFT) */}
//         <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
//           <Link to="/" className="main-logo">
//             <div className="logo-box">SP</div>
//             <div className="logo-text d-none d-sm-flex">
//               <span className="brand-name">IRON & STEEL</span>
//               <span className="brand-tagline">STRENGTH REDEFINED</span>
//             </div>
//           </Link>
//         </motion.div>

//         {/* THIS BOX PUSHES EVERYTHING AFTER IT TO THE RIGHT */}
//         <Box sx={{ flexGrow: 1 }} />

//         {/* RIGHT SIDE SECTION (NAV LINKS + LOGIN BUTTON) */}
//         <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: '1.8rem', alignItems: 'center' }}>
//           <Link to="/" className="nav-item-link">Home</Link>
//           <Link to="/about" className="nav-item-link">About</Link>

//           {/* PRODUCTS DROPDOWN */}
//           <div onMouseEnter={handleOpenDropdown} onMouseLeave={handleCloseDropdown} className="dropdown-wrapper">
//             <span className="nav-item-link products-nav">
//               Products <KeyboardArrowDownIcon sx={{ fontSize: '1rem' }} />
//             </span>
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleCloseDropdown}
//               disableScrollLock
//               className="desktop-product-menu"
//               MenuListProps={{ onMouseLeave: handleCloseDropdown }}
//               sx={{ mt: '10px' }}
//             >
//               {productCategories.map((cat) => (
//                 <MenuItem key={cat.title} component={Link} to={cat.path} onClick={handleCloseDropdown}>
//                   {cat.title}
//                 </MenuItem>
//               ))}
//             </Menu>
//           </div>

//           <Link to="/services" className="nav-item-link">Services</Link>
//           <Link to="/projects" className="nav-item-link">Projects</Link>
//           <Link to="/contact" className="nav-item-link">Contact</Link>

//           {/* LOGIN BUTTON (NEXT TO NAV) */}
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button 
//               component={Link} 
//               to="/login" 
//               variant="contained" 
//               className="premium-login-btn"
//               startIcon={<LoginIcon />}
//             >
//               Login
//             </Button>
//           </motion.div>
//         </Box>

//         {/* MOBILE HAMBURGER (ONLY ON SMALL SCREENS) */}
//         <IconButton 
//           className="hamburger-btn d-lg-none" 
//           onClick={() => setIsDrawerOpen(true)}
//           sx={{ color: '#1a237e' }}
//         >
//           <MenuRoundedIcon fontSize="large" />
//         </IconButton>

//       </Toolbar>

//       {/* MOBILE DRAWER (SAME AS BEFORE) */}
//       {/* <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} PaperProps={{ className: "mobile-drawer-paper" }}>
//         <div className="drawer-branding-area">
//           <IconButton onClick={() => setIsDrawerOpen(false)} className="drawer-close-icon"><CloseIcon /></IconButton>
//           <div className="drawer-logo-container">
//             <div className="mini-logo-box">SP</div>
//             <h3 className="drawer-logo-title">SP IRON & STEEL</h3>
//           </div>
//         </div>
//         <List className="drawer-nav-list">
//           <ListItem disablePadding><ListItemButton component={Link} to="/" onClick={() => setIsDrawerOpen(false)} className="drawer-nav-btn"><ListItemText primary="Home" /></ListItemButton></ListItem>


//           <Box sx={{ p: 2 }}>
//             <Button component={Link} to="/login" fullWidth variant="contained" className="premium-login-btn" onClick={() => setIsDrawerOpen(false)}>Login</Button>
//           </Box>
//         </List>
//       </Drawer> */}

//       <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} PaperProps={{ className: "mobile-drawer-paper" }}>
//          <div className="drawer-branding-area">
//            <IconButton onClick={() => setIsDrawerOpen(false)} className="drawer-close-icon"><CloseIcon /></IconButton>
//            <div className="drawer-logo-container">
//              <div className="mini-logo-box">SP</div>
//              <h3 className="drawer-logo-title">SP IRON & STEEL</h3>
//            </div>
//          </div>

//          <List className="drawer-nav-list">
//            <ListItem disablePadding><ListItemButton component={Link} to="/" onClick={() => setIsDrawerOpen(false)} className="drawer-nav-btn"><ListItemText primary="Home" /></ListItemButton></ListItem>
//            <ListItem disablePadding><ListItemButton component={Link} to="/about" onClick={() => setIsDrawerOpen(false)} className="drawer-nav-btn"><ListItemText primary="About" /></ListItemButton></ListItem>

//            <ListItem disablePadding sx={{ display: 'block' }}>
//              <ListItemButton onClick={() => setMobileProductsOpen(!mobileProductsOpen)} className="drawer-nav-btn">
//                <ListItemText primary="Products" />
//                {mobileProductsOpen ? <ExpandLess /> : <ExpandMore />}
//              </ListItemButton>
//              <Collapse in={mobileProductsOpen} timeout="auto" unmountOnExit>
//                <List component="div" disablePadding sx={{ bgcolor: '#f5f5f5' }}>
//                  {productCategories.map((cat) => (
//                    <ListItemButton key={cat.title} component={Link} to={cat.path} onClick={() => setIsDrawerOpen(false)} sx={{ pl: 4 }}>
//                      <ListItemText primary={cat.title} />
//                    </ListItemButton>
//                  ))}
//                </List>
//              </Collapse>
//            </ListItem>
//            {['Services', 'Projects', 'Contact'].map((item) => (
//              <ListItem key={item} disablePadding>
//                <ListItemButton component={Link} to={`/${item.toLowerCase()}`} onClick={() => setIsDrawerOpen(false)} className="drawer-nav-btn">
//                  <ListItemText primary={item} />
//                </ListItemButton>
//              </ListItem>
//            ))}

//            <Box sx={{ p: 2, mt: 'auto' }}>
//              <Button 
//                component={Link} 
//                to="/login" 
//                fullWidth 
//                variant="contained" 
//                className="premium-login-btn"
//                onClick={() => setIsDrawerOpen(false)}
//                startIcon={<LoginIcon />}
//              >
//                Login
//              </Button>
//            </Box>
//          </List>
//        </Drawer>
//     </AppBar>
//   );
// };

// export default Header;


// import React, { useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Menu,
//   MenuItem,
//   Collapse,
//   Button
// } from '@mui/material';

// import { motion } from 'framer-motion';

// import CloseIcon from '@mui/icons-material/Close';
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import LoginIcon from '@mui/icons-material/Login';

// import './Header.css';

// const Header = () => {

//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);

//   // ✅ important for smooth hover
//   const closeTimer = useRef(null);

//   const handleOpenDropdown = (event) => {
//     if (closeTimer.current) {
//       clearTimeout(closeTimer.current);
//     }
//     setAnchorEl(event.currentTarget);
//   };

//   const handleCloseDropdown = () => {
//     closeTimer.current = setTimeout(() => {
//       setAnchorEl(null);
//     }, 200);
//   };

//   const handleMenuEnter = () => {
//     if (closeTimer.current) {
//       clearTimeout(closeTimer.current);
//     }
//   };

//   const productCategories = [
//     { title: 'TMT Steel Bars', path: '/products/tmt' },
//     { title: 'MS Plates', path: '/products/plates' },
//     { title: 'GI Pipes', path: '/products/pipes' },
//     { title: 'Stainless Steel Coils', path: '/products/stainless-steel-coils' },
//     { title: 'Steel Sheets', path: '/products/sheets' },
//     { title: 'Beams & Columns', path: '/products/beams-columns' }
//   ];

//   return (

//     <AppBar position="sticky" className="premium-header">

//       <Toolbar className="header-container">

//         {/* LOGO */}
//         <motion.div
//           initial={{ x: -20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Link to="/" className="main-logo">
//             <div className="logo-box">SP</div>

//             <div className="logo-text d-none d-sm-flex">
//               <span className="brand-name">IRON & STEEL</span>
//               <span className="brand-tagline">STRENGTH REDEFINED</span>
//             </div>

//           </Link>
//         </motion.div>

//         <Box sx={{ flexGrow: 1 }} />

//         {/* DESKTOP NAV */}
//         <Box
//           sx={{
//             display: { xs: 'none', lg: 'flex' },
//             gap: '1.8rem',
//             alignItems: 'center'
//           }}
//         >

//           <Link to="/" className="nav-item-link">Home</Link>

//           <Link to="/about" className="nav-item-link">About</Link>


//           {/* ✅ FIXED PRODUCTS DROPDOWN */}
//           <div
//             className="dropdown-wrapper"
//             onMouseEnter={handleOpenDropdown}
//             onMouseLeave={handleCloseDropdown}
//           >

//             <span className="nav-item-link products-nav">

//               Products

//               <KeyboardArrowDownIcon sx={{ fontSize: '1rem' }} />

//             </span>

//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleCloseDropdown}

//               disableScrollLock

//               className="desktop-product-menu"

//               MenuListProps={{
//                 onMouseEnter: handleMenuEnter,
//                 onMouseLeave: handleCloseDropdown
//               }}

//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left'
//               }}

//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left'
//               }}

//               PaperProps={{
//                 sx: {
//                   mt: 1,
//                   borderRadius: 2,
//                   minWidth: 220
//                 }
//               }}
//             >

//               {productCategories.map((cat) => (

//                 <MenuItem
//                   key={cat.title}
//                   component={Link}
//                   to={cat.path}
//                   onClick={() => setAnchorEl(null)}
//                 >
//                   {cat.title}
//                 </MenuItem>

//               ))}

//             </Menu>

//           </div>


//           <Link to="/services" className="nav-item-link">Services</Link>

//           <Link to="/projects" className="nav-item-link">Projects</Link>

//           <Link to="/contact" className="nav-item-link">Contact</Link>


//           {/* LOGIN BUTTON */}
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>

//             <Button
//               component={Link}
//               to="/login"
//               variant="contained"
//               className="premium-login-btn"
//               startIcon={<LoginIcon />}
//             >
//               Login
//             </Button>

//           </motion.div>

//         </Box>


//         {/* MOBILE HAMBURGER */}
//         <IconButton
//           className="hamburger-btn d-lg-none"
//           onClick={() => setIsDrawerOpen(true)}
//           sx={{ color: '#1a237e' }}
//         >

//           <MenuRoundedIcon fontSize="large" />

//         </IconButton>

//       </Toolbar>


//       {/* MOBILE DRAWER */}
//       <Drawer
//         anchor="right"
//         open={isDrawerOpen}
//         onClose={() => setIsDrawerOpen(false)}
//         PaperProps={{ className: "mobile-drawer-paper" }}
//       >

//         <div className="drawer-branding-area">

//           <IconButton
//             onClick={() => setIsDrawerOpen(false)}
//             className="drawer-close-icon"
//           >
//             <CloseIcon />
//           </IconButton>

//           <div className="drawer-logo-container">
//             <div className="mini-logo-box">SP</div>
//             <h3 className="drawer-logo-title">SP IRON & STEEL</h3>
//           </div>

//         </div>


//         <List className="drawer-nav-list">

//           <ListItem disablePadding>
//             <ListItemButton
//               component={Link}
//               to="/"
//               onClick={() => setIsDrawerOpen(false)}
//               className="drawer-nav-btn"
//             >
//               <ListItemText primary="Home" />
//             </ListItemButton>
//           </ListItem>


//           {/* MOBILE PRODUCTS */}
//           <ListItem disablePadding sx={{ display: 'block' }}>

//             <ListItemButton
//               onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
//               className="drawer-nav-btn"
//             >

//               <ListItemText primary="Products" />

//               {mobileProductsOpen ? <ExpandLess /> : <ExpandMore />}

//             </ListItemButton>

//             <Collapse in={mobileProductsOpen} timeout="auto">

//               <List>

//                 {productCategories.map((cat) => (

//                   <ListItemButton
//                     key={cat.title}
//                     component={Link}
//                     to={cat.path}
//                     onClick={() => setIsDrawerOpen(false)}
//                     sx={{ pl: 4 }}
//                   >
//                     <ListItemText primary={cat.title} />
//                   </ListItemButton>

//                 ))}

//               </List>

//             </Collapse>

//           </ListItem>


//         </List>

//       </Drawer>

//     </AppBar>

//   );
// };

// export default Header;



import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Button
} from '@mui/material';

import { motion } from 'framer-motion';

import CloseIcon from '@mui/icons-material/Close';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LoginIcon from '@mui/icons-material/Login';

import './Header.css';

const Header = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  // Mega menu state
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleMegaOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const handleMegaClose = () => {
    closeTimer.current = setTimeout(() => {
      setMegaOpen(false);
    }, 200);
  };

  const handleInstantClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(false);
  };

  const productCategories = [
    { title: 'TMT Steel Bars', path: '/products/tmt' },
    { title: 'MS Plates', path: '/products/plates' },
    { title: 'GI Pipes', path: '/products/pipes' },
    { title: 'Stainless Steel Coils', path: '/products/stainless-steel-coils' },
    { title: 'Steel Sheets', path: '/products/sheets' },
    { title: 'Beams & Columns', path: '/products/beams-columns' }
  ];

  return (

    <AppBar position="sticky" className="premium-header">

      <Toolbar className="header-container">

        {/* LOGO */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
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
        <Box
          sx={{
            display: { xs: 'none', lg: 'flex' },
            gap: '1.8rem',
            alignItems: 'center',
            position: 'relative'
          }}
        >

          <Link to="/" className="nav-item-link" onMouseEnter={handleInstantClose}>
            Home
          </Link>

          <Link to="/about" className="nav-item-link" onMouseEnter={handleInstantClose}>
            About
          </Link>


          {/* MEGA MENU */}
          <div
            className="mega-wrapper"
            onMouseEnter={handleMegaOpen}
            onMouseLeave={handleMegaClose}
          >

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

                  <Link to="/products/sheets">Steel Sheets</Link>

                </Box>


                <Box className="mega-column">

                  <h4>Premium Steel</h4>

                  <Link to="/products/sheets">Cold Rolled Sheets</Link>

                  <Link to="/products/stainless-steel-coils">Stainless Steel</Link>

                </Box>

              </Box>

            )}

          </div>


          <Link to="/services" className="nav-item-link" onMouseEnter={handleInstantClose}>
            Services
          </Link>

          <Link to="/projects" className="nav-item-link" onMouseEnter={handleInstantClose}>
            Projects
          </Link>

          <Link to="/contact" className="nav-item-link" onMouseEnter={handleInstantClose}>
            Contact
          </Link>


          {/* LOGIN */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={handleInstantClose}
          >

            <Button
              component={Link}
              to="/login"
              variant="contained"
              className="premium-login-btn"
              startIcon={<LoginIcon />}
            >
              Login
            </Button>

          </motion.div>

        </Box>


        {/* MOBILE MENU BUTTON */}
        <IconButton
          className="hamburger-btn d-lg-none"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuRoundedIcon />
        </IconButton>

      </Toolbar>


      {/* MOBILE DRAWER */}
      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >

        <Box sx={{ width: 280 }}>

          {/* MOBILE HEADER (LOGO + CLOSE) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px",
              borderBottom: "1px solid #eee"
            }}
          >
            {/* LOGO */}
            <Link
              to="/"
              className="main-logo"
              onClick={() => setIsDrawerOpen(false)}
            >
              <div className="logo-box">SP</div>

              <div className="logo-text">
                <span className="brand-name">IRON & STEEL</span>
                <span className="brand-tagline">STRENGTH REDEFINED</span>
              </div>
            </Link>

            {/* CLOSE BUTTON */}
            <IconButton onClick={() => setIsDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>


          {/* MENU LIST */}
          <List>

            {/* HOME */}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/"
                onClick={() => setIsDrawerOpen(false)}
              >
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>


            {/* ABOUT */}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/about"
                onClick={() => setIsDrawerOpen(false)}
              >
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>


            {/* PRODUCTS */}
            {/* <ListItem disablePadding>
              <ListItemButton
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              >
                <ListItemText primary="Products" />
                {mobileProductsOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            <Collapse in={mobileProductsOpen} timeout="auto" unmountOnExit>
              <List>

                {productCategories.map((cat) => (
                  <ListItemButton
                    key={cat.title}
                    component={Link}
                    to={cat.path}
                    onClick={() => setIsDrawerOpen(false)}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary={cat.title} />
                  </ListItemButton>
                ))}

              </List>
            </Collapse> */}

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


            {/* LOGIN BUTTON */}
            {/* <ListItem sx={{ padding: "16px" }}>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          fullWidth
          startIcon={<LoginIcon />}
          onClick={() => setIsDrawerOpen(false)}
        >
          Login
        </Button>
      </ListItem> */}
            {/* PREMIUM LOGIN BUTTON */}
            <ListItem sx={{ padding: "20px" }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ width: "100%" }}
              >
                <Button
                  component={Link}
                  to="/login"
                  fullWidth
                  startIcon={<LoginIcon />}
                  onClick={() => setIsDrawerOpen(false)}
                  sx={{
                    background: "linear-gradient(135deg, #0024a6, #00163e)",
                    color: "#fff",
                    padding: "12px 0",
                    borderRadius: "12px",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    textTransform: "none",
                    boxShadow: "0 8px 20px rgba(255,60,0,0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(135deg, #ff3c00, #ff6a00)",
                      boxShadow: "0 12px 25px rgba(255,60,0,0.4)",
                    },
                  }}
                >
                  Login
                </Button>
              </motion.div>
            </ListItem>


          </List>

        </Box>

      </Drawer>


    </AppBar>

  );
};

export default Header;

// import React from 'react';
// import { Box, Container, Grid, Typography, Stack, IconButton, Divider } from '@mui/material';
// import { Facebook, Instagram, LinkedIn, WhatsApp, LocationOn, Phone, Email } from '@mui/icons-material';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="proper-footer">
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
          
//           {/* Column 1: Brand & Social */}
//           <Grid item xs={12} md={4}>
//             <Typography variant="h5" className="footer-logo">
//               SP <span>IRON & STEEL</span>
//             </Typography>
//             <Typography variant="body2" className="footer-about">
//               Building the foundations of Gujarat with high-grade TMT bars and structural steel since 1998. Strength and trust are our core values.
//             </Typography>
//             <Stack direction="row" spacing={1} mt={2}>
//               <IconButton className="s-icon"><Facebook /></IconButton>
//               <IconButton className="s-icon"><Instagram /></IconButton>
//               <IconButton className="s-icon"><LinkedIn /></IconButton>
//               <IconButton className="s-icon"><WhatsApp /></IconButton>
//             </Stack>
//           </Grid>

//           {/* Column 2: Quick Links (Properly Aligned) */}
//           <Grid item xs={6} md={2}>
//             <Typography variant="subtitle1" className="footer-heading">Company</Typography>
//             <ul className="footer-link-list">
//               <li><a href="/">Home</a></li>
//               <li><a href="/about">About Us</a></li>
//               <li><a href="/services">Services</a></li>
//               <li><a href="/projects">Projects</a></li>
//               <li><a href="/contact">Contact</a></li>
//             </ul>
//           </Grid>

//           {/* Column 3: Products (Properly Aligned) */}
//           <Grid item xs={6} md={2}>
//             <Typography variant="subtitle1" className="footer-heading">Products</Typography>
//             <ul className="footer-link-list">
//               <li><a href="/tmt">TMT Bars</a></li>
//               <li><a href="/beams">MS Beams</a></li>
//               <li><a href="/pipes">MS Pipes</a></li>
//               <li><a href="/angles">MS Angles</a></li>
//             </ul>
//           </Grid>

//           {/* Column 4: Contact (Clean Look) */}
//           <Grid item xs={12} md={4}>
//             <Typography variant="subtitle1" className="footer-heading">Contact Us</Typography>
//             <Stack spacing={2} mt={1}>
//               <Box className="contact-row">
//                 <LocationOn className="c-icon" />
//                 <Typography variant="body2">Vatva GIDC, Phase-II, Ahmedabad, Gujarat.</Typography>
//               </Box>
//               <Box className="contact-row">
//                 <Phone className="c-icon" />
//                 <Typography variant="body2">+91 93286 49313</Typography>
//               </Box>
//               <Box className="contact-row">
//                 <Email className="c-icon" />
//                 <Typography variant="body2">info@spironsteel.com</Typography>
//               </Box>
//             </Stack>
//           </Grid>

//         </Grid>

//         <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.1)' }} />

//         {/* Bottom Bar */}
//         <Box className="footer-bottom">
//           <Typography variant="caption">© 2026 SP Iron & Steel Industries. All Rights Reserved.</Typography>
//           <Typography variant="caption" sx={{ opacity: 0.5 }}>Quality Guaranteed</Typography>
//         </Box>
//       </Container>
//     </footer>
//   );
// };

// // export default Footer;





// import React from 'react';
// import { Box, Container, Grid, Typography, Stack, IconButton, Divider } from '@mui/material';
// import { Facebook, Instagram, LinkedIn, WhatsApp, Phone, Email, LocationOn } from '@mui/icons-material';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="main-footer">
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
          
//           {/* Column 1: Brand & Bio */}
//           <Grid item xs={12} md={4}>
//             <Typography variant="h5" className="f-logo">
//               SP <span>STEEL</span>
//             </Typography>
//             <Typography variant="body2" className="f-about">
//               Leading the way in steel manufacturing and supply. 
//               Delivering high-performance structural steel since 1998.
//             </Typography>
//             <Stack direction="row" spacing={1} mt={2}>
//               <IconButton className="f-social-btn"><Facebook fontSize="small" /></IconButton>
//               <IconButton className="f-social-btn"><Instagram fontSize="small" /></IconButton>
//               <IconButton className="f-social-btn"><LinkedIn fontSize="small" /></IconButton>
//               <IconButton className="f-social-btn" onClick={() => window.open('https://wa.me/919328649313')}><WhatsApp fontSize="small" /></IconButton>
//             </Stack>
//           </Grid>

//           {/* Column 2: Quick Links */}
//           <Grid item xs={6} md={2}>
//             <Typography variant="subtitle1" className="f-heading">Navigation</Typography>
//             <ul className="f-link-list">
//               <li><a href="/">Home</a></li>
//               <li><a href="/products">Products</a></li>
//               <li><a href="/projects">Projects</a></li>
//               <li><a href="/contact">Contact</a></li>
//             </ul>
//           </Grid>

//           {/* Column 3: Products */}
//           <Grid item xs={6} md={2}>
//             <Typography variant="subtitle1" className="f-heading">Products</Typography>
//             <ul className="f-link-list">
//               <li><a href="/tmt">TMT Bars</a></li>
//               <li><a href="/beams">MS Beams</a></li>
//               <li><a href="/pipes">MS Pipes</a></li>
//               <li><a href="/angles">MS Angles</a></li>
//             </ul>
//           </Grid>

//           {/* Column 4: Contact Info */}
//           <Grid item xs={12} md={4}>
//             <Typography variant="subtitle1" className="f-heading">Contact Us</Typography>
//             <Stack spacing={2} mt={1}>
//               <Box className="f-contact-row">
//                 <LocationOn className="f-c-icon" />
//                 <Typography variant="body2">Vatva GIDC, Ahmedabad, Gujarat.</Typography>
//               </Box>
//               <Box className="f-contact-row">
//                 <Phone className="f-c-icon" />
//                 <Typography variant="body2">+91 93286 49313</Typography>
//               </Box>
//               <Box className="f-contact-row">
//                 <Email className="f-c-icon" />
//                 <Typography variant="body2">info@spironsteel.com</Typography>
//               </Box>
//             </Stack>
//           </Grid>

//         </Grid>

//         <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.05)' }} />

//         {/* Bottom Bar */}
//         <Box className="f-bottom">
//           <Typography variant="caption">© {new Date().getFullYear()} SP Iron & Steel Industries.</Typography>
//           <Typography variant="caption" className="f-legal">Built for Strength</Typography>
//         </Box>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Box, Container, Grid, Typography, Stack, IconButton } from '@mui/material';
import { Facebook, Instagram, LinkedIn, WhatsApp, Email, Phone, LocationOn } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="modern-four-col-footer">
      <Container maxWidth="lg">
        <Grid container spacing={0} className="footer-main-grid">
          
          {/* Column 1: Brand Identity */}
          <Grid item xs={12} sm={6} md={3} className="footer-col">
            <Box className="col-content">
              <Typography variant="h5" className="f-logo">
                SP <span>STEEL</span>
              </Typography>
              <Typography variant="body2" className="f-description">
                Forging strength into every structure with premium quality steel solutions since 1998.
              </Typography>
              <Stack direction="row" spacing={1} mt={2}>
                <IconButton className="mini-social-icon"><Facebook /></IconButton>
                <IconButton className="mini-social-icon"><Instagram /></IconButton>
                <IconButton className="mini-social-icon"><LinkedIn /></IconButton>
              </Stack>
            </Box>
          </Grid>

          {/* Column 2: Quick Navigation */}
          <Grid item xs={12} sm={6} md={3} className="footer-col">
            <Box className="col-content">
              <Typography className="f-col-title">Navigation</Typography>
              <nav className="f-nav-links">
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/projects">Our Projects</a>
                <a href="/contact">Contact</a>
              </nav>
            </Box>
          </Grid>

          {/* Column 3: Products Portfolio */}
          <Grid item xs={12} sm={6} md={3} className="footer-col">
            <Box className="col-content">
              <Typography className="f-col-title">Solutions</Typography>
              <nav className="f-nav-links">
                <a href="/tmt">TMT Reinforcement</a>
                <a href="/beams">Structural Beams</a>
                <a href="/pipes">Industrial Pipes</a>
                <a href="/roofing">Roofing Sheets</a>
              </nav>
            </Box>
          </Grid>

          {/* Column 4: Reach Us */}
          <Grid item xs={12} sm={6} md={3} className="footer-col no-border">
            <Box className="col-content">
              <Typography className="f-col-title">Get In Touch</Typography>
              <Stack spacing={1.5}>
                <Box className="contact-info-box">
                  <Phone className="yellow-icon" />
                  <Typography variant="body2">+91 93286 49313</Typography>
                </Box>
                <Box className="contact-info-box">
                  <Email className="yellow-icon" />
                  <Typography variant="body2">info@spironsteel.com</Typography>
                </Box>
                <Box className="contact-info-box">
                  <LocationOn className="yellow-icon" />
                  <Typography variant="body2">Vatva GIDC, Ahmedabad.</Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

        </Grid>

        {/* Bottom Strip */}
        <Box className="footer-bottom-strip">
          <Typography variant="caption">© 2026 SP Iron & Steel Industries. All Rights Reserved.</Typography>
          {/* <Typography variant="caption" className="wa-link" onClick={() => window.open('https://wa.me/919328649313')}>
            <WhatsApp sx={{fontSize: 14, mr: 0.5}} /> Chat on WhatsApp
          </Typography> */}
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
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
                <a href="/services">Services</a>
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
                <a href="/products/tmt">TMT Reinforcement</a>
                <a href="/products/beams-columns">Structural Beams & Columns</a>
                <a href="/products/plates">MS Plates</a>
                <a href="/products/pipes">GI Pipes</a>
                <a href="/products/stainless-steel-coils">SS Coils</a>
                <a href="/products/steelsheets">Steel Sheets</a>
                <a href="/products/sheets">Cold Rolled Sheets</a>
                <a href="/products/stainless-steel">Stainless Steel</a>
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
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
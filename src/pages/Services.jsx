import React from 'react';
import { Box, Container, Grid, Typography, Stack, Divider } from '@mui/material';
import '../styles/Services.css';

const services = [
  {
    id: "01",
    title: "Structural Steel Supply",
    desc: "Premium grade I-Beams, H-Beams, and Channels sourced for mega-infrastructure projects.",
    features: ["IS 2062 Grade", "High Tensile", "Custom Lengths"],
    icon: "🏗️"
  },
  {
    id: "02",
    title: "Precision Cutting & Sizing",
    desc: "Advanced CNC plasma and saw cutting for absolute dimensional accuracy as per blueprints.",
    features: ["Zero Tolerance", "Fast Turnaround", "Bulk Processing"],
    icon: "✂️"
  },
  {
    id: "03",
    title: "Just-In-Time Logistics",
    desc: "24/7 fleet management to ensure material reaches your site exactly when needed, zero downtime.",
    features: ["GPS Tracking", "Gujarat-wide", "Safety First"],
    icon: "🚚"
  },
  {
    id: "04",
    title: "Metallurgical Testing",
    desc: "Third-party and in-house chemical/mechanical testing reports for every batch supplied.",
    features: ["Lab Certified", "Chemical Analysis", "Stress Reports"],
    icon: "🔬"
  },
  {
    id: "05",
    title: "Custom Fabrication",
    desc: "In-house fabrication services for beams, columns, and trusses tailored to your project specs.",
    features: ["Welding", "Drilling", "Assembly"],
    icon: "⚙️"
  },
  {
    id: "06",
    title: "Technical Consultation",
    desc: "Expert advice on material selection, structural design, and cost optimization for your project.",
    features: ["Material Selection", "Design Optimization", "Cost Analysis"],
    icon: "🧠"
  }

];

const Services = () => {
  return (
    <Box className="services-page-root">
      {/* HERO SECTION */}
      <section className="services-hero">
        <Container maxWidth="lg">
          <Typography variant="overline" className="gold-text">OUR EXPERTISE</Typography>
          <Typography variant="h1" className="massive-heading">
            CORE <span>SOLUTIONS.</span>
          </Typography>
          <Typography variant="body1" className="hero-sub">
            Bridging the gap between raw industrial power and surgical engineering precision.
          </Typography>
        </Container>
      </section>

      {/* SERVICES GRID */}
      <section className="services-grid-section">
        <Container maxWidth="lg">
          <div className="modern-service-grid">
            {services.map((service) => (
              <Box key={service.id} className="service-glass-card">
                <div className="card-top">
                  <Typography variant="h4" className="service-id">{service.id}</Typography>
                  <span className="service-icon">{service.icon}</span>
                </div>

                <Typography variant="h5" className="service-title">{service.title}</Typography>
                <Typography variant="body2" className="service-desc">{service.desc}</Typography>

                <Divider sx={{ bgcolor: 'rgba(255,255,255,0.05)', my: 3 }} />

                <Stack spacing={1}>
                  {service.features.map((feat, i) => (
                    <div key={i} className="feat-chip">
                      <span className="dot"></span> {feat}
                    </div>
                  ))}
                </Stack>

                <div className="card-bg-glow"></div>
              </Box>
            ))}
          </div>
        </Container>
      </section>

      <section className="services-approach">
        <Container maxWidth="md">
          <Typography variant="h2" className="approach-heading">
            Our Approach: Precision Meets Power
          </Typography>
          <Typography variant="body1" className="approach-text">
            At SteelBeam Solutions, we blend cutting-edge technology with decades of industry expertise to deliver unparalleled service. From sourcing the highest quality steel to ensuring it arrives on your site just when you need it, our end-to-end solutions are designed to keep your project moving forward without a hitch.
          </Typography>
          {/* <Typography variant="body1" className="approach-text">
            Our team of engineers and logistics experts work closely with you to understand your project’s unique requirements, providing tailored recommendations that optimize both performance and cost. With a commitment to transparency, reliability, and excellence, we are your trusted partner in building the future.
          </Typography> */}
        </Container>
      </section>


      {/* NEW SECTION: SERVICE PROCESS (HOW WE WORK) */}
      <section className="service-process">
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" mb={8} className="unbounded-title">
            THE <span>WORKFLOW</span>
          </Typography>
          <Grid container spacing={4}>
            {[
              { step: "01", label: "Procurement", detail: "Sourcing high-grade ores & raw sections." },
              { step: "02", label: "Validation", detail: "Rigorous chemical & stress testing." },
              { step: "03", label: "Customization", detail: "Precision cutting and surface treatment." },
              { step: "04", label: "Dispatch", detail: "JIT logistics with real-time tracking." },
              { step: "05", label: "On-Site Support", detail: "Installation guidance and technical consultation." },
              // { step: "06", label: "Feedback Loop", detail: "Continuous improvement based on client feedback." }
            ].map((item, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box className="process-box">
                  <Typography variant="h2">{item.step}</Typography>
                  <Typography variant="h6">{item.label}</Typography>
                  <Typography variant="body2">{item.detail}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* CALL TO ACTION */}
      {/* <section className="service-cta">
        <Container maxWidth="md">
          <Box className="cta-box">
            <Typography variant="h4">Need a Custom Technical Quote?</Typography>
            <button className="gold-btn">Contact Engineers</button>
          </Box>
        </Container>
      </section> */}

      <section className="service-cta">
        <Container maxWidth="md">
          <Box className="cta-box">
            <Typography variant="h4" className="unbounded-title">
              Need a Custom Technical Quote?
            </Typography>

            {/* લિંક અહીં એડ કરી છે */}
            <a href="/contact" style={{ textDecoration: 'none' }}>
              <button className="gold-btn">Contact Engineers</button>
            </a>

          </Box>
        </Container>
      </section>
    </Box>
  );
};

export default Services;
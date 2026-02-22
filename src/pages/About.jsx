// import React from 'react';
// import { Box, Container, Grid, Typography, Divider } from '@mui/material';
// import '../styles/About.css';

// const About = () => {
//   return (
//     <Box className="about-ultra-root">
//       {/* FLOAT ELEMENTS */}
//       <div className="industrial-line"></div>

//       {/* HERO: THE BOLD STATEMENT */}
//       <section className="hero-split">
//         <Container maxWidth="xl">
//           <div className="hero-flex">
//             <div className="hero-main-text">
//               <Typography variant="h1" className="massive-title">
//                 STEEL <br/> <span>WITHOUT</span> <br/> LIMITS.
//               </Typography>
//             </div>
//             <div className="hero-sub-info">
//               <Divider sx={{ bgcolor: '#ffcc00', width: '60px', mb: 4, height: '4px' }} />
//               <Typography variant="h5">EST. 1998 — AHMEDABAD</Typography>
//               <Typography variant="body1">
//                 We provide the structural DNA for India's most complex engineering feats. 
//                 From the ground up, we forge reliability.
//               </Typography>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* SECTION 2: THE "GRID OF STRENGTH" */}
//       <section className="strength-grid">
//         <Container maxWidth="lg">
//           <Grid container spacing={0}>
//             <Grid item xs={12} md={6} className="image-panel">
//               <div className="textured-overlay"></div>
//               <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000" alt="Steel Production" />
//             </Grid>
//             <Grid item xs={12} md={6} className="text-panel">
//               <Typography variant="overline">01. CAPABILITY</Typography>
//               <Typography variant="h3">Massive Scale. <br/> Surgical Precision.</Typography>
//               <Typography variant="body1">
//                 With a permanent inventory of <strong>50,000 Metric Tons</strong>, we operate with a zero-delay mindset. Our Vatva GIDC hub is optimized for high-velocity dispatch, ensuring your site never waits for material.
//               </Typography>
//             </Grid>
//           </Grid>
//         </Container>
//       </section>

//       {/* SECTION 3: THE SPECIFICATION BAR */}
//       <section className="spec-ticker">
//         <div className="ticker-wrap">
//           <div className="ticker-move">
//             <span>IS 2062 GRADE STEEL • HIGH TENSILE STRENGTH • SEISMIC RESISTANT • 24/7 LOGISTICS • CERTIFIED QUALITY • </span>
//             <span>IS 2062 GRADE STEEL • HIGH TENSILE STRENGTH • SEISMIC RESISTANT • 24/7 LOGISTICS • CERTIFIED QUALITY • </span>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 4: THE PHILOSOPHY (Minimalist) */}
//       <section className="philosophy-section">
//         <Container maxWidth="md">
//           <div className="quote-wrap">
//             <Typography variant="h2">
//               "We don't just sell steel. We sell the peace of mind that your foundation will never falter."
//             </Typography>
//             <div className="author-line">
//               <Divider sx={{ bgcolor: '#333', flex: 1 }} />
//               <span>SP IRON & STEEL INDUSTRIES</span>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* SECTION 5: STATS AS ART */}
//       <section className="stats-art">
//         <Container maxWidth="lg">
//           <div className="art-grid">
//             <div className="art-item">
//               <Typography variant="h2">25</Typography>
//               <Typography variant="subtitle1">YEARS OF TRUST</Typography>
//             </div>
//             <div className="art-item middle">
//               <Typography variant="h2">150+</Typography>
//               <Typography variant="subtitle1">MAJOR PROJECTS</Typography>
//             </div>
//             <div className="art-item">
//               <Typography variant="h2">100%</Typography>
//               <Typography variant="subtitle1">BIS CERTIFIED</Typography>
//             </div>
//           </div>
//         </Container>
//       </section>
//     </Box>
//   );
// };

// export default About;

import React, { useEffect } from 'react';
import { Box, Container, Grid, Typography, Divider, Stack } from '@mui/material';
import '../styles/About.css';
import { useLocation } from 'react-router-dom';

const About = () => {

  const location = useLocation();

  useEffect(() => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });

  }, [location.pathname]);
  return (
    <Box className="about-ultra-root">
      {/* FLOAT ELEMENTS */}
      <div className="industrial-line"></div>

      {/* HERO: THE BOLD STATEMENT */}
      <section className="hero-split">
        <Container maxWidth="xl">
          <div className="hero-flex">
            <div className="hero-main-text">
              <Typography variant="h1" className="massive-title">
                STEEL <br /> <span>WITHOUT</span> <br /> LIMITS.
              </Typography>
            </div>
            <div className="hero-sub-info">
              <Divider sx={{ bgcolor: '#ffcc00', width: '60px', mb: 4, height: '4px' }} />
              <Typography variant="h5">EST. 1998 — AHMEDABAD</Typography>
              <Typography variant="body1">
                We provide the structural DNA for India's most complex engineering feats.
                As a premier house of structural steel, we specialize in high-tensile solutions
                that empower the nation's infrastructure—from the ground up, we forge reliability.
              </Typography>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: THE "GRID OF STRENGTH" */}
      <section className="strength-grid">
        <Container maxWidth="lg">
          <Grid container spacing={0}>
            <Grid item xs={12} md={6} className="image-panel">
              <div className="textured-overlay"></div>
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000" alt="Steel Production" />
            </Grid>
            <Grid item xs={12} md={6} className="text-panel">
              <Typography variant="overline">01. CAPABILITY & SCALE</Typography>
              <Typography variant="h3">Massive Scale. <br /> Surgical Precision.</Typography>
              <Typography variant="body1">
                With a permanent inventory of <strong>50,000 Metric Tons</strong>, we operate with a zero-delay mindset.
                Our Vatva GIDC hub is an automated logistics powerhouse optimized for high-velocity dispatch.
                Whether it is <strong>I-Beams, MS Channels, or Heavy Plates</strong>, we ensure your site never
                waits for material, maintaining a 99% on-time delivery rate across Western India.
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Typography variant="caption" sx={{ color: '#ffcc00', letterSpacing: 2, fontWeight: 'bold' }}>
                  STRATEGIC STORAGE • REAL-TIME TRACKING • 24/7 DISPATCH
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* SECTION 3: THE SPECIFICATION BAR */}
      <section className="spec-ticker">
        <div className="ticker-wrap">
          <div className="ticker-move">
            <span>IS 2062 GRADE STEEL • HIGH TENSILE STRENGTH • SEISMIC RESISTANT • 24/7 LOGISTICS • CERTIFIED QUALITY • ISO 9001:2015 COMPLIANT • </span>
            <span>IS 2062 GRADE STEEL • HIGH TENSILE STRENGTH • SEISMIC RESISTANT • 24/7 LOGISTICS • CERTIFIED QUALITY • ISO 9001:2015 COMPLIANT • </span>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE PHILOSOPHY (Minimalist) */}
      <section className="philosophy-section">
        <Container maxWidth="md">
          <div className="quote-wrap">
            <Typography variant="h2">
              "We don't just sell steel. We sell the absolute peace of mind that your foundation will never falter under the weight of ambition."
            </Typography>
            <div className="author-line">
              <Divider sx={{ bgcolor: '#333', flex: 1 }} />
              <span>SP IRON & STEEL INDUSTRIES — CORE VALUES</span>
            </div>
            <Typography variant="body2" sx={{ mt: 4, color: '#666', lineHeight: 2 }}>
              Our philosophy is rooted in technical transparency. We utilize European-standard
              Spectrometric Analysis to verify the chemical DNA of every batch, ensuring
              optimal weldability and safety for high-rise and industrial frameworks.
            </Typography>
          </div>
        </Container>
      </section>

      {/* SECTION 5: STATS AS ART */}
      <section className="stats-art">
        <Container maxWidth="lg">
          <div className="art-grid">
            <div className="art-item">
              <Typography variant="h2">25</Typography>
              <Typography variant="subtitle1">YEARS OF TRUST</Typography>
              <Typography variant="caption" sx={{ color: '#444' }}>A legacy of integrity since 1998.</Typography>
            </div>
            <div className="art-item middle">
              <Typography variant="h2">150+</Typography>
              <Typography variant="subtitle1">MAJOR PROJECTS</Typography>
              <Typography variant="caption" sx={{ color: '#888' }}>Power plants, bridges & skyscrapers.</Typography>
            </div>
            <div className="art-item">
              <Typography variant="h2">100%</Typography>
              <Typography variant="subtitle1">BIS CERTIFIED</Typography>
              <Typography variant="caption" sx={{ color: '#444' }}>Zero compromise on global standards.</Typography>
            </div>
          </div>
        </Container>
      </section>


      {/* SECTION: SECTOR EXPERTISE (Industries Served) */}
      <section className="sector-expertise">
        <Container maxWidth="lg">
          <Typography variant="overline" color="#ffcc00">04. VERTICALS</Typography>
          <Typography variant="h3" className="unbound-font" sx={{ mb: 6 }}>Industries We <span>Empower.</span></Typography>
          <Grid container spacing={3}>
            {[
              { title: "Renewable Energy", desc: "Structural frameworks for massive Solar Parks and Wind Turbine foundations." },
              { title: "Public Infrastructure", desc: "High-grade steel for Bridges, Metro Rail corridors, and Flyovers." },
              { title: "Industrial Plants", desc: "Heavy-duty skeletons for Chemical, Textile, and Manufacturing units." },
              { title: "Urban Skylines", desc: "Seismic-resistant steel for modern high-rise corporate towers." }
            ].map((sector, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box className="sector-card">
                  <Typography variant="h6" className="unbound-font" sx={{ fontSize: '1rem !important' }}>{sector.title}</Typography>
                  <Divider sx={{ bgcolor: '#333', my: 2 }} />
                  <Typography variant="body2" color="#666">{sector.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* SECTION: COMPLIANCE GRID (The Trust Factor) */}
      <section className="compliance-section">
        <Container maxWidth="lg">
          <Box className="compliance-wrapper">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={4}>
                <Typography variant="h4" className="unbound-font">Global <span>Standards.</span></Typography>
                <Typography variant="body2" sx={{ mt: 2, color: '#888' }}>
                  Our procurement and testing protocols strictly adhere to international engineering benchmarks.
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <div className="cert-flex">
                  <div className="cert-item-mini">IS 2062:2011</div>
                  <div className="cert-item-mini">ISO 9001:2015</div>
                  <div className="cert-item-mini">ASTM INTERNATIONAL</div>
                  <div className="cert-item-mini">BIS CERTIFIED</div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>

      {/* SECTION: FUTURE VISION (ESG) */}
      <section className="vision-2027">
        <Container maxWidth="lg">
          <Box className="vision-box">
            <Grid container spacing={10} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h2" className="massive-outline-num">2027</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" className="unbound-font">The <span>Green</span> Steel Initiative.</Typography>
                <Typography variant="body1" sx={{ mt: 3, color: '#aaa' }}>
                  By 2027, SP Iron & Steel aims to optimize the supply chain for zero-waste logistics.
                  We are integrating solar-powered warehousing and AI-driven route optimization to
                  reduce our carbon footprint by 22%—building a future that is as clean as it is strong.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>


    </Box>
  );
};

export default About;
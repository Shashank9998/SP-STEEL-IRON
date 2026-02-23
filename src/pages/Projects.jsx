import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  ImageList, 
  ImageListItem, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';

import { useLocation } from 'react-router-dom';

import '../styles/Projects.css';

const projectsData = [
  { id: 1, title: "Structural Framework", category: "Solar", location: "Kutch", image: "https://images.pexels.com/photos/256112/pexels-photo-256112.jpeg" },
  { id: 2, title: "Heavy Workshop", category: "Industrial", location: "Sanand", image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800&auto=format" },
  { id: 3, title: "Urban Overpass", category: "Infrastructure", location: "Surat", image: "https://images.pexels.com/photos/681347/pexels-photo-681347.jpeg" },
  { id: 4, title: "Trade Tower", category: "Commercial", location: "Ahmedabad", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format" },
  { id: 5, title: "Logistics Hub", category: "Industrial", location: "Bhiwandi", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format" },
  { id: 6, title: "Metro Viaducts", category: "Infrastructure", location: "Ahmedabad", image: "https://images.pexels.com/photos/10149139/pexels-photo-10149139.jpeg" },
  { id: 7, title: "Material Handling", category: "Infrastructure", location: "Mundra", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format" },
  { id: 8, title: "Convention Centre", category: "Commercial", location: "Gift City", image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=800&auto=format" },
  { id: 9, title: "Assembly Line", category: "Industrial", location: "Becharaji", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format" },
  { id: 10, title: "Solar Rooftop", category: "Solar", location: "Vatva", image: "https://images.pexels.com/photos/30440512/pexels-photo-30440512.jpeg" },
  { id: 11, title: "Pedestrian Bridge", category: "Infrastructure", location: "Sabarmati", image: "https://images.pexels.com/photos/10149139/pexels-photo-10149139.jpeg" },
  { id: 12, title: "Data Center", category: "Commercial", location: "Mumbai", image: "https://images.pexels.com/photos/5408005/pexels-photo-5408005.jpeg" },
  { id: 13, title: "Heavy Portal Frame", category: "Industrial", location: "Dahej, GJ", image: "https://images.pexels.com/photos/209272/pexels-photo-209272.jpeg" },
  { id: 14, title: "Industrial Roof Trusses", category: "Industrial", location: "Morbi, GJ", image: "https://images.pexels.com/photos/12715964/pexels-photo-12715964.jpeg" },
  { id: 15, title: "Steel Bridge Span", category: "Infrastructure", location: "Vapi, GJ", image: "https://images.pexels.com/photos/29528405/pexels-photo-29528405.jpeg" },
  { id: 16, title: "Smart Warehouse", category: "Industrial", location: "Sanand, GJ", image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg" },
  { id: 17, title: "Girders & Columns", category: "Infrastructure", location: "Rajkot, GJ", image: "https://images.pexels.com/photos/24304731/pexels-photo-24304731.jpeg" },
];

const Projects = () => {

  const [filter, setFilter] = useState('All');

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const cols = isMobile ? 1 : isTablet ? 2 : 3;


  // ✅ SCROLL RESET FIX
  const location = useLocation();

  useEffect(() => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });

  }, [location.pathname]);


  const filteredProjects =
    filter === 'All'
      ? projectsData
      : projectsData.filter(p => p.category === filter);


  return (

    <Box className="projects-root">

      {/* HEADER */}
      <section className="projects-header">

        <Container maxWidth="lg">

          <Typography variant="overline" className="gold-text">
            OUR ARCHITECTURAL LEGACY
          </Typography>

          <Typography variant="h1" className="massive-title">
            PROVEN <span>STRENGTH.</span>
          </Typography>


          {/* FILTER */}
          <div className="filter-container">

            <div className="filter-wrapper">

              {['All', 'Industrial', 'Infrastructure', 'Solar', 'Commercial'].map((cat) => (

                <button
                  key={cat}
                  className={`filter-btn ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>

              ))}

            </div>

          </div>

        </Container>

      </section>


      {/* GRID */}
      <section className="projects-grid-section">

        <Container maxWidth="xl">

          <ImageList
            variant="masonry"
            cols={cols}
            gap={24}
            sx={{ overflowY: 'visible' }}
          >

            {filteredProjects.map((project) => (

              <ImageListItem key={project.id} className="project-card">

                <div className="project-img-container">

                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      display: 'block',
                      minHeight: '200px',
                      background: '#111'
                    }}
                  />

                  <div className="project-overlay">

                    <div className="overlay-content">

                      <Typography variant="h6" className="p-cat">
                        {project.category}
                      </Typography>

                      <Typography variant="body2" className="p-desc">
                        {project.title} - High grade steel supply.
                      </Typography>

                      <div className="project-link">
                        TECHNICAL SPECS →
                      </div>

                    </div>

                  </div>

                </div>


                <div className="project-info">

                  <Typography variant="h5" className="p-title">
                    {project.title}
                  </Typography>

                  <div className="p-loc-row">

                    <div className="p-loc">
                      <span className="dot"></span> {project.location}
                    </div>

                    <span className="project-year">
                      2024
                    </span>

                  </div>

                </div>

              </ImageListItem>

            ))}

          </ImageList>

        </Container>

      </section>


      {/* FOOTER */}
      <section className="projects-footer">

        <Container maxWidth="md">

          <div className="cta-divider"></div>

          <Typography variant="h3" className="footer-text">
            FORGING THE <span>FUTURE</span> TOGETHER.
          </Typography>

          <button className="gold-btn">
            GET A PROJECT QUOTE
          </button>

        </Container>

      </section>

    </Box>

  );

};

export default Projects;
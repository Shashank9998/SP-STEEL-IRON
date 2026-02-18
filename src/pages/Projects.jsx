// // import React, { useState } from 'react';
// // import { Box, Container, Typography, Grid, Divider } from '@mui/material';
// // import '../styles/Projects.css';

// // const projectsData = [
// //   {
// //     id: 1,
// //     title: "Structural Framework - Solar Farm",
// //     category: "Solar",
// //     location: "Kutch, Gujarat",
// //     // high-res industrial solar image
// //     image: "https://images.unsplash.com/photo-1509391366360-fe5bb584850a?auto=format&fit=crop&q=80&w=1200",
// //     description: "Supply of IS 2062 certified high-tensile structural steel for 500MW solar mounting structures."
// //   },
// //   {
// //     id: 2,
// //     title: "Heavy Engineering Workshop",
// //     category: "Industrial",
// //     location: "Sanand GIDC",
// //     // heavy industrial workshop image
// //     image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
// //     description: "Multi-span steel portal frame construction with heavy-duty crane girder support."
// //   },
// //   {
// //     id: 3,
// //     title: "Urban Connectivity Overpass",
// //     category: "Infrastructure",
// //     location: "Surat, Gujarat",
// //     // bridge infrastructure image
// //     image: "https://images.unsplash.com/photo-1545147986-a9d6f210df77?auto=format&fit=crop&q=80&w=1200",
// //     description: "Main girder supply for 1.2km six-lane flyover, utilizing weather-resistant steel plates."
// //   },
// //   {
// //     id: 4,
// //     title: "Corporate Trade Tower",
// //     category: "Commercial",
// //     location: "SG Highway, Ahmedabad",
// //     // modern skyscraper steel frame image
// //     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
// //     description: "Composite steel-concrete structure providing maximum floor area with minimal column interference."
// //   },
// //   {
// //     id: 5,
// //     title: "Multi-Level Logistics Hub",
// //     category: "Industrial",
// //     location: "Bhiwandi, Maharashtra",
// //     // massive warehouse image
// //     image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
// //     description: "Pre-engineered building (PEB) sections for a 200,000 sq. ft. automated storage facility."
// //   },
// //   {
// //     id: 6,
// //     title: "Metro Rail Viaducts",
// //     category: "Infrastructure",
// //     location: "Ahmedabad Metro Phase II",
// //     // metro rail steel work image
// //     image: "https://images.unsplash.com/photo-1474487059402-e56119548bbd?auto=format&fit=crop&q=80&w=1200",
// //     description: "Segmental steel launching girders for rapid metro viaduct construction."
// //   }
// // ];

// // const Projects = () => {
// //   const [filter, setFilter] = useState('All');

// //   const filteredProjects = filter === 'All' 
// //     ? projectsData 
// //     : projectsData.filter(p => p.category === filter);

// //   return (
// //     <Box className="projects-root">
// //       {/* HEADER SECTION */}
// //       <section className="projects-header">
// //         <Container maxWidth="lg">
// //           <Typography variant="overline" className="gold-text">OUR ARCHITECTURAL LEGACY</Typography>
// //           <Typography variant="h1" className="massive-title">
// //             PROVEN <span>STRENGTH.</span>
// //           </Typography>
          
// //           <div className="filter-container">
// //             <div className="filter-wrapper">
// //               {['All', 'Industrial', 'Infrastructure', 'Solar', 'Commercial'].map((cat) => (
// //                 <button 
// //                   key={cat}
// //                   className={`filter-btn ${filter === cat ? 'active' : ''}`}
// //                   onClick={() => setFilter(cat)}
// //                 >
// //                   {cat}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         </Container>
// //       </section>

// //       {/* PROJECTS GRID */}
// //       <section className="projects-grid-section">
// //         <Container maxWidth="xl">
// //           <Grid container spacing={4}>
// //             {filteredProjects.map((project, index) => (
// //               <Grid item xs={12} sm={6} md={4} key={project.id}>
// //                 <Box className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
// //                   <div className="project-img-container">
// //                     <img src={project.image} alt={project.title} loading="lazy" />
// //                     <div className="project-overlay">
// //                       <div className="overlay-content">
// //                         <Typography variant="h6" className="p-cat">{project.category}</Typography>
// //                         <Typography variant="body2" className="p-desc">{project.description}</Typography>
// //                         <div className="project-link">TECHNICAL SPECS →</div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="project-info">
// //                     <Typography variant="h5" className="p-title">{project.title}</Typography>
// //                     <div className="p-loc-row">
// //                       <div className="p-loc">
// //                         <span className="dot"></span> {project.location}
// //                       </div>
// //                       <span className="project-year">EST. 2024</span>
// //                     </div>
// //                   </div>
// //                 </Box>
// //               </Grid>
// //             ))}
// //           </Grid>
// //         </Container>
// //       </section>

// //       {/* FOOTER CTA */}
// //       <section className="projects-footer">
// //         <Container maxWidth="md">
// //           <div className="cta-divider"></div>
// //           <Typography variant="h3" className="footer-text">
// //             FORGING THE <span>FUTURE</span> TOGETHER.
// //           </Typography>
// //           <a href="/contact" style={{ textDecoration: 'none' }}>
// //             <button className="gold-btn">GET A PROJECT QUOTE</button>
// //           </a>
// //         </Container>
// //       </section>
// //     </Box>
// //   );
// // };

// // export default Projects;

// import React, { useState } from 'react';
// import { Box, Container, Typography, ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material';
// import '../styles/Projects.css';

// const projectsData = [
//   {
//     id: 1,
//     title: "Structural Framework - Solar Farm",
//     category: "Solar",
//     location: "Kutch, Gujarat",
//     image: "https://images.unsplash.com/photo-1509391366360-fe5bb584850a?auto=format&fit=crop&q=80&w=1200",
//     description: "Supply of IS 2062 certified high-tensile structural steel for 500MW solar mounting structures."
//   },
//   {
//     id: 2,
//     title: "Heavy Engineering Workshop",
//     category: "Industrial",
//     location: "Sanand GIDC",
//     image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
//     description: "Multi-span steel portal frame construction with heavy-duty crane girder support."
//   },
//   {
//     id: 3,
//     title: "Urban Connectivity Overpass",
//     category: "Infrastructure",
//     location: "Surat, Gujarat",
//     image: "https://images.unsplash.com/photo-1545147986-a9d6f210df77?auto=format&fit=crop&q=80&w=1200",
//     description: "Main girder supply for 1.2km six-lane flyover, utilizing weather-resistant steel plates."
//   },
//   {
//     id: 4,
//     title: "Corporate Trade Tower",
//     category: "Commercial",
//     location: "SG Highway, Ahmedabad",
//     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
//     description: "Composite steel-concrete structure providing maximum floor area with minimal column interference."
//   },
//   {
//     id: 5,
//     title: "Multi-Level Logistics Hub",
//     category: "Industrial",
//     location: "Bhiwandi, Maharashtra",
//     image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
//     description: "Pre-engineered building (PEB) sections for a 200,000 sq. ft. automated storage facility."
//   },
//   {
//     id: 6,
//     title: "Metro Rail Viaducts",
//     category: "Infrastructure",
//     location: "Ahmedabad Metro Phase II",
//     image: "https://images.unsplash.com/photo-1474487059402-e56119548bbd?auto=format&fit=crop&q=80&w=1200",
//     description: "Segmental steel launching girders for rapid metro viaduct construction."
//   }
// ];

// const Projects = () => {
//   const [filter, setFilter] = useState('All');
//   const theme = useTheme();
  
//   // Responsive Columns: Mobile 1, Tablet 2, Desktop 3
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.down('md'));
//   const cols = isMobile ? 1 : isTablet ? 2 : 3;

//   const filteredProjects = filter === 'All' 
//     ? projectsData 
//     : projectsData.filter(p => p.category === filter);

//   return (
//     <Box className="projects-root">
//       {/* HEADER SECTION */}
//       <section className="projects-header">
//         <Container maxWidth="lg">
//           <Typography variant="overline" className="gold-text">OUR ARCHITECTURAL LEGACY</Typography>
//           <Typography variant="h1" className="massive-title">
//             PROVEN <span>STRENGTH.</span>
//           </Typography>
          
//           <div className="filter-container">
//             <div className="filter-wrapper">
//               {['All', 'Industrial', 'Infrastructure', 'Solar', 'Commercial'].map((cat) => (
//                 <button 
//                   key={cat}
//                   className={`filter-btn ${filter === cat ? 'active' : ''}`}
//                   onClick={() => setFilter(cat)}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* MASONRY PROJECTS GRID */}
//       <section className="projects-grid-section">
//         <Container maxWidth="xl">
//           <ImageList variant="masonry" cols={cols} gap={24}>
//             {filteredProjects.map((project, index) => (
//               <ImageListItem key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
//                 <div className="project-img-container">
//                   <img 
//                     src={`${project.image}?w=500&auto=format`} 
//                     alt={project.title} 
//                     loading="lazy" 
//                   />
//                   <div className="project-overlay">
//                     <div className="overlay-content">
//                       <Typography variant="h6" className="p-cat">{project.category}</Typography>
//                       <Typography variant="body2" className="p-desc">{project.description}</Typography>
//                       <div className="project-link">TECHNICAL SPECS →</div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="project-info">
//                   <Typography variant="h5" className="p-title">{project.title}</Typography>
//                   <div className="p-loc-row">
//                     <div className="p-loc">
//                       <span className="dot"></span> {project.location}
//                     </div>
//                     <span className="project-year">EST. 2024</span>
//                   </div>
//                 </div>
//               </ImageListItem>
//             ))}
//           </ImageList>
//         </Container>
//       </section>

//       {/* FOOTER CTA */}
//       <section className="projects-footer">
//         <Container maxWidth="md">
//           <div className="cta-divider"></div>
//           <Typography variant="h3" className="footer-text">
//             FORGING THE <span>FUTURE</span> TOGETHER.
//           </Typography>
//           <a href="/contact" style={{ textDecoration: 'none' }}>
//             <button className="gold-btn">GET A PROJECT QUOTE</button>
//           </a>
//         </Container>
//       </section>
//     </Box>
//   );
// };

// export default Projects;

// import React, { useState } from 'react';
// import { Box, Container, Typography, ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material';
// import '../styles/Projects.css';

// const projectsData = [
//   {
//     id: 1,
//     title: "Structural Framework - Solar Farm",
//     category: "Solar",
//     location: "Kutch, Gujarat",
//     image: "https://images.unsplash.com/photo-1509391366360-fe5bb584850a",
//     description: "Supply of IS 2062 certified high-tensile structural steel for 500MW solar mounting structures."
//   },
//   {
//     id: 2,
//     title: "Heavy Engineering Workshop",
//     category: "Industrial",
//     location: "Sanand GIDC",
//     image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
//     description: "Multi-span steel portal frame construction with heavy-duty crane girder support."
//   },
//   {
//     id: 3,
//     title: "Urban Connectivity Overpass",
//     category: "Infrastructure",
//     location: "Surat, Gujarat",
//     image: "https://images.unsplash.com/photo-1545147986-a9d6f210df77",
//     description: "Main girder supply for 1.2km six-lane flyover, utilizing weather-resistant steel plates."
//   },
//   {
//     id: 4,
//     title: "Corporate Trade Tower",
//     category: "Commercial",
//     location: "SG Highway, Ahmedabad",
//     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
//     description: "Composite steel-concrete structure providing maximum floor area with minimal column interference."
//   },
//   {
//     id: 5,
//     title: "Multi-Level Logistics Hub",
//     category: "Industrial",
//     location: "Bhiwandi, Maharashtra",
//     image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
//     description: "Pre-engineered building (PEB) sections for a 200,000 sq. ft. automated storage facility."
//   },
//   {
//     id: 6,
//     title: "Metro Rail Viaducts",
//     category: "Infrastructure",
//     location: "Ahmedabad Metro Phase II",
//     image: "https://images.unsplash.com/photo-1474487059402-e56119548bbd",
//     description: "Segmental steel launching girders for rapid metro viaduct construction."
//   },
//   {
//     id: 7,
//     title: "Seaport Material Handling",
//     category: "Infrastructure",
//     location: "Mundra Port",
//     image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589",
//     description: "Heavy-duty steel plates for conveyor gantries and stacker-reclaimer foundations."
//   },
//   {
//     id: 8,
//     title: "Smart City Convention Centre",
//     category: "Commercial",
//     location: "Gift City, Gandhinagar",
//     image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6",
//     description: "Aesthetic steel space-frame roof structure for high-span exhibition halls."
//   },
//   {
//     id: 9,
//     title: "Automotive Assembly Line",
//     category: "Industrial",
//     location: "Becharaji, Gujarat",
//     image: "https://images.unsplash.com/photo-1565034946487-0d7150a2651e",
//     description: "Precision-engineered cold-rolled steel sections for robotic assembly tracks."
//   },
//   {
//     id: 10,
//     title: "Rooftop Solar Integration",
//     category: "Solar",
//     location: "Vatva GIDC",
//     image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9",
//     description: "Lightweight galvanized steel purlins for industrial rooftop solar PV arrays."
//   },
//   {
//     id: 11,
//     title: "Riverfront Pedestrian Bridge",
//     category: "Infrastructure",
//     location: "Sabarmati, Ahmedabad",
//     image: "https://images.unsplash.com/photo-1513828583688-c52646db42da",
//     description: "Torsion-resistant tubular steel sections for iconic suspension walkway."
//   },
//   {
//     id: 12,
//     title: "Data Center Steel Shell",
//     category: "Commercial",
//     location: "Mumbai, MH",
//     image: "https://images.unsplash.com/photo-1558444479-c86e4ef04f0b",
//     description: "Heavy-gauge steel enclosures with high thermal-resistant primer coating."
//   }
// ];

// const Projects = () => {
//   const [filter, setFilter] = useState('All');
//   const theme = useTheme();
  
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.down('md'));
//   const cols = isMobile ? 1 : isTablet ? 2 : 3;

//   const filteredProjects = filter === 'All' 
//     ? projectsData 
//     : projectsData.filter(p => p.category === filter);

//   return (
//     <Box className="projects-root">
//       <section className="projects-header">
//         <Container maxWidth="lg">
//           <Typography variant="overline" className="gold-text">OUR ARCHITECTURAL LEGACY</Typography>
//           <Typography variant="h1" className="massive-title">
//             PROVEN <span>STRENGTH.</span>
//           </Typography>
          
//           <div className="filter-container">
//             <div className="filter-wrapper">
//               {['All', 'Industrial', 'Infrastructure', 'Solar', 'Commercial'].map((cat) => (
//                 <button 
//                   key={cat}
//                   className={`filter-btn ${filter === cat ? 'active' : ''}`}
//                   onClick={() => setFilter(cat)}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </Container>
//       </section>

//       <section className="projects-grid-section">
//         <Container maxWidth="xl">
//           {/* Masonry ImageList ensuring proper vertical flow */}
//           <ImageList variant="masonry" cols={cols} gap={24}>
//             {filteredProjects.map((project, index) => (
//               <ImageListItem key={project.id} className="project-card" style={{ animationDelay: `${index * 0.05}s` }}>
//                 <div className="project-img-container">
//                   {/* Added dynamic sizing for quality and speed */}
//                   <img 
//                     src={`${project.image}?auto=format&fit=crop&w=600&q=80`} 
//                     alt={project.title} 
//                     loading="lazy" 
//                   />
//                   <div className="project-overlay">
//                     <div className="overlay-content">
//                       <Typography variant="h6" className="p-cat">{project.category}</Typography>
//                       <Typography variant="body2" className="p-desc">{project.description}</Typography>
//                       <div className="project-link">TECHNICAL SPECS →</div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="project-info">
//                   <Typography variant="h5" className="p-title">{project.title}</Typography>
//                   <div className="p-loc-row">
//                     <div className="p-loc">
//                       <span className="dot"></span> {project.location}
//                     </div>
//                     <span className="project-year">EST. 2024</span>
//                   </div>
//                 </div>
//               </ImageListItem>
//             ))}
//           </ImageList>
//         </Container>
//       </section>

//       <section className="projects-footer">
//         <Container maxWidth="md">
//           <div className="cta-divider"></div>
//           <Typography variant="h3" className="footer-text">
//             FORGING THE <span>FUTURE</span> TOGETHER.
//           </Typography>
//           <a href="/contact" style={{ textDecoration: 'none' }}>
//             <button className="gold-btn">GET A PROJECT QUOTE</button>
//           </a>
//         </Container>
//       </section>
//     </Box>
//   );
// };

// export default Projects;

import React, { useState } from 'react';
import { Box, Container, Typography, ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material';
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
  // { id: 10, title: "Solar Rooftop", category: "Solar", location: "Vatva", image: "https://images.pexels.com/photos/8783541/pexels-photo-8783541.jpeg" },
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

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <Box className="projects-root">
      <section className="projects-header">
        <Container maxWidth="lg">
          <Typography variant="overline" className="gold-text">OUR ARCHITECTURAL LEGACY</Typography>
          <Typography variant="h1" className="massive-title">
            PROVEN <span>STRENGTH.</span>
          </Typography>
          
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

      <section className="projects-grid-section">
        <Container maxWidth="xl">
          <ImageList 
            variant="masonry" 
            cols={cols} 
            gap={24}
            sx={{ overflowY: 'visible' }} // Fixes images disappearing on scroll
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
                      minHeight: '200px', // Placeholder height
                      background: '#111'
                    }}
                  />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <Typography variant="h6" className="p-cat">{project.category}</Typography>
                      <Typography variant="body2" className="p-desc">{project.title} - High grade steel supply.</Typography>
                      <div className="project-link">TECHNICAL SPECS →</div>
                    </div>
                  </div>
                </div>
                
                <div className="project-info">
                  <Typography variant="h5" className="p-title">{project.title}</Typography>
                  <div className="p-loc-row">
                    <div className="p-loc"><span className="dot"></span> {project.location}</div>
                    <span className="project-year">2024</span>
                  </div>
                </div>
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </section>

      <section className="projects-footer">
        <Container maxWidth="md">
          <div className="cta-divider"></div>
          <Typography variant="h3" className="footer-text">
            FORGING THE <span>FUTURE</span> TOGETHER.
          </Typography>
          <button className="gold-btn">GET A PROJECT QUOTE</button>
        </Container>
      </section>
    </Box>
  );
};

export default Projects;
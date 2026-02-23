import React, { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import {
  Box, Container, Typography, Grid, Paper, Table,
  TableBody, TableCell, TableContainer, TableRow, Button, Stack
} from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ConstructionIcon from '@mui/icons-material/Construction';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// ... (તમારો productData અહિયાં જ રહેશે)
const productData = {
  "tmt": {
    title: "TMT Steel Bars",
    desc: "Premium Thermo-Mechanically Treated bars providing superior strength and seismic resistance for modern construction.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200",
    features: ["High Ductility", "Corrosion Resistant", "Excellent Bendability", "Seismic Resistance", "Superior Bonding with Concrete"],
    applications: ["High-rise Buildings", "Bridges & Flyovers", "Dams", "Industrial Foundations", "Residential Projects"],
    specs: [{ size: "8mm - 32mm", grade: "Fe 550D / Fe 600", weight: "Standard ISI" }]
  },
  "beams-columns": {
    title: "Beams & Columns",
    desc: "Heavy-duty I-Beams and H-Columns designed for high load-bearing structural frameworks and industrial stability.",
    image: "https://images.unsplash.com/photo-1516315720917-231ef9acce48?q=80&w=1200",
    features: ["High Load Capacity", "Uniform Thickness", "Structural Stability", "Ease of Fabrication", "Dimensionally Accurate"],
    applications: ["Warehouse Sheds", "Factory Buildings", "Heavy Machinery Platforms", "Infrastructure Support"],
    specs: [{ size: "100x50mm to 600x210mm", grade: "ASTM A36 / IS 2062", weight: "Varies by Size" }]
  },
  "plates": {
    title: "MS Plates",
    desc: "High-tensile Mild Steel plates for industrial machinery, shipbuilding, and infrastructure with superior weldability.",
    image: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1200",
    features: ["High Tensile Strength", "Excellent Surface Finish", "Easy to Cut & Weld", "Impact Resistance", "Flawless Internal Structure"],
    applications: ["Boiler Fabrication", "Shipbuilding", "Yellow Goods (JCB/Cranes)", "Railway Wagons", "Storage Tanks"],
    specs: [{ size: "5mm to 100mm Thickness", grade: "IS 2062 E250 / E350", weight: "7.85 kg/mm per m²" }]
  },
  "pipes": {
    title: "GI Pipes",
    desc: "Galvanized Iron pipes with superior zinc coating for maximum corrosion protection in plumbing and industrial fluid transport.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200",
    features: ["Rust Proof Coating", "Long Life Span", "Leak Proof Threading", "High Pressure Resistance", "Low Maintenance"],
    applications: ["Water Supply Lines", "Irrigation Systems", "Firefighting Networks", "Gas Piping", "Handrails & Scaffolding"],
    specs: [{ size: "1/2 inch to 12 inch", grade: "Class A, B & C", weight: "Standard Nominal Bore" }]
  },
  "stainless-steel-coils": {
    title: "Stainless Steel Coils",
    desc: "High-grade SS coils with various finishes (2B, BA, No.4) for high-end manufacturing and automotive use.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200",
    features: ["Mirror/Matte Finish", "High Heat Resistance", "Non-Magnetic Options", "Anti-Oxidation", "Precision Slitting"],
    applications: ["Kitchenware", "Automotive Parts", "Medical Equipment", "Chemical Processing", "Elevator Panels"],
    specs: [{ size: "0.3mm to 6mm Thickness", grade: "SS 304 / 316L / 430", weight: "Variable Coil Weights" }]
  },
  "steelsheets": {
    title: "Steel Sheets",
    desc: "Versatile Hot Rolled and Cold Rolled steel sheets available in multiple thicknesses for general engineering and enclosures.",
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200",
    features: ["Smooth Texture", "Uniform Flatness", "High Formability", "Good Paint Adhesion", "Cost-Effective"],
    applications: ["Control Panels", "Furniture", "Ducting", "Roofing Sheets", "Automotive Body Parts"],
    specs: [{ size: "1mm to 4mm", grade: "Commercial Grade / DD Grade", weight: "Standard Area Calculation" }]
  },
  "sheets": {
    title: "Cold Rolled Sheets",
    desc: "CR sheets with precise dimensions and a smooth surface finish, perfect for high-end aesthetic applications.",
    image: "https://images.pexels.com/photos/8940223/pexels-photo-8940223.jpeg",
    features: ["Tight Tolerances", "Superior Surface Quality", "Excellent Stamping Ability", "Consistent Mechanical Properties"],
    applications: ["Home Appliances (Fridges/ACs)", "Precision Tubes", "Electrical Laminations", "Office Equipment"],
    specs: [{ size: "0.5mm to 3.0mm", grade: "CR1 / CR2 / CR3", weight: "Density: 7.85 g/cm³" }]
  },
  "stainless-steel": {
    title: "Stainless Steel",
    desc: "Architectural and Industrial grade stainless steel offering timeless durability, aesthetics, and hygiene.",
    image: "https://images.pexels.com/photos/1381938/pexels-photo-1381938.jpeg",
    features: ["Elegant Aesthetics", "100% Recyclable", "Extreme Durability", "Hygienic Surface", "Low Thermal Expansion"],
    applications: ["Modern Architecture", "Food Processing Plants", "Pharmaceutical Labs", "Decorative Railings", "Marine Hardware"],
    specs: [{ size: "Custom Sections", grade: "SS 304 / 316 / 310", weight: "As per Order" }]
  }
};

const ProductCategory = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const product = productData[id];

  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  if (!product) return (
    <Box sx={{ py: 20, textAlign: 'center', bgcolor: '#0a0a0a', color: '#d4af37', minHeight: '100vh' }}>
      <Typography variant="h4">Product Not Found</Typography>
      <Button component={Link} to="/" sx={{ mt: 3, color: '#d4af37', borderColor: '#d4af37' }} variant="outlined">Back to Home</Button>
    </Box>
  );

  return (
    <Box sx={{ bgcolor: '#000', color: '#fff', minHeight: '100vh', pb: 10, overflow: 'hidden' }}>

      {/* 1. HERO SECTION WITH ZOOM EFFECT */}
      <Box sx={{
        height: '70vh', position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            position: 'absolute', width: '100%', height: '100%',
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), #000), url(${product.image})`,
            backgroundSize: 'cover', backgroundPosition: 'center'
          }}
        />
        <Container sx={{ position: 'relative', textAlign: 'center' }}>
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
            <Typography variant="h1" sx={{ fontWeight: 900, fontSize: { xs: '3.5rem', md: '7rem' }, color: '#d4af37', textTransform: 'uppercase', letterSpacing: 10, mb: 2, textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
              {product.title}
            </Typography>
            <Box sx={{ width: '80px', height: '4px', bgcolor: '#d4af37', mx: 'auto', mb: 3 }} />
          </motion.div>
        </Container>
      </Box>

      <Container sx={{ mt: -15 }}>
        {/* 2. MAIN CARD WITH GLASSMORPHISM EFFECT */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Paper elevation={0} sx={{
            p: { xs: 4, md: 8 }, bgcolor: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(10px)', borderRadius: '20px',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}>
            <Grid container spacing={8}>
              {/* LEFT SIDE एनिમેશન */}
              <Grid item xs={12} md={6}>
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Typography variant="overline" sx={{ color: '#d4af37', fontWeight: 800, letterSpacing: 4, display: 'block', mb: 1 }}>Premium Industrial Grade</Typography>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, background: 'linear-gradient(45deg, #fff 30%, #d4af37 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Material Overview</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#aaa', lineHeight: 1.8, mb: 4 }}>{product.desc}</Typography>

                  <Stack direction="row" spacing={2} sx={{ mb: 5 }}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="contained" sx={{ bgcolor: '#d4af37', color: '#000', fontWeight: 900, px: 4, py: 2, borderRadius: '50px', '&:hover': { bgcolor: '#fff' } }}>Request Quote</Button>
                    </motion.div>
                  </Stack>

                  <Typography variant="h5" sx={{ mb: 3, color: '#d4af37', fontWeight: 700 }}>Key Advantages</Typography>
                  <Grid container spacing={2}>
                    {product.features?.map((f, i) => (
                      <Grid item xs={6} key={i}>
                        <motion.div variants={fadeInUp} custom={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <VerifiedUserIcon sx={{ color: '#d4af37', fontSize: 22 }} />
                          <Typography variant="body2" sx={{ color: '#eee' }}>{f}</Typography>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Grid>

              {/* RIGHT SIDE TECH SPECS WITH GLOW */}
              <Grid item xs={12} md={6}>
                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                  <Box sx={{
                    p: 4, bgcolor: '#111', borderRadius: '15px', border: '1px solid #222',
                    position: 'relative', overflow: 'hidden', '&:before': {
                      content: '""', position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', bgcolor: '#d4af37'
                    }
                  }}>
                    <Typography variant="h5" sx={{ mb: 4, fontWeight: 700, color: '#d4af37' }}>Technical Data Sheet</Typography>
                    <TableContainer>
                      <Table size="small">
                        <TableBody>
                          {product.specs.map((row, index) => (
                            <React.Fragment key={index}>
                              <TableRow sx={{ '& td': { borderBottom: '1px solid #222', py: 2 } }}>
                                <TableCell sx={{ color: '#777', fontWeight: 600 }}>Standard Sizes</TableCell>
                                <TableCell sx={{ color: '#fff', textAlign: 'right' }}>{row.size}</TableCell>
                              </TableRow>
                              <TableRow sx={{ '& td': { borderBottom: '1px solid #222', py: 2 } }}>
                                <TableCell sx={{ color: '#777', fontWeight: 600 }}>Available Grades</TableCell>
                                <TableCell sx={{ color: '#fff', textAlign: 'right' }}>{row.grade}</TableCell>
                              </TableRow>
                              <TableRow sx={{ '& td': { border: 0, py: 2 } }}>
                                <TableCell sx={{ color: '#777', fontWeight: 600 }}>Unit Weight</TableCell>
                                <TableCell sx={{ color: '#fff', textAlign: 'right' }}>{row.weight}</TableCell>
                              </TableRow>
                            </React.Fragment>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>

                  <Box sx={{ mt: 5 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 3,
                        color: '#d4af37',
                        fontSize: '1.1rem',
                        letterSpacing: 2,
                        fontWeight: 700,
                        borderLeft: '4px solid #d4af37',
                        pl: 2
                      }}
                    >
                      PRIMARY APPLICATIONS
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={2}>
                      {product.applications?.map((app, i) => (
                        <motion.div
                          key={i}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: '#d4af37',
                            color: '#000',
                            borderColor: '#d4af37'
                          }}
                          style={{
                            padding: '10px 24px',
                            border: '1px solid rgba(212, 175, 55, 0.3)',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(255, 255, 255, 0.94)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 600,
                              fontSize: '0.9rem',
                              letterSpacing: 0.5
                            }}
                          >
                            {app}
                          </Typography>
                        </motion.div>
                      ))}
                    </Stack>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>

        {/* 3. WHY CHOOSE US WITH STAGGERED CARDS */}

        <Box sx={{ mt: 15, pb: 5, textAlign: 'center' }}>
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h4" sx={{ mb: 2, color: '#fff', fontWeight: 800, letterSpacing: 1 }}>
              Uncompromising Quality
            </Typography>
            <Box sx={{ width: '60px', height: '3px', bgcolor: '#d4af37', mx: 'auto', mb: 3 }} />
            <Typography variant="body1" sx={{ color: '#777', mb: 8, maxWidth: '600px', mx: 'auto' }}>
              We follow world-class standards in every batch we produce, ensuring reliability for your projects.
            </Typography>
          </motion.div>

          {/* Cards Grid Container */}
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {[
              { icon: <PrecisionManufacturingIcon fontSize="large" />, title: "Precision", text: "Manufactured with millimetric accuracy using high-end CNC technology." },
              { icon: <ConstructionIcon fontSize="large" />, title: "Durability", text: "Engineered to withstand 50+ years of environmental stress and high loads." },
              { icon: <VerifiedUserIcon fontSize="large" />, title: "Certification", text: "Every single product comes with a genuine Mill Test Certificate (MTC)." }
            ].map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex' }}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  whileHover={{ y: -15 }}
                  style={{ width: '100%', display: 'flex' }} // Ensuring motion div takes full width
                >
                  <Paper sx={{
                    p: 5,
                    bgcolor: '#0a0a0a',
                    border: '1px solid rgba(212, 175, 55, 0.1)',
                    height: '100%', // Equal height for all cards
                    width: '100%',
                    borderRadius: '20px',
                    transition: 'all 0.4s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                      borderColor: '#d4af37',
                      boxShadow: '0 15px 40px rgba(212,175,55,0.15)',
                      bgcolor: '#111'
                    }
                  }}>
                    <Box sx={{
                      color: '#d4af37',
                      mb: 3,
                      p: 2,
                      borderRadius: '50%',
                      bgcolor: 'rgba(212, 175, 55, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {item.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 800, color: '#fff' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#888', lineHeight: 1.8 }}>
                      {item.text}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductCategory;
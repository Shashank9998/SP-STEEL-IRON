import React, { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { 
  Box, Container, Typography, Grid, Paper, Table, 
  TableBody, TableCell, TableContainer, TableHead, 
  TableRow, Button, Chip 
} from '@mui/material';
import { motion } from 'framer-motion';

const productData = {
  "tmt": {
    title: "TMT Steel Bars",
    desc: "Premium Thermo-Mechanically Treated bars providing superior strength and seismic resistance for modern construction.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200",
    specs: [{ size: "8mm", grade: "Fe 550D", weight: "0.395 kg/m" }, { size: "12mm", grade: "Fe 550D", weight: "0.888 kg/m" }]
  },
  "beams-columns": {
    title: "Beams & Columns",
    desc: "Heavy-duty I-Beams and H-Columns designed for high load-bearing structural frameworks.",
    image: "https://images.unsplash.com/photo-1516315720917-231ef9acce48?q=80&w=1200",
    specs: [{ size: "100x50mm", grade: "ASTM A36", weight: "9.2 kg/m" }]
  },
  "plates": {
    title: "MS Plates",
    desc: "High-tensile Mild Steel plates for industrial machinery, shipbuilding, and infrastructure.",
    image: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1200",
    specs: [{ size: "10mm", grade: "IS 2062", weight: "78.5 kg/m²" }]
  },
  "pipes": {
    title: "GI Pipes",
    desc: "Galvanized Iron pipes with superior zinc coating for maximum corrosion protection.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200",
    specs: [{ size: "1 inch", grade: "Class C", weight: "2.44 kg/m" }]
  },
  "stainless-steel-coils": {
    title: "Stainless Steel Coils",
    desc: "High-grade SS coils with various finishes (2B, BA, No.4) for manufacturing and automotive use.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200",
    specs: [{ size: "0.5mm", grade: "SS 304", weight: "Variable" }]
  },
  "steelsheets": {
    title: "Steel Sheets",
    desc: "Versatile steel sheets available in multiple thicknesses for general engineering purposes.",
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200",
    specs: [{ size: "2mm", grade: "Commercial", weight: "15.7 kg/m²" }]
  },
  "sheets": {
    title: "Cold Rolled Sheets",
    desc: "CR sheets with precise dimensions and a smooth surface finish, perfect for high-end applications.",
    image: "https://images.pexels.com/photos/8940223/pexels-photo-8940223.jpeg",
    specs: [{ size: "1.2mm", grade: "CR1", weight: "9.42 kg/m²" }]
  },
  "stainless-steel": {
    title: "Stainless Steel",
    desc: "Architectural and Industrial grade stainless steel offering timeless durability and aesthetics.",
    image: "https://images.unsplash.com/photo-1531835352811-6df7b89710f6?q=80&w=1200",
    specs: [{ size: "Custom", grade: "SS 316", weight: "On Request" }]
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
      <Button component={Link} to="/products" sx={{ mt: 3, color: '#d4af37', borderColor: '#d4af37' }} variant="outlined">Back to Gallery</Button>
    </Box>
  );

  return (
    <Box sx={{ bgcolor: '#000', color: '#fff', minHeight: '100vh', pb: 10 }}>
      {/* LUXURY BANNER */}
      <Box sx={{ 
        height: '50vh', 
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), #000), url(${product.image})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <Typography variant="h1" sx={{ 
            fontWeight: 900, 
            fontSize: { xs: '2.5rem', md: '5rem' },
            color: '#d4af37',
            textShadow: '2px 2px 20px rgba(212, 175, 55, 0.5)',
            textTransform: 'uppercase'
          }}>
            {product.title}
          </Typography>
        </motion.div>
      </Box>

      <Container sx={{ mt: -8 }}>
        <Paper elevation={0} sx={{ p: { xs: 3, md: 8 }, bgcolor: '#0a0a0a', borderRadius: 4, border: '1px solid #d4af37' }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={5}>
              <Typography variant="overline" sx={{ color: '#d4af37', fontWeight: 800, letterSpacing: 3 }}>Premium Selection</Typography>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, mt: 1, color: '#fff' }}>Overview</Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#aaa', lineHeight: 1.8, mb: 4 }}>{product.desc}</Typography>
              <Button sx={{ 
                bgcolor: '#d4af37', color: '#000', fontWeight: 'bold', px: 5, py: 2, fontSize: '1.1rem',
                '&:hover': { bgcolor: '#fff', color: '#000' }, borderRadius: '0px'
              }}>Request Exclusive Quote</Button>
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#d4af37', textTransform: 'uppercase' }}>Technical Specifications</Typography>
              <TableContainer sx={{ border: '1px solid #333', borderRadius: 2 }}>
                <Table>
                  <TableHead sx={{ bgcolor: '#1a1a1a' }}>
                    <TableRow>
                      <TableCell sx={{ color: '#d4af37', fontWeight: 'bold', borderBottom: '1px solid #d4af37' }}>Property</TableCell>
                      <TableCell sx={{ color: '#d4af37', fontWeight: 'bold', borderBottom: '1px solid #d4af37' }}>Details</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {product.specs.map((row, index) => (
                      <React.Fragment key={index}>
                        <TableRow>
                          <TableCell sx={{ color: '#fff', borderBottom: '1px solid #222' }}>Size</TableCell>
                          <TableCell sx={{ color: '#d4af37', borderBottom: '1px solid #222' }}>{row.size}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ color: '#fff', borderBottom: '1px solid #222' }}>Grade</TableCell>
                          <TableCell sx={{ color: '#d4af37', borderBottom: '1px solid #222' }}>{row.grade}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ color: '#fff', borderBottom: '1px solid #222' }}>Weight</TableCell>
                          <TableCell sx={{ color: '#d4af37', borderBottom: '1px solid #222' }}>{row.weight}</TableCell>
                        </TableRow>
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default ProductCategory;
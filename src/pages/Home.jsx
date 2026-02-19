// import React from 'react';
// import { Box, Typography, Button, Container } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectCreative, Navigation, Pagination, Mousewheel } from 'swiper/modules';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// // Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-creative';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import '../styles/Home.css';

// const Home = () => {
//   const sliderData = [
//     {
//       title: "PREMIUM TMT BARS",
//       desc: "Earthquake resistant ISI grade steel for lifetime durability.",
//       img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200",
//       color: "#ff3366"
//     },
//     {
//       title: "STRUCTURAL BEAMS",
//       desc: "Heavy-duty MS Angles & Beams for industrial mega-projects.",
//       img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200",
//       color: "#00f2fe"
//     },
//     {
//       title: "INDUSTRIAL PIPES",
//       desc: "Precision engineered hollow sections for modern construction.",
//       img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200",
//       color: "#ffcc00"
//     },
//     {
//       title: "ROOFING SOLUTIONS",
//       desc: "High-quality color coated sheets for weather protection.",
//       img: "https://images.unsplash.com/photo-1530124566582-a618bc2615ad?q=80&w=1200",
//       color: "#a855f7"
//     },
//     {
//       title: "MS PLATES",
//       desc: "Premium grade hot-rolled plates for heavy engineering.",
//       img: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1200",
//       color: "#22c55e"
//     }
//   ];

//   return (
//     <Box className="home-root">
//       {/* --- MASTER 3D SLIDER --- */}
//       <section className="master-slider-section">
//         <Swiper
//           grabCursor={true}
//           effect={'creative'}
//           creativeEffect={{
//             prev: { shadow: true, translate: ['-120%', 0, -500] },
//             next: { shadow: true, translate: ['120%', 0, -500] },
//           }}
//           loop={true}
//           mousewheel={true}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//           navigation={true}
//           modules={[EffectCreative, Autoplay, Navigation, Pagination, Mousewheel]}
//           className="creative-swiper"
//         >
//           {sliderData.map((slide, index) => (
//             <SwiperSlide key={index} className="creative-slide">
//               <div 
//                 className="slide-bg" 
//                 style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url(${slide.img})` }}
//               >

//                 <Container className="slide-content-box">
//                   <div className="text-area">
//                     <Typography variant="overline" className="slide-overline" style={{ color: slide.color }}>
//                       SP IRON & STEEL INDUSTRIES
//                     </Typography>
//                     <Typography variant="h1" className="slide-h1">
//                       {slide.title}
//                     </Typography>
//                     <Typography variant="h5" className="slide-desc">
//                       {slide.desc}
//                     </Typography>
//                     <div className="btn-group">
//                       <Button className="btn-main" style={{ backgroundColor: slide.color }}>
//                         Get Quote
//                       </Button>
//                       <Button className="btn-wa" startIcon={<WhatsAppIcon />}>
//                         WhatsApp
//                       </Button>
//                     </div>
//                   </div>
//                  </Container>
//                 {/* </motion.div> */}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>

//       {/* Baki na sections (Stats, Products, FAQ) ahiya aavse... */}
//     </Box>
//   );
// };

// export default Home;

// import React from 'react';
// import { Box, Typography, Button, Container } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectCreative, Navigation, Pagination, Mousewheel } from 'swiper/modules';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// // Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-creative';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import '../styles/Home.css';

// const Home = () => {
//   // --- WHATSAPP CONFIGURATION ---
//   const MY_PHONE_NUMBER = "919328649313"; // Enter your 12-digit number (e.g., 91 for India + 10 digits)

//   const handleWhatsAppChat = (productName) => {
//     const message = `Hello SP Iron & Steel, I am interested in ${productName}. Please provide more details and the latest price.`;
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/${MY_PHONE_NUMBER}?text=${encodedMessage}`;
//     window.open(whatsappUrl, "_blank");
//   };

//   const sliderData = [
//     {
//       title: "PREMIUM TMT BARS",
//       desc: "Earthquake resistant ISI grade steel for lifetime durability.",
//       img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200",
//       color: "#ff3366"
//     },
//     {
//       title: "STRUCTURAL BEAMS",
//       desc: "Heavy-duty MS Angles & Beams for industrial mega-projects.",
//       img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200",
//       color: "#00f2fe"
//     },
//     {
//       title: "INDUSTRIAL PIPES",
//       desc: "Precision engineered hollow sections for modern construction.",
//       img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200",
//       color: "#ffcc00"
//     },
//     {
//       title: "ROOFING SOLUTIONS",
//       desc: "High-quality color coated sheets for weather protection.",
//       img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
//       color: "#a855f7"
//     },
//     {
//       title: "MS PLATES",
//       desc: "Premium grade hot-rolled plates for heavy engineering.",
//       img: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1200",
//       color: "#22c55e"
//     }
//   ];

//   return (
//     <Box className="home-root">
//       {/* --- MASTER 3D SLIDER --- */}
//       <section className="master-slider-section">
//         <Swiper
//           grabCursor={true}
//           effect={'creative'}
//           creativeEffect={{
//             prev: { shadow: true, translate: ['-120%', 0, -500] },
//             next: { shadow: true, translate: ['120%', 0, -500] },
//           }}
//           loop={true}
//           mousewheel={true}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//           navigation={true}
//           modules={[EffectCreative, Autoplay, Navigation, Pagination, Mousewheel]}
//           className="creative-swiper"
//         >
//           {sliderData.map((slide, index) => (
//             <SwiperSlide key={index} className="creative-slide">
//               <div 
//                 className="slide-bg" 
//                 style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url(${slide.img})` }}
//               >
//                 <Container className="slide-content-box">
//                   <div className="text-area">
//                     <Typography variant="overline" className="slide-overline" style={{ color: slide.color }}>
//                       SP IRON & STEEL INDUSTRIES
//                     </Typography>
//                     <Typography variant="h1" className="slide-h1">
//                       {slide.title}
//                     </Typography>
//                     <Typography variant="h5" className="slide-desc">
//                       {slide.desc}
//                     </Typography>
//                     <div className="btn-group">
//                       <Button 
//                         className="btn-main" 
//                         style={{ backgroundColor: slide.color }}
//                         onClick={() => handleWhatsAppChat(slide.title)}
//                       >
//                         Get Quote
//                       </Button>
//                       <Button 
//                         className="btn-wa" 
//                         startIcon={<WhatsAppIcon />}
//                         onClick={() => handleWhatsAppChat(slide.title)}
//                       >
//                         WhatsApp
//                       </Button>
//                     </div>
//                   </div>
//                 </Container>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     </Box>
//   );
// };

// export default Home;

// import React, { useState } from 'react';
// import {
//   Box, Typography, Button, Container, Dialog,
//   DialogTitle, DialogContent, TextField, MenuItem,
//   IconButton, Stack, Fade, Snackbar, Alert
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import SendIcon from '@mui/icons-material/Send';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectCreative, Navigation, Pagination, Mousewheel } from 'swiper/modules';

// // Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-creative';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import '../styles/Home.css';

// const Home = () => {
//   const MY_PHONE_NUMBER = "919328649313";

//   // --- STATES ---
//   const [open, setOpen] = useState(false);
//   const [showThanks, setShowThanks] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     product: '',
//     quantity: '',
//     message: ''
//   });

//   // --- HANDLERS ---
//   const handleOpen = (productName) => {
//     setFormData({ ...formData, product: productName || '' });
//     setOpen(true);
//   };

//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     // WhatsApp Message Formatting
//     const whatsappMessage = `*New Inquiry from Website*%0a%0a` +
//       `*Name:* ${formData.name}%0a` +
//       `*Phone:* ${formData.phone}%0a` +
//       `*Product:* ${formData.product}%0a` +
//       `*Quantity:* ${formData.quantity}%0a` +
//       `*Message:* ${formData.message}`;

//     window.open(`https://wa.me/${MY_PHONE_NUMBER}?text=${whatsappMessage}`, "_blank");

//     // Finalizing Actions
//     handleClose();
//     setShowThanks(true);
//     setFormData({ name: '', phone: '', product: '', quantity: '', message: '' }); // Reset Form
//   };

//   const handleWhatsAppDirect = (productName) => {
//     const message = `Hello SP Iron & Steel, I am interested in ${productName}.`;
//     window.open(`https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
//   };

//   const sliderData = [
//     { title: "PREMIUM TMT BARS", desc: "Earthquake resistant ISI grade steel for lifetime durability.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200", color: "#ff3366" },
//     { title: "STRUCTURAL BEAMS", desc: "Heavy-duty MS Angles & Beams for industrial mega-projects.", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200", color: "#00f2fe" },
//     { title: "INDUSTRIAL PIPES", desc: "Precision engineered hollow sections for modern construction.", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200", color: "#ffcc00" },
//     { title: "ROOFING SOLUTIONS", desc: "High-quality color coated sheets for weather protection.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200", color: "#a855f7" },
//     { title: "MS PLATES", desc: "Premium grade hot-rolled plates for heavy engineering.", img: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1200", color: "#22c55e" }
//   ];

//   return (
//     <Box className="home-root">
//       {/* --- MASTER 3D SLIDER --- */}
//       <section className="master-slider-section">
//         <Swiper
//           grabCursor={true}
//           effect={'creative'}
//           creativeEffect={{
//             prev: { shadow: true, translate: ['-120%', 0, -500] },
//             next: { shadow: true, translate: ['120%', 0, -500] },
//           }}
//           loop={true}
//           mousewheel={false}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//           navigation={true}
//           modules={[EffectCreative, Autoplay, Navigation, Pagination, Mousewheel]}
//           className="creative-swiper"
//         >
//           {sliderData.map((slide, index) => (
//             <SwiperSlide key={index} className="creative-slide">
//               <div
//                 className="slide-bg"
//                 style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url(${slide.img})` }}
//               >
//                 <Container className="slide-content-box">
//                   <div className="text-area">
//                     <Typography variant="overline" className="slide-overline" style={{ color: slide.color }}>
//                       SP IRON & STEEL INDUSTRIES
//                     </Typography>
//                     <Typography variant="h1" className="slide-h1">{slide.title}</Typography>
//                     <Typography variant="h5" className="slide-desc">{slide.desc}</Typography>
//                     <div className="btn-group">
//                       <Button
//                         className="btn-main"
//                         style={{ backgroundColor: slide.color, color: '#fff' }}
//                         onClick={() => handleOpen(slide.title)}
//                       >
//                         Get Quote
//                       </Button>
//                       <Button
//                         className="btn-wa"
//                         startIcon={<WhatsAppIcon />}
//                         onClick={() => handleWhatsAppDirect(slide.title)}
//                       >
//                         WhatsApp
//                       </Button>
//                     </div>
//                   </div>
//                 </Container>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>

//       {/* --- POPUP QUOTE FORM --- */}
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Fade}
//         transitionDuration={500}
//         fullWidth
//         maxWidth="sm"
//         PaperProps={{ style: { borderRadius: 20, padding: '10px' } }}
//       >
//         <DialogTitle sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           Request a Quote
//           <IconButton onClick={handleClose}><CloseIcon /></IconButton>
//         </DialogTitle>
//         <DialogContent>
//           <Typography variant="body2" sx={{ mb: 3, color: 'gray' }}>
//             Get the latest prices for your requirements. Fill out the form below.
//           </Typography>
//           <form onSubmit={handleFormSubmit}>
//             <Stack spacing={2.5}>
//               <TextField label="Full Name" name="name" fullWidth required onChange={handleChange} value={formData.name} />
//               <TextField label="Mobile Number" name="phone" fullWidth required onChange={handleChange} value={formData.phone} />
//               <TextField
//                 select label="Product Name" name="product" fullWidth required
//                 onChange={handleChange} value={formData.product}
//               >
//                 {sliderData.map((s) => (
//                   <MenuItem key={s.title} value={s.title}>{s.title}</MenuItem>
//                 ))}
//                 <MenuItem value="Other">Other / Custom</MenuItem>
//               </TextField>
//               <TextField label="Estimated Quantity (Tons/Kg)" name="quantity" fullWidth required onChange={handleChange} value={formData.quantity} />
//               <TextField label="Your Message" name="message" fullWidth multiline rows={3} onChange={handleChange} value={formData.message} />
//               <Button
//                 type="submit" variant="contained" size="large" endIcon={<SendIcon />}
//                 sx={{ background: 'linear-gradient(45deg, #212121 30%, #424242 90%)', color: 'white', py: 1.5, borderRadius: '10px' }}
//               >
//                 Send Inquiry
//               </Button>
//             </Stack>
//           </form>
//         </DialogContent>
//       </Dialog>

//       {/* --- THANK YOU TOAST --- */}
//       <Snackbar
//         open={showThanks}
//         autoHideDuration={6000}
//         onClose={() => setShowThanks(false)}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//       >
//         <Alert
//           onClose={() => setShowThanks(false)}
//           severity="success"
//           variant="filled"
//           sx={{ width: '100%', borderRadius: '12px', fontSize: '1rem' }}
//         >
//           Thank you! We have received your inquiry. We'll contact you shortly.
//         </Alert>
//       </Snackbar>

//       {/* --- ABOUT US SECTION --- */}
//       <section className="about-section">
//         <Container maxWidth="lg">
//           <Stack
//             direction={{ xs: 'column', md: 'row' }}
//             spacing={6}
//             alignItems="center"
//           >
//             {/* Left Side: Content */}
//             <Box className="about-content" flex={1}>
//               <Typography variant="overline" sx={{ color: '#ff3366', fontWeight: 'bold', letterSpacing: 2 }}>
//                 Since 1998
//               </Typography>
//               <Typography variant="h2" className="section-title">
//                 Strength & Trust in Every Ton
//               </Typography>
//               <Typography variant="body1" className="about-text">
//                 SP Iron & Steel Industries has been a cornerstone in the steel industry for over two decades.
//                 We specialize in providing high-quality TMT bars, structural steel, and roofing solutions
//                 that empower modern construction. Our commitment to transparency, timely delivery, and
//                 unmatched quality has made us Gujarat's most trusted steel partner.
//               </Typography>

//               <Stack spacing={2} sx={{ my: 4 }}>
//                 <Box className="feature-item">✔ ISI Certified Premium Quality Steel</Box>
//                 <Box className="feature-item">✔ 24-Hour Site Delivery Across Gujarat</Box>
//                 <Box className="feature-item">✔ Most Competitive Market Rates</Box>
//               </Stack>

//               <Button
//                 variant="outlined"
//                 className="about-link-btn"
//                 href="/about" // તમારી About પેજની લિંક
//               >
//                 Read Our Full Story
//               </Button>
//             </Box>

//             {/* Right Side: Photo Grid */}
//             <Box className="about-grid" flex={1}>
//               <div className="grid-container">
//                 <div className="grid-item item-1">
//                   <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=600" alt="Steel Factory" />
//                 </div>
//                 <div className="grid-item item-2">
//                   <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600" alt="Construction" />
//                 </div>
//                 <div className="grid-item item-3">
//                   <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600" alt="TMT Bars" />
//                 </div>
//                 <div className="grid-item item-4">
//                   <div className="experience-badge">
//                     <Typography variant="h4">25+</Typography>
//                     <Typography variant="body2">Years of Excellence</Typography>
//                   </div>
//                 </div>
//               </div>
//             </Box>
//           </Stack>
//         </Container>
//       </section>

//       {/* --- OUR PRODUCTS SECTION --- */}
//         <section className="products-section">
//         <Container maxWidth="lg">
//           <Box textAlign="center" mb={6}>
//             <Typography variant="overline" sx={{ color: '#ffcc00', fontWeight: 'bold', letterSpacing: 3 }}>
//               OUR EXPERTISE
//             </Typography>
//             {/* <Typography variant="h2" className="section-title"> */}
//             <Typography variant="h2" className="section-title" sx={{ color: '#eae0e0', fontWeight: 'bold' }}>
//               Our Premium Products
//             </Typography>
//             <div className="title-underline"></div>
//           </Box>

//           <div className="product-grid">
//             {sliderData.map((product, index) => (
//               /* આખું કાર્ડ હવે લિંક તરીકે કામ કરશે */
//               <a href={product.link} className="product-card-link" key={index}>
//                 <div className="product-card">
//                   <div className="product-image">
//                     <img src={product.img} alt={product.title} />
//                     {/* અહીં હવે બટન નથી, માત્ર એક હળવો ઓવરલે આવશે */}
//                     <div className="product-overlay">
//                       {/* <Typography variant="button" sx={{ color: '#fff', fontWeight: 'bold' }}>
//                         View Product →
//                       </Typography> */}
//                     </div>
//                   </div>
//                   <div className="product-info">
//                     <Typography variant="h5" className="product-title">
//                       {product.title}
//                     </Typography>
//                     <Typography variant="body2" className="product-desc">
//                       {product.desc}
//                     </Typography>
//                     <div className="product-footer">
//                       <span className="product-badge" style={{ backgroundColor: product.color + '22', color: product.color }}>
//                         {/* Premium Grade */}
//                         ISO Certified

//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* --- PREMIUM SERVICES SECTION --- */}
//       <section className="services-section">
//         <Container maxWidth="lg">
//           <Box textAlign="center" mb={10}>
//             <Typography variant="overline" className="premium-overline">
//               Our Excellence
//             </Typography>
//             <Typography variant="h2" className="section-title-premium">
//               Superior Industrial Services
//             </Typography>
//             <div className="premium-underline"></div>
//           </Box>

//           <div className="services-container">
//             {[
//               // { title: "Express Logistics", desc: "Reliable 24-hour delivery network across Gujarat for urgent project needs.", icon: "🚚", link: "/services/logistics" },
//               // { title: "Precision Processing", desc: "Customized cutting and bending services as per structural blueprints.", icon: "⚙️", link: "/services/processing" },
//               // { title: "Quality Testing", desc: "Advanced laboratory testing to ensure every ton meets ISI standards.", icon: "🔬", link: "/services/quality" },
//               // { title: "Bulk Solutions", desc: "Dedicated supply chain management for large scale infrastructure projects.", icon: "🏗️", link: "/services/bulk" },
//               // { title: "Technical Support", desc: "On-site expert consultation for material selection and estimation.", icon: "👨‍🏫", link: "/services/support" },
//               // { title: "Material Traceability", desc: "Complete digital tracking of your material from factory to site.", icon: "📋", link: "/services/tracking" }
//               { title: "Express Logistics", desc: "Reliable 24-hour delivery network across Gujarat for urgent project needs.", icon: "🚚", link: "/services" },
//               { title: "Precision Processing", desc: "Customized cutting and bending services as per structural blueprints.", icon: "⚙️", link: "/services" },
//               { title: "Quality Testing", desc: "Advanced laboratory testing to ensure every ton meets ISI standards.", icon: "🔬", link: "/services" },
//               { title: "Bulk Solutions", desc: "Dedicated supply chain management for large scale infrastructure projects.", icon: "🏗️", link: "/services" },
//               { title: "Technical Support", desc: "On-site expert consultation for material selection and estimation.", icon: "👨‍🏫", link: "/services" },
//               { title: "Material Traceability", desc: "Complete digital tracking of your material from factory to site.", icon: "📋", link: "/services" }
//             ].map((service, index) => (
//               <a href={service.link} className="service-card-link" key={index}>
//                 <div className="premium-service-card">
//                   <div className="card-glow"></div>
//                   <div className="service-icon-box">{service.icon}</div>
//                   <Typography variant="h5" className="service-card-title">
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body2" className="service-card-desc">
//                     {service.desc}
//                   </Typography>
//                   <div className="service-learn-more">
//                     Learn More <span>→</span>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </Container>
//       </section>


//       {/* --- PREMIUM PROJECTS SECTION --- */}
//       <section className="projects-section">
//         <Container maxWidth="lg">
//           <Stack direction="row" justifyContent="space-between" alignItems="flex-end" mb={6}>
//             <Box>
//               <Typography variant="overline" className="premium-overline">
//                 Our Milestone Works
//               </Typography>
//               <Typography variant="h2" className="section-title-premium">
//                 Completed Projects
//               </Typography>
//             </Box>
//             <Button
//               href="/projects"
//               className="view-all-projects-btn"
//             >
//               View All Projects
//             </Button>
//           </Stack>

//           <div className="projects-grid">
//             {[
//               {
//                 title: "Skyline Residency",
//                 location: "Ahmedabad, Gujarat",
//                 desc: "Supplied 500+ tons of Premium TMT bars for high-rise residential towers.",
//                 img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
//                 link: "/projects/skyline"
//               },
//               {
//                 title: "Industrial Warehouse",
//                 location: "Sanand GIDC",
//                 desc: "Complete structural steel solutions for a 50,000 sq.ft. mega warehouse.",
//                 img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
//                 link: "/projects/warehouse"
//               },
//               {
//                 title: "Riverfront Bridge",
//                 location: "Surat",
//                 desc: "High-tensile structural beams provided for a major infrastructure project.",
//                 img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
//                 link: "/projects/bridge"
//               },
//               {
//                 title: "Shopping Mall",
//                 location: "Rajkot",
//                 desc: "Custom roofing solutions and MS pipes for modern commercial architecture.",
//                 img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=800",
//                 link: "/projects/mall"
//               }
//             ].map((proj, index) => (
//               <a href={proj.link} className="project-card-link" key={index}>
//                 <div className="premium-project-card">
//                   <img src={proj.img} alt={proj.title} className="project-bg-img" />
//                   <div className="project-content-overlay">
//                     <Typography variant="caption" className="project-location">
//                       📍 {proj.location}
//                     </Typography>
//                     <Typography variant="h4" className="project-title-text">
//                       {proj.title}
//                     </Typography>
//                     <Typography variant="body2" className="project-short-desc">
//                       {proj.desc}
//                     </Typography>
//                     <div className="view-project-link">
//                       View Project <span>→</span>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </Container>
//       </section>


//       {/* --- PREMIUM CLIENT REVIEWS SECTION --- */}
//       <section className="reviews-section">
//         <Container maxWidth="lg">
//           <Box textAlign="center" mb={8}>
//             <Typography variant="overline" className="premium-overline">
//               Testimonials
//             </Typography>
//             <Typography variant="h2" className="section-title-premium">
//               What Our Clients Say
//             </Typography>
//             <div className="premium-underline"></div>
//           </Box>

//           <Swiper
//             spaceBetween={30}
//             centeredSlides={true}
//             autoplay={{ delay: 3500, disableOnInteraction: false }}
//             pagination={{ clickable: true }}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               1024: { slidesPerView: 3 },
//             }}
//             modules={[Autoplay, Pagination]}
//             className="review-swiper"
//           >
//             {[
//               { name: "Rajesh Mehta", role: "Real Estate Developer", text: "SP Iron & Steel has been our trusted partner for 10 years. Their TMT bars are unmatched in quality and strength.", img: "https://i.pravatar.cc/150?u=1" },
//               { name: "Suresh Patel", role: "Civil Contractor", text: "Reliable delivery and transparent pricing. Their MS beams helped us complete our factory project ahead of time.", img: "https://i.pravatar.cc/150?u=2" },
//               { name: "Amit Shah", role: "Structural Engineer", text: "The technical specs provided by them are very accurate. Truly professional service and premium steel quality.", img: "https://i.pravatar.cc/150?u=3" },
//               { name: "Vikram Rathod", role: "Industrial Architect", text: "Impressive range of roofing and structural solutions. Highly recommended for mega infrastructure projects.", img: "https://i.pravatar.cc/150?u=4" }
//             ].map((review, index) => (
//               <SwiperSlide key={index}>
//                 <div className="premium-review-card">
//                   <div className="quote-icon">“</div>
//                   <Typography variant="body1" className="review-text">
//                     {review.text}
//                   </Typography>
//                   <div className="review-profile">
//                     <img src={review.img} alt={review.name} className="reviewer-img" />
//                     <div className="reviewer-info">
//                       <Typography variant="h6" className="reviewer-name">{review.name}</Typography>
//                       <Typography variant="caption" className="reviewer-role">{review.role}</Typography>
//                     </div>
//                   </div>
//                   <div className="star-rating">⭐⭐⭐⭐⭐</div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </Container>
//       </section>

//       {/* --- TOP BRANDS MARQUEE SECTION --- */}
//       <section className="partners-marquee-section">
//         <div className="partners-header">
//           <Typography variant="overline" className="partners-subtitle">
//             Our Strategic Partners & Brands
//           </Typography>
//           <div className="partners-underline"></div>
//         </div>

//         <div className="marquee-outer">
//           <div className="marquee-inner">
//             {[
//               "TATA STEEL", "JINDAL STEEL", "SAIL", "JSW STEEL",
//               "ESSAR STEEL", "ARCELORMITTAL", "VIZAG STEEL", "AM/NS INDIA"
//             ].map((brand, index) => (
//               <div key={index} className="marquee-item">
//                 <span className="marquee-dot">✦</span>
//                 <Typography variant="h3" className="brand-text">
//                   {brand}
//                 </Typography>
//               </div>
//             ))}
//             {/* લૂપ ને સ્મૂધ રાખવા માટે આ જ લિસ્ટ ફરીથી રિપીટ કરવું */}
//             {[
//               "TATA STEEL", "JINDAL STEEL", "SAIL", "JSW STEEL",
//               "ESSAR STEEL", "ARCELORMITTAL", "VIZAG STEEL", "AM/NS INDIA"
//             ].map((brand, index) => (
//               <div key={`dup-${index}`} className="marquee-item">
//                 <span className="marquee-dot">✦</span>
//                 <Typography variant="h3" className="brand-text">
//                   {brand}
//                 </Typography>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </Box>
//   );
// };

// export default Home;




// import React, { useState } from 'react';
// import {
//   Box, Typography, Button, Container, Dialog,
//   DialogTitle, DialogContent, TextField, MenuItem,
//   IconButton, Stack, Fade, Snackbar, Alert
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import CloseIcon from '@mui/icons-material/Close';
// import SendIcon from '@mui/icons-material/Send';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectCreative, Navigation, Pagination } from 'swiper/modules';


// // Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-creative';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import '../styles/Home.css';

import React, { useState } from 'react';
import {
  Box, Typography, Button, Container, Dialog,
  DialogTitle, DialogContent, TextField, MenuItem,
  IconButton, Stack, Fade, Snackbar, Alert
} from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Navigation, Pagination, Mousewheel } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Home.css';


const formInputStyle = {
  bgcolor: '#1e1e1e',
  borderRadius: '8px',
  '& .MuiFilledInput-root': {
    color: '#fff',
    '&:before, &:after': { display: 'none' },
    borderRadius: '8px',
  },
  '& .MuiInputLabel-root': { color: '#888' },
  '& .MuiSelect-icon': { color: '#fff' },
};
const Home = () => {
  const MY_PHONE_NUMBER = "919328649313";

  // --- STATES ---
  const [open, setOpen] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  });

  // --- HANDLERS ---
  const handleOpen = (productName) => {
    setFormData({ ...formData, product: productName || '' });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `*New Inquiry from Website*%0a%0a` +
      `*Name:* ${formData.name}%0a` +
      `*Phone:* ${formData.phone}%0a` +
      `*Product:* ${formData.product}%0a` +
      `*Quantity:* ${formData.quantity}%0a` +
      `*Message:* ${formData.message}`;

    window.open(`https://wa.me/${MY_PHONE_NUMBER}?text=${whatsappMessage}`, "_blank");
    handleClose();
    setShowThanks(true);
    setFormData({ name: '', phone: '', product: '', quantity: '', message: '' });
  };

  // const handleWhatsAppDirect = (productName) => {
  //   const message = `Hello SP Iron & Steel, I am interested in ${productName} Please provide more details and the latest price.`;
  //   window.open(`https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  // };
  const handleWhatsAppDirect = (productName) => {

    const message =
      `Hello SP Iron & Steel, I am interested in ${productName} Please provide more details and the latest price.`;

    const url =
      `https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
    

  };


  const sliderData = [
    { title: "PREMIUM TMT BARS", desc: "Earthquake resistant ISI grade steel for lifetime durability.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200", color: "#ff3366" },
    { title: "STRUCTURAL BEAMS", desc: "Heavy-duty MS Angles & Beams for industrial mega-projects.", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200", color: "#00f2fe" },
    { title: "INDUSTRIAL PIPES", desc: "Precision engineered hollow sections for modern construction.", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200", color: "#ffcc00" },
    { title: "ROOFING SOLUTIONS", desc: "High-quality color coated sheets for weather protection.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200", color: "#a855f7" },
    { title: "MS PLATES", desc: "Premium grade hot-rolled plates for heavy engineering.", img: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1200", color: "#22c55e" }
  ];

  return (
    <Box className="home-root" sx={{ bgcolor: '#0a0a0a', color: '#fff' }}>

      {/* --- 1. PREMIUM CARD SLIDER SECTION --- */}
      <section className="master-slider-section">
        <div className="slider-global-glow"></div>

        {/* <Swiper
          grabCursor={true}
          effect={'creative'}
          centeredSlides={true}
          slidesPerView={'auto'}
          creativeEffect={{
            prev: { shadow: true, translate: ['-120%', 0, -500], rotate: [0, 0, -20] },
            next: { shadow: true, translate: ['120%', 0, -500], rotate: [0, 0, 20] },
          }}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          modules={[EffectCreative, Autoplay, Navigation, Pagination]}
          className="premium-cards-swiper"
        > */}
        <Swiper
          grabCursor={true}
          effect={'creative'}
          centeredSlides={true}
          slidesPerView={'auto'}

          simulateTouch={true}
          longSwipes={false}
          allowTouchMove={true}
          touchStartPreventDefault={false}
          preventClicks={false}
          preventClicksPropagation={false}
          

          creativeEffect={{
            prev: { shadow: true, translate: ['-120%', 0, -500], rotate: [0, 0, -20] },
            next: { shadow: true, translate: ['120%', 0, -500], rotate: [0, 0, 20] },
          }}

          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}

          modules={[EffectCreative, Autoplay, Navigation, Pagination]}
          className="premium-cards-swiper"
        >

          {sliderData.map((slide, index) => (
            <SwiperSlide key={index} className="card-slide">
              <motion.div
                className="hero-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                {/* Image Wrap */}
                <div className="card-image-wrapper">
                  <img src={slide.img} alt={slide.title} className="card-img-main" />
                  <div className="card-overlay-gradient"></div>
                </div>

                {/* Content Overlay */}
                <div className="card-floating-content">
                  <Typography variant="overline" className="card-overline" sx={{ color: slide.color }}>
                    Strength Redefined
                  </Typography>
                  <Typography variant="h2" className="card-title">
                    {slide.title}
                  </Typography>
                  <Typography variant="body1" className="card-description">
                    {slide.desc}
                  </Typography>

                  <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                    {/* <Button
                      variant="contained"
                      className="card-btn-primary"
                      sx={{ background: slide.color, '&:hover': { background: slide.color, opacity: 0.9 } }}
                      onClick={() => handleOpen(slide.title)}
                    >
                      Get Quote
                    </Button> */}
                    <Button
                      variant="contained"
                      className="card-btn-primary"
                      sx={{
                        background: slide.color,
                        '&:hover': { background: slide.color, opacity: 0.9 }
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpen(slide.title);
                      }}
                    >
                      Get Quote
                    </Button>


                    {/* <Button
                      variant="outlined"
                      className="card-btn-wa"
                      startIcon={<WhatsAppIcon />}
                      onClick={() => handleWhatsAppDirect(slide.title)}
                    >
                      WhatsApp
                    </Button> */}
                    <Button
                      variant="outlined"
                      className="card-btn-wa"
                      startIcon={<WhatsAppIcon />}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsAppDirect(slide.title);
                      }}
                    >
                      WhatsApp
                    </Button>

                  </Stack>
                  
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* --- ABOUT US SECTION --- */}
      <section className="about-section">
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={6}
            alignItems="center"
          >
            {/* Left Side: Content */}
            <Box className="about-content" flex={1}>
              <Typography variant="overline" sx={{ color: '#ff3366', fontWeight: 'bold', letterSpacing: 2 }}>
                Since 1998
              </Typography>
              <Typography variant="h2" className="section-title">
                Strength & Trust in Every Ton
              </Typography>
              <Typography variant="body1" className="about-text">
                SP Iron & Steel Industries has been a cornerstone in the steel industry for over two decades.
                We specialize in providing high-quality TMT bars, structural steel, and roofing solutions
                that empower modern construction. Our commitment to transparency, timely delivery, and
                unmatched quality has made us Gujarat's most trusted steel partner.
              </Typography>
              <Stack spacing={2} sx={{ my: 4 }}>
                <Box className="feature-item">✔ ISI Certified Premium Quality Steel</Box>
                <Box className="feature-item">✔ 24-Hour Site Delivery Across Gujarat</Box>
                <Box className="feature-item">✔ Most Competitive Market Rates</Box>
              </Stack>
              <Button
                variant="outlined"
                className="about-link-btn"
                href="/about" // તમારી About પેજની લિંક
              >
                Read Our Full Story
              </Button>
            </Box>
            {/* Right Side: Photo Grid */}
            <Box className="about-grid" flex={1}>
              <div className="grid-container">
                <div className="grid-item item-1">
                  <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=600" alt="Steel Factory" />
                </div>
                <div className="grid-item item-2">
                  <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600" alt="Construction" />
                </div>
                <div className="grid-item item-3">
                  <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600" alt="TMT Bars" />
                </div>
                <div className="grid-item item-4">
                  <div className="experience-badge">
                    <Typography variant="h4">25+</Typography>
                    <Typography variant="body2">Years of Excellence</Typography>
                  </div>
                </div>
              </div>
            </Box>
          </Stack>
        </Container>
      </section>
      {/* --- OUR PRODUCTS SECTION --- */}
      <section className="products-section">
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="overline" sx={{ color: '#ffcc00', fontWeight: 'bold', letterSpacing: 3 }}>
              OUR EXPERTISE
            </Typography>
            {/* <Typography variant="h2" className="section-title"> */}
            <Typography variant="h2" className="section-title" sx={{ color: '#eae0e0', fontWeight: 'bold' }}>
              Our Premium Products
            </Typography>
            <div className="title-underline"></div>
          </Box>
          <div className="product-grid">
            {sliderData.map((product, index) => (
              /* આખું કાર્ડ હવે લિંક તરીકે કામ કરશે */
              <a href={product.link} className="product-card-link" key={index}>
                <div className="product-card">
                  <div className="product-image">
                    <img src={product.img} alt={product.title} />
                    {/* અહીં હવે બટન નથી, માત્ર એક હળવો ઓવરલે આવશે */}
                    <div className="product-overlay">
                      {/* <Typography variant="button" sx={{ color: '#fff', fontWeight: 'bold' }}>
                         View Product →
                       </Typography> */}
                    </div>
                  </div>
                  <div className="product-info">
                    <Typography variant="h5" className="product-title">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" className="product-desc">
                      {product.desc}
                    </Typography>
                    <div className="product-footer">
                      <span className="product-badge" style={{ backgroundColor: product.color + '22', color: product.color }}>
                        {/* Premium Grade */}
                        ISO Certifie
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>
      {/* --- PREMIUM SERVICES SECTION --- */}
      <section className="services-section">
        <Container maxWidth="lg">
          <Box textAlign="center" mb={10}>
            <Typography variant="overline" className="premium-overline">
              Our Excellence
            </Typography>
            <Typography variant="h2" className="section-title-premium">
              Superior Industrial Services
            </Typography>
            <div className="premium-underline"></div>
          </Box>
          <div className="services-container">
            {[
              { title: "Express Logistics", desc: "Reliable 24-hour delivery network across Gujarat for urgent project needs.", icon: "🚚", link: "/services" },
              { title: "Precision Processing", desc: "Customized cutting and bending services as per structural blueprints.", icon: "⚙️", link: "/services" },
              { title: "Quality Testing", desc: "Advanced laboratory testing to ensure every ton meets ISI standards.", icon: "🔬", link: "/services" },
              { title: "Bulk Solutions", desc: "Dedicated supply chain management for large scale infrastructure projects.", icon: "🏗️", link: "/services" },
              { title: "Technical Support", desc: "On-site expert consultation for material selection and estimation.", icon: "👨‍🏫", link: "/services" },
              { title: "Material Traceability", desc: "Complete digital tracking of your material from factory to site.", icon: "📋", link: "/services" }
            ].map((service, index) => (
              <a href={service.link} className="service-card-link" key={index}>
                <div className="premium-service-card">
                  <div className="card-glow"></div>
                  <div className="service-icon-box">{service.icon}</div>
                  <Typography variant="h5" className="service-card-title">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" className="service-card-desc">
                    {service.desc}
                  </Typography>
                  <div className="service-learn-more">
                    Learn More <span>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>
      {/* --- PREMIUM PROJECTS SECTION --- */}
      <section className="projects-section">
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" alignItems="flex-end" mb={6}>
            <Box>
              <Typography variant="overline" className="premium-overline">
                Our Milestone Works
              </Typography>
              <Typography variant="h2" className="section-title-premium">
                Completed Projects
              </Typography>
            </Box>
            <Button
              href="/projects"
              className="view-all-projects-btn"
            >
              View All Projects
            </Button>
          </Stack>
          <div className="projects-grid">
            {[
              {
                title: "Skyline Residency",
                location: "Ahmedabad, Gujarat",
                desc: "Supplied 500+ tons of Premium TMT bars for high-rise residential towers.",
                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
                link: "/projects"
              },
              {
                title: "Industrial Warehouse",
                location: "Sanand GIDC",
                desc: "Complete structural steel solutions for a 50,000 sq.ft. mega warehouse.",
                img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
                link: "/projects"
              },
              {
                title: "Riverfront Bridge",
                location: "Surat",
                desc: "High-tensile structural beams provided for a major infrastructure project.",
                img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
                link: "/projects"
              },
              {
                title: "Shopping Mall",
                location: "Rajkot",
                desc: "Custom roofing solutions and MS pipes for modern commercial architecture.",
                img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=800",
                link: "/projects"
              }
            ].map((proj, index) => (
              <a href={proj.link} className="project-card-link" key={index}>
                <div className="premium-project-card">
                  <img src={proj.img} alt={proj.title} className="project-bg-img" />
                  <div className="project-content-overlay">
                    <Typography variant="caption" className="project-location">
                      📍 {proj.location}
                    </Typography>
                    <Typography variant="h4" className="project-title-text">
                      {proj.title}
                    </Typography>
                    <Typography variant="body2" className="project-short-desc">
                      {proj.desc}
                    </Typography>
                    <div className="view-project-link">
                      View Project <span>→</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>
      {/* --- PREMIUM CLIENT REVIEWS SECTION --- */}
      <section className="reviews-section">
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography variant="overline" className="premium-overline">
              Testimonials
            </Typography>
            <Typography variant="h2" className="section-title-premium">
              What Our Clients Say
            </Typography>
            <div className="premium-underline"></div>
          </Box>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay, Pagination]}
            className="review-swiper"
          >
            {[
              { name: "Rajesh Mehta", role: "Real Estate Developer", text: "SP Iron & Steel has been our trusted partner for 10 years. Their TMT bars are unmatched in quality and strength.", img: "https://i.pravatar.cc/150?u=1" },
              { name: "Suresh Patel", role: "Civil Contractor", text: "Reliable delivery and transparent pricing. Their MS beams helped us complete our factory project ahead of time.", img: "https://i.pravatar.cc/150?u=2" },
              { name: "Amit Shah", role: "Structural Engineer", text: "The technical specs provided by them are very accurate. Truly professional service and premium steel quality.", img: "https://i.pravatar.cc/150?u=3" },
              { name: "Vikram Rathod", role: "Industrial Architect", text: "Impressive range of roofing and structural solutions. Highly recommended for mega infrastructure projects.", img: "https://i.pravatar.cc/150?u=4" }
            ].map((review, index) => (
              <SwiperSlide key={index}>
                <div className="premium-review-card">
                  <div className="quote-icon">“</div>
                  <Typography variant="body1" className="review-text">
                    {review.text}
                  </Typography>
                  <div className="review-profile">
                    <img src={review.img} alt={review.name} className="reviewer-img" />
                    <div className="reviewer-info">
                      <Typography variant="h6" className="reviewer-name">{review.name}</Typography>
                      <Typography variant="caption" className="reviewer-role">{review.role}</Typography>
                    </div>
                  </div>
                  <div className="star-rating">⭐⭐⭐⭐⭐</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
      {/* --- TOP BRANDS MARQUEE SECTION --- */}
      <section className="partners-marquee-section">
        <div className="partners-header">
          <Typography variant="overline" className="partners-subtitle">
            Our Strategic Partners & Brands
          </Typography>
          <div className="partners-underline"></div>
        </div>
        <div className="marquee-outer">
          <div className="marquee-inner">
            {[
              "TATA STEEL", "JINDAL STEEL", "SAIL", "JSW STEEL",
              "ESSAR STEEL", "ARCELORMITTAL", "VIZAG STEEL", "AM/NS INDIA"
            ].map((brand, index) => (
              <div key={index} className="marquee-item">
                <span className="marquee-dot">✦</span>
                <Typography variant="h3" className="brand-text">
                  {brand}
                </Typography>
              </div>
            ))}
            {/* લૂપ ને સ્મૂધ રાખવા માટે આ જ લિસ્ટ ફરીથી રિપીટ કરવું */}
            {[
              "TATA STEEL", "JINDAL STEEL", "SAIL", "JSW STEEL",
              "ESSAR STEEL", "ARCELORMITTAL", "VIZAG STEEL", "AM/NS INDIA"
            ].map((brand, index) => (
              <div key={`dup-${index}`} className="marquee-item">
                <span className="marquee-dot">✦</span>
                <Typography variant="h3" className="brand-text">
                  {brand}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* </Box>
   );
 }
 export default Home; */}
      {/* ... તમારા બાકીના કોડ પછી (છેલ્લા </Box> ની ઉપર) આટલું ઉમેરી દો: */}

      {/* --- INQUIRY DIALOG (બટન દબાવતા આ ફોર્મ ખુલશે) --- */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{ sx: { bgcolor: '#121212', color: '#fff', borderRadius: '15px' } }}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333' }}>
          Request a Quote
          <IconButton onClick={handleClose} sx={{ color: '#fff' }}><CloseIcon /></IconButton>
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <form onSubmit={handleFormSubmit}>
            <Stack spacing={3}>
              <TextField
                label="Full Name" name="name" fullWidth variant="filled" required
                sx={formInputStyle} value={formData.name} onChange={handleChange}
              />
              <TextField
                label="Phone Number" name="phone" fullWidth variant="filled" required
                sx={formInputStyle} value={formData.phone} onChange={handleChange}
              />
              <TextField
                select label="Product" name="product" fullWidth variant="filled" required
                sx={formInputStyle} value={formData.product} onChange={handleChange}
              >
                {sliderData.map((item) => (
                  <MenuItem key={item.title} value={item.title} sx={{ color: '#000' }}>{item.title}</MenuItem>
                ))}
              </TextField>
              <TextField
                label="Quantity (Approx)" name="quantity" fullWidth variant="filled"
                sx={formInputStyle} value={formData.quantity} onChange={handleChange}
              />
              <TextField
                label="Message" name="message" fullWidth multiline rows={3} variant="filled"
                sx={formInputStyle} value={formData.message} onChange={handleChange}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                endIcon={<SendIcon />}
                sx={{ bgcolor: '#ff3366', py: 1.5, fontWeight: 'bold', '&:hover': { bgcolor: '#e62e5c' } }}
              >
                Send Inquiry via WhatsApp
              </Button>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>

      {/* --- SUCCESS NOTIFICATION --- */}
      <Snackbar open={showThanks} autoHideDuration={4000} onClose={() => setShowThanks(false)}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Thank you! Redirecting to WhatsApp...
        </Alert>
      </Snackbar>

    </Box> // આ મેઈન Box ક્લોઝ થાય છે
  );
}

export default Home;
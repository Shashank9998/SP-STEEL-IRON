import React, { useEffect, useState } from 'react';
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
// import { Autoplay, EffectCreative, Navigation, Pagination, Mousewheel } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  EffectCreative,
  EffectCoverflow,
  Navigation,
  Pagination
} from 'swiper/modules';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Home.css';
import { useLocation } from 'react-router-dom';


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
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    // LocalStorage માંથી યુઝરે સબમિટ કરેલા રિવ્યુ લોડ કરો
    const savedReviews = JSON.parse(localStorage.getItem('user_reviews') || '[]');

    // ડિફોલ્ટ રિવ્યુ જે તમે પહેલેથી રાખવા માંગો છો
    const defaultReviews = [
      { name: "Rajesh Mehta", role: "Real Estate Developer", text: "SP Iron & Steel has been our trusted partner for 10 years.", img: "https://i.pravatar.cc/150?u=1", rating: 5 },
      { name: "Suresh Patel", role: "Civil Contractor", text: "Reliable delivery and transparent pricing.", img: "https://i.pravatar.cc/150?u=2", rating: 4 }
    ];

    // બંને રિવ્યુને ભેગા કરો (નવા રિવ્યુ પહેલા દેખાશે)
    setUserReviews([...savedReviews, ...defaultReviews]);
  }, []);

  const location = useLocation();

  useEffect(() => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });

  }, [location.pathname]);


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
      {/* --- 1. NEW ATTRACTIVE SLIDER SECTION --- */}
      <section className="master-slider-section" style={{ background: '#0a0a0a', padding: '20px 0' }}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
          className="premium-cards-swiper"
          style={{ width: '100%', padding: '30px 0' }}
        >
          {sliderData.map((slide, index) => (
            <SwiperSlide key={index} className="card-slide" style={{ width: 'auto' }}>
              <motion.div
                className="hero-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                  width: window.innerWidth < 600 ? '320px' : '800px', // Mobile vs Desktop width
                  height: window.innerWidth < 600 ? '450px' : '500px',
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}
              >
                {/* Image */}
                <img
                  src={slide.img}
                  alt={slide.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* Overlay Gradient */}
                <div className="card-overlay-gradient" style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
                }}></div>

                {/* Content */}
                <div className="card-floating-content" style={{
                  position: 'absolute', bottom: '30px', left: '30px', right: '30px'
                }}>
                  <Typography variant="overline" sx={{ color: slide.color, fontWeight: 'bold' }}>
                    Premium Quality
                  </Typography>
                  <Typography variant={window.innerWidth < 600 ? "h4" : "h2"} sx={{ color: '#fff', mb: 1 }}>
                    {slide.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#ccc', mb: 3, maxWidth: '500px' }}>
                    {slide.desc}
                  </Typography>

                  <Stack direction={window.innerWidth < 600 ? "column" : "row"} spacing={2}>
                    <Button
                      variant="contained"
                      startIcon={<RequestQuoteIcon />}
                      className="card-btn-primary"
                      sx={{
                        bgcolor: slide.color,
                        borderRadius: '50px',
                        px: 4,
                        '&:hover': { bgcolor: slide.color }
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpen(slide.title);
                      }}
                    >
                      Get Quote
                    </Button>

                    <Button
                      variant="outlined"
                      startIcon={<WhatsAppIcon />}
                      className="card-btn-wa"
                      sx={{
                        color: '#25D366',
                        borderColor: '#25D366',
                        borderRadius: '50px',
                        px: 4
                      }}
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
              <a href={product.link} className="product-card-link" key={index}>
                <div className="product-card">
                  <div className="product-image">
                    <img src={product.img} alt={product.title} />
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
            centeredSlides={false}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay, Pagination]}
            className="review-swiper"
          >
            {userReviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="premium-review-card">
                  <div className="quote-icon">“</div>
                  <Typography variant="body1" className="review-text">
                    {/* અહીં ચેક કરો જો comment હોય તો એ બતાવો, નહીતર text */}
                    {review.comment || review.text}
                  </Typography>
                  <div className="review-profile">
                    <img
                      src={review.img || `https://ui-avatars.com/api/?name=${review.name}&background=ffcc00&color=000`}
                      alt={review.name}
                      className="reviewer-img"
                    />
                    <div className="reviewer-info">
                      <Typography variant="h6" className="reviewer-name">{review.name}</Typography>
                      <Typography variant="caption" className="reviewer-role">
                        {review.company || review.role || "Client"}
                      </Typography>
                    </div>
                  </div>
                  <div className="star-rating">
                    {"⭐".repeat(review.rating || 5)}
                  </div>
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
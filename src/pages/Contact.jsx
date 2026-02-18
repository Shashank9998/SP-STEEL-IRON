// import React from 'react';
// import { TextField, MenuItem, Button, IconButton, Typography } from '@mui/material';
// import { Send, LocationOn, Phone, Email, LinkedIn, WhatsApp, Instagram } from '@mui/icons-material';
// import '../styles/Contact.css';

// const ContactPage = () => {
//   return (
//     <div className="contact-wrapper py-5">
//       <div className="container shadow-lg bg-dark-panel p-0 overflow-hidden">
//         <div className="row g-0">
          
//           {/* LEFT SIDE: CONTENT (Bootstrap col-md-5) */}
//           <div className="col-md-5 contact-sidebar p-5 text-white">
//             <span className="text-yellow fw-bold tracking-widest">GIDC SANAND • PHASE II</span>
//             <h1 className="display-4 fw-black mt-3 mb-4">
//               LET'S <br /><span className="text-outline">CONNECT.</span>
//             </h1>
//             <p className="text-muted mb-5">
//               Request a technical quote or visit our facility for structural steel consultations.
//             </p>

//             <div className="contact-info-stack">
//               <div className="d-flex align-items-center mb-4">
//                 <LocationOn className="text-yellow me-3" fontSize="large" />
//                 <div>
//                   <h6 className="mb-0 text-uppercase small text-secondary">Our Factory</h6>
//                   <p className="mb-0">Plot 123, Sanand GIDC, Ahmedabad</p>
//                 </div>
//               </div>

//               <div className="d-flex align-items-center mb-4">
//                 <Phone className="text-yellow me-3" fontSize="large" />
//                 <div>
//                   <h6 className="mb-0 text-uppercase small text-secondary">Call Support</h6>
//                   <p className="mb-0">+91 98765 43210</p>
//                 </div>
//               </div>

//               <div className="d-flex align-items-center mb-4">
//                 <Email className="text-yellow me-3" fontSize="large" />
//                 <div>
//                   <h6 className="mb-0 text-uppercase small text-secondary">Email Enquiry</h6>
//                   <p className="mb-0">info@steelsolutions.com</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-5">
//               <IconButton className="social-icon"><LinkedIn /></IconButton>
//               <IconButton className="social-icon"><WhatsApp /></IconButton>
//               <IconButton className="social-icon"><Instagram /></IconButton>
//             </div>
//           </div>

//           {/* RIGHT SIDE: ENQUIRY FORM (Bootstrap col-md-7) */}
//           <div className="col-md-7 form-container p-5 bg-form-dark">
//             <Typography variant="h4" className="text-yellow fw-bold mb-4">TECHNICAL ENQUIRY</Typography>
            
//             <form className="row g-4">
//               <div className="col-md-6">
//                 <TextField fullWidth label="Full Name *" variant="filled" className="mui-input" />
//               </div>
//               <div className="col-md-6">
//                 <TextField fullWidth label="Phone Number *" variant="filled" className="mui-input" />
//               </div>
//               <div className="col-md-6">
//                 <TextField fullWidth label="Official Email *" variant="filled" className="mui-input" />
//               </div>
//               <div className="col-md-6">
//                 <TextField fullWidth label="Company Name" variant="filled" className="mui-input" />
//               </div>
//               <div className="col-md-12">
//                 <TextField select fullWidth label="Service Required" variant="filled" className="mui-input" defaultValue="Structural Steel">
//                   <MenuItem value="Structural Steel">Industrial Structural Steel</MenuItem>
//                   <MenuItem value="Solar Mounting">Solar Mounting Structures</MenuItem>
//                   <MenuItem value="Warehouse">PEB Warehouse Construction</MenuItem>
//                 </TextField>
//               </div>
//               <div className="col-md-12">
//                 <TextField fullWidth multiline rows={4} label="Project Specifications" variant="filled" className="mui-input" />
//               </div>
//               <div className="col-12 mt-4">
//                 <Button fullWidth variant="contained" className="submit-btn py-3" endIcon={<Send />}>
//                   Submit Requirements
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* BOTTOM: MAP SECTION */}
//       <div className="container mt-4">
//         <div className="map-holder rounded overflow-hidden shadow">
//           <iframe 
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14692.174828624135!2d72.365313!3d22.984534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e967da3446059%3A0x67341334f31c77f0!2sSanand%20GIDC!5e0!3m2!1sen!2sin!4v1700000000000" 
//             width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy">
//           </iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;


import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Button, IconButton, Typography, Box } from '@mui/material';
import { Send, LocationOn, Phone, Email, LinkedIn, WhatsApp, Instagram, CheckCircle } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    user_name: '', user_phone: '', user_email: '', 
    company_name: '', project_type: 'Structural Steel', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Store in Local Storage
    const existingEnquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
    existingEnquiries.push({ ...formData, date: new Date().toLocaleString() });
    localStorage.setItem('enquiries', JSON.stringify(existingEnquiries));

    // 2. Trigger Success Animation
    setIsSubmitted(true);

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ user_name: '', user_phone: '', user_email: '', company_name: '', project_type: 'Structural Steel', message: '' });
    }, 5000);
  };

  return (
    <div className="contact-wrapper py-5">
      <div className="container shadow-2xl main-glass-card p-0">
        <div className="row g-0">
          
          {/* LEFT SIDE: CONTENT */}
          <div className="col-lg-5 contact-sidebar p-5 text-white">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="badge rounded-pill bg-yellow text-dark px-3 py-2 mb-3">SANAND GIDC PHASE-II</span>
              <h1 className="display-4 fw-black mb-4">ENGINEERING <br /><span className="text-outline">EXCELLENCE.</span></h1>
              <p className="text-secondary mb-5">Precision-crafted structural solutions for India's industrial backbone.</p>

              <div className="contact-info-stack">
                {[
                  { icon: <LocationOn />, label: "Location", val: "Plot 123, Sanand GIDC, Ahmedabad" },
                  { icon: <Phone />, label: "Call Us", val: "+91 98765 43210" },
                  { icon: <Email />, label: "Email", val: "sales@steelsolutions.com" }
                ].map((item, index) => (
                  <div className="d-flex align-items-center mb-4 info-hover-card" key={index}>
                    <div className="icon-box me-3">{item.icon}</div>
                    <div>
                      <h6 className="mb-0 text-uppercase small text-yellow">{item.label}</h6>
                      <p className="mb-0 text-white-50 small">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: ENQUIRY FORM */}
          <div className="col-lg-7 form-container p-5 position-relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <Typography variant="h4" className="text-white fw-bold mb-2">Technical Enquiry</Typography>
                  <p className="text-muted mb-4 small">Fields marked with * are mandatory for a technical quote.</p>
                  
                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                      <TextField fullWidth name="user_name" value={formData.user_name} onChange={handleChange} label="Full Name *" variant="filled" className="mui-input" required />
                    </div>
                    <div className="col-md-6">
                      <TextField fullWidth name="user_phone" value={formData.user_phone} onChange={handleChange} label="Phone Number *" variant="filled" className="mui-input" required />
                    </div>
                    <div className="col-md-12">
                      <TextField fullWidth name="user_email" value={formData.user_email} onChange={handleChange} label="Official Email *" variant="filled" className="mui-input" required />
                    </div>
                    <div className="col-md-12">
                      <TextField fullWidth name="company_name" value={formData.company_name} onChange={handleChange} label="Company Name" variant="filled" className="mui-input" />
                    </div>
                    <div className="col-md-12">
                      <TextField select fullWidth name="project_type" value={formData.project_type} onChange={handleChange} label="Project Category" variant="filled" className="mui-input">
                        <MenuItem value="Structural Steel">Industrial Structural Steel</MenuItem>
                        <MenuItem value="Solar Mounting">Solar Mounting Structures</MenuItem>
                        <MenuItem value="Warehouse">PEB Warehouse Construction</MenuItem>
                        <MenuItem value="Custom">Custom Fabrication</MenuItem>
                        <MenuItem value="Consultation">Consultation Request</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                        
                        
                      </TextField>
                    </div>
                    <div className="col-md-12">
                      <TextField fullWidth name="message" value={formData.message} onChange={handleChange} multiline rows={3} label="Technical Specifications" variant="filled" className="mui-input" required />
                    </div>
                    <div className="col-12 mt-4">
                      <Button type="submit" fullWidth variant="contained" className="submit-btn py-3" endIcon={<Send />}>
                        Request Quotation
                      </Button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.5 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  className="success-overlay d-flex flex-column align-items-center justify-content-center h-100 text-center"
                >
                  <CheckCircle sx={{ fontSize: 100, color: '#ffcc00' }} />
                  <h2 className="text-white mt-4">Enquiry Stored!</h2>
                  <p className="text-muted">Our engineering team will review your specs and contact you shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="container mt-5">
        <div className="map-glass rounded-lg overflow-hidden p-2">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14691.332304953457!2d72.36879135!3d22.99318855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e966453965d13%3A0x498a49c670a05a8d!2sGIDC%20Sanand%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1700000000000" 
            width="100%" height="450" style={{ border: 0, borderRadius: '15px' }} allowFullScreen="" loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
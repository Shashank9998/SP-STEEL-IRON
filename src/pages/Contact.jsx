import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Button, IconButton, Typography, Box } from '@mui/material';
import { Send, LocationOn, Phone, Email, LinkedIn, WhatsApp, Instagram, CheckCircle } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

import '../styles/Contact.css';
import { useLocation } from 'react-router-dom';

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
  // નવા રિવ્યુ માટેનું સ્ટેટ
  const [newReview, setNewReview] = useState({ name: '', company: '', rating: 0, comment: '' });
  const [hover, setHover] = useState(0); // સ્ટાર હોવર ઇફેક્ટ માટે

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const reviewData = {
      id: Date.now(), // Unique ID
      name: newReview.name,
      company: newReview.company,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toLocaleDateString()
    };


    const existingReviews = JSON.parse(localStorage.getItem('user_reviews') || '[]');

    const updatedReviews = [reviewData, ...existingReviews];

    localStorage.setItem('user_reviews', JSON.stringify(updatedReviews));

    toast.success("Thank you! Your review has been added to our home page.");
    setNewReview({ name: '', company: '', rating: 0, comment: '' });
  };


  const location = useLocation();

  useEffect(() => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });

  }, [location.pathname]);

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

          <div className="col-lg-7 form-container p-5 position-relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <div className="mb-4">
                    <Typography variant="h4" className="text-white fw-bold mb-1">
                      Technical <span className="text-yellow">Enquiry</span>
                    </Typography>
                    <p className="text-light-50" style={{ color: 'lightgray' }}>Precision engineering starts with a detailed brief.</p>
                  </div>

                  <form className="row g-4" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                      <TextField fullWidth name="user_name" value={formData.user_name} onChange={handleChange}
                        label="Full Name" variant="outlined" className="modern-input" required />
                    </div>
                    <div className="col-md-6">
                      <TextField fullWidth name="user_phone" value={formData.user_phone} onChange={handleChange}
                        label="Phone Number" variant="outlined" className="modern-input" required />
                    </div>
                    <div className="col-md-12">
                      <TextField fullWidth name="user_email" value={formData.user_email} onChange={handleChange}
                        label="Official Email Address" variant="outlined" className="modern-input" required />
                    </div>
                    <div className="col-md-12">
                      <TextField fullWidth name="company_name" value={formData.company_name} onChange={handleChange}
                        label="Company Name" variant="outlined" className="modern-input" />
                    </div>
                    <div className="col-md-12">
                      <TextField select fullWidth name="project_type" value={formData.project_type} onChange={handleChange}
                        label="Project Category" variant="outlined" className="modern-input">
                        <MenuItem value="Structural Steel">Industrial Structural Steel</MenuItem>
                        <MenuItem value="Solar Mounting">Solar Mounting Structures</MenuItem>
                        <MenuItem value="Warehouse">PEB Warehouse Construction</MenuItem>
                        <MenuItem value="Custom">Custom Fabrication</MenuItem>
                        <MenuItem value="Consultation">Consultation Request</MenuItem>
                      </TextField>
                    </div>
                    <div className="col-md-12">
                      <TextField fullWidth name="message" value={formData.message} onChange={handleChange}
                        multiline rows={3} label="Technical Specifications (Load, Dimensions, etc.)"
                        variant="outlined" className="modern-input" required />
                    </div>
                    <div className="col-12 mt-4">
                      <Button type="submit" fullWidth className="main-submit-btn">
                        Request Quotation <Send style={{ marginLeft: '10px', fontSize: '18px' }} />
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
                  <div className="success-icon-circle">
                    <CheckCircle sx={{ fontSize: 80, color: '#ffcc00' }} />
                  </div>
                  <h2 className="text-white mt-4 fw-bold">Enquiry Received!</h2>
                  <p className="text-white-50">Our engineering lead will review your technical specs <br /> and get back to you within 24 hours.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>


      <div className="container mt-5 mb-5">
        <div className="row g-4 align-items-center">

          {/* LEFT SIDE: REVIEW FORM */}
          <div className="col-lg-6">
            <div className="review-form-card p-4 shadow-lg">
              <Typography variant="h5" className="text-white fw-bold mb-3">
                Leave a <span className="text-yellow">Review</span>
              </Typography>

              <form onSubmit={handleReviewSubmit}>
                {/* STAR RATING INTERACTION */}
                <div className="star-rating-box mb-4 p-3 rounded-3 text-center">
                  <p className="text-white-50 small mb-2 text-uppercase">Rate Your Experience</p>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <IconButton
                      key={star}
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      sx={{
                        transition: '0.3s',
                        transform: (hover || newReview.rating) >= star ? 'scale(1.2)' : 'scale(1)',
                        color: (hover || newReview.rating) >= star ? '#ffcc00' : 'rgba(167, 167, 167, 0.1)'
                      }}
                    >
                      <span style={{ fontSize: '2.5rem' }}>★</span>
                    </IconButton>
                  ))}
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <TextField
                      fullWidth label="Full Name" variant="outlined" className="review-input"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      fullWidth label="Company Name" variant="outlined" className="review-input"
                      value={newReview.company}
                      onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
                    />
                  </div>
                  <div className="col-12">
                    <TextField
                      fullWidth multiline rows={3}
                      label="Your Feedback"
                      placeholder="Tell us about our service quality and technical expertise..."
                      variant="outlined" className="review-input"
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      required
                    />
                  </div>
                  {/* <div className="col-12">
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: '#e6b800' }} 
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="btn btn-yellow w-100 py-3 fw-bold mt-2"
                >
                  SUBMIT REVIEW
                </motion.button>
              </div> */}
                  <div className="col-12 mt-4">
                    {/* <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="btn-yellow"
                            disabled={newReview.rating === 0}
                          >
                            {newReview.rating === 0 ? "PLEASE SELECT A RATING" : "SUBMIT REVIEW"}
                          </motion.button> */}
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="btn-yellow"
                      disabled={newReview.rating === 0 || !newReview.name} // રેટિંગ વગર બટન કામ નહીં કરે
                    >
                      SUBMIT REVIEW
                    </motion.button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE: CONTENT & STATS */}
          <div className="col-lg-6 ps-lg-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="display-6 fw-bold text-white mb-3">
                Your Feedback <br />
                <span className="text-yellow">Powers Our Innovation.</span>
              </h2>
              <p className="text-secondary leading-relaxed">
                We strive for perfection in every structural project. Your insights help us
                refine our engineering processes and maintain our standard of excellence
                across India's industrial landscape.
              </p>

              <div className="d-flex gap-4 mt-4">
                <div className="stat-box">
                  <h3 className="text-yellow mb-0 fw-bold">500+</h3>
                  <small className="text-white-50 text-uppercase">Projects Delivered</small>
                </div>
                <div className="stat-box">
                  <h3 className="text-yellow mb-0 fw-bold">4.9/5</h3>
                  <small className="text-white-50 text-uppercase">Client Rating</small>
                </div>
              </div>
            </motion.div>
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
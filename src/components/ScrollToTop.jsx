import React, { useState, useEffect } from 'react';
import { KeyboardArrowUp } from '@mui/icons-material';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      // કેટલું સ્ક્રોલ થયું તેની ગણતરી
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progressValue = (scrollTop / scrollHeight) * 100;
      setProgress(progressValue);

      // 200px પછી બટન બતાવવું
      if (scrollTop > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SVG સર્કલની ગણતરી (Circumference)
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div 
      className={`unique-scroll-container ${isVisible ? 'active' : ''}`} 
      onClick={scrollToTop}
    >
      <svg className="progress-svg" width="50" height="50" viewBox="0 0 50 50">
        <circle
          className="progress-circle-bg"
          cx="25"
          cy="25"
          r={radius}
        />
        <circle
          className="progress-circle-bar"
          cx="25"
          cy="25"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <div className="scroll-icon-box">
        <KeyboardArrowUp />
      </div>
    </div>
  );
};

export default ScrollToTop;
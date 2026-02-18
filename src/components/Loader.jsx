import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="steel-circle"></div>
        <div className="loader-text">
          <span className="brand-l">SP</span>
          <span className="line"></span>
          <span className="status">FORGING EXCELLENCE</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
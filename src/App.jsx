// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Layout Components
// // import Header from './components/Header';
// import Header from './components/Header';
// import Footer from './components/Footer';

// // Pages
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Products from './pages/Products';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';

// // Styles
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Header />
        
//         <main className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/contact" element={<Contact />} />
            
//             {/* Catch-all route for 404 Page */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </main>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// // Layout Components
// import Header from './components/Header';
// import { ProductProvider } from './context/ProductContext';
// // Pages - Aa badha pages na folder ane file hovvi joie
// // Jo file na hoy to niche step 2 ma dummy code che te nakho
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Products from './pages/Products';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

// // Styles
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './components/Footer';
// import ScrollToTop from './components/ScrollToTop';
// import Loader from './components/Loader';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import Register from './pages/Register';
// import Login from './pages/Login';

// const PageWrapper = ({ children }) => {
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();

//   useEffect(() => {
//     setLoading(true);
//     // દરેક પેજ બદલાતી વખતે લોડર 1.5 થી 2 સેકન્ડ દેખાશે
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, [location]);

//   return loading ? <Loader /> : children;
// };

// function App() {
//   return (
   
   
//     <ProductProvider>
//     <Router>
//       <div className="app-container">
        
//         {/* Header Router ni andar j hovvo joie */}
//         <Header />
        
//         <main className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/contact" element={<Contact />} />
            
//             {/* 404 Page (Optional) */}
//             <Route path="*" element={<div className="container mt-5"><h1>404 - Not Found</h1></div>} />
//           </Routes>
//         </main>

//         {/* Footer (Jo banavyu hoy to) */}
//         <ScrollToTop />
//         <Footer />
//       </div>
//     </Router>
//     </ProductProvider>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import { ProductProvider } from './context/ProductContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';

// Styles
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// 1. Protected Route Component: Jo login na hoy to Login page par mokli deshe
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" />;
};

// 2. Layout Wrapper: Login/Register ma Header/Footer hide karva mate
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  // const [loading, setLoading] = useState(true);

  // Auth pages par Header/Footer chhupavva mate
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  // useEffect(() => {
  //   setLoading(true);
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  //   return () => clearTimeout(timer);
  // }, [location]);

  // if (loading) return <Loader />;

  return (
    <div className="app-container">
      {!isAuthPage && <Header />}
      <main className="content">
        {children}
      </main>
      {!isAuthPage && <Footer />}
      {!isAuthPage && <ScrollToTop />}
    </div>
  );
};

function App() {
  const [initialLoading, setInitialLoading] = useState(false);

  const handleLoginSuccess = () => {
    setInitialLoading(true);
    setTimeout(() => {
      setInitialLoading(false);
    }, 1500);
  };

  if (initialLoading) return <Loader />;
  return (
    <>
    <ProductProvider>
      <Router>
        <LayoutWrapper>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login onLogin={handleLoginSuccess} />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes (Login jaruri che) */}
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
            <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
            <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
            <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
            <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />

            {/* 404 Page */}
            <Route path="*" element={<div className="container mt-5 text-white"><h1>404 - Not Found</h1></div>} />
          </Routes>
        </LayoutWrapper>
      </Router>
    </ProductProvider>
    <ToastContainer 
        position="top-center" 
        autoClose={3000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      </>
  );
}

export default App;
import React, { useState } from 'react';
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
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductCategory from './pages/ProductCategory';

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

  // Auth pages par Header/Footer chhupavva mate
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

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
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login onLogin={handleLoginSuccess} />} />
              <Route path="/register" element={<Register />} />

              {/* Protected Routes */}
              <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
              <Route path="/products/:id" element={<ProtectedRoute><ProductCategory /></ProtectedRoute>} />
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
// import React, { useState } from 'react';
// import { TextField, Button, Typography, Paper, InputAdornment } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useNavigate, Link } from 'react-router-dom';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
// import { toast } from 'react-toastify';
// import CloseIcon from '@mui/icons-material/Close';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import IconButton from '@mui/material/IconButton';
// import '../styles/Auth.css';

// const Login = ({ onLogin }) => {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem('user'));

//     if (storedUser && storedUser.email === credentials.email && storedUser.password === credentials.password) {
//       localStorage.setItem('isLoggedIn', 'true');

//       toast.success("Login Successful! Welcome back.");

//       if (onLogin) {
//         onLogin();
//       }

//       navigate('/');
//     } else {
//       toast.error("Invalid Email or Password!");
//     }
//   };
//   const handleClose = () => {
//     navigate('/');
//   };


//   return (
//     <div className="auth-page">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Paper className="glass-card">
//           <IconButton
//             onClick={handleClose}
//             sx={{
//               position: "absolute",
//               top: 8,
//               right: 8,
//               color: "#fff",
//               background: "rgba(255,255,255,0.1)"
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//           <Typography variant="h4" fontWeight="800" align="left" gutterBottom>
//             Welcome <span style={{ color: '#64b5f6' }}>Back.</span>
//           </Typography>
//           <Typography variant="body2" sx={{ opacity: 0.7, mb: 4 }}>
//             Login to your SP Iron & Steel account.
//           </Typography>

//           <form onSubmit={handleLogin}>
//             <TextField
//               fullWidth label="Email Address" margin="normal" required
//               onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
//               InputProps={{
//                 startAdornment: <InputAdornment position="start"><MailOutlineIcon sx={{ color: '#fff' }} /></InputAdornment>,
//               }}
//             />
//             {/* <TextField
//               fullWidth label="Password" type="password" margin="normal" required
//               onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//               InputProps={{
//                 startAdornment: <InputAdornment position="start"><LockOpenIcon sx={{ color: '#fff' }} /></InputAdornment>,
//               }}
//             /> */}
//             <TextField
//               fullWidth
//               label="Password"
//               margin="normal"
//               required
//               type={showPassword ? "text" : "password"}
//               onChange={(e) =>
//                 setCredentials({
//                   ...credentials,
//                   password: e.target.value
//                 })
//               }
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <LockOpenIcon sx={{ color: '#fff' }} />
//                   </InputAdornment>
//                 ),

//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       onClick={() => setShowPassword(!showPassword)}
//                       edge="end"
//                       sx={{ color: "#fff" }}
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 )
//               }}
//             />

//             <Button className="premium-btn" fullWidth variant="contained" type="submit" sx={{ mt: 4 }}>
//               Sign In
//             </Button>
//           </form>

//           <Typography align="center" mt={4} variant="body2">
//             New here? <Link to="/register" className="auth-link">Create Account</Link>
//           </Typography>
//         </Paper>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, InputAdornment, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { toast } from 'react-toastify';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../styles/Auth.css';
// import loginImage from '../assets/destinations/bali.jpg'; // તમારી ઈમેજ

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === credentials.email && storedUser.password === credentials.password) {
      localStorage.setItem('isLoggedIn', 'true');
      toast.success("Login Successful! Welcome back.");
      if (onLogin) onLogin();
      navigate('/');
    } else {
      toast.error("Invalid Email or Password!");
    }
  };

  return (
    <div className="login-overlay">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Paper className="login-modal-card" elevation={0}>
          {/* Close Button */}
          <button className="modal-close-btn" onClick={() => navigate('/')}>
            <CloseIcon />
          </button>

          <div className="login-split-container">
            {/* Left Side: Visual Panel */}
            <div className="login-visual-panel">
              
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
                alt="Iron Steel Construction"
              />
              <div className="visual-text-overlay">
                <Typography variant="h4" fontWeight="800">SP Iron & Steel</Typography>
                <Typography variant="body2">Strength and Reliability.</Typography>
              </div>
            </div>

            {/* Right Side: Form Panel */}
            <div className="login-form-panel">
              <Typography variant="h4" fontWeight="800" className="login-title">
                Member <span style={{ color: '#64b5f6' }}>Access</span>
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7, mb: 4 }}>
                Login to your SP Iron & Steel account.
              </Typography>

              <form onSubmit={handleLogin} className="login-minimal-form">
                <TextField
                  fullWidth label="Email Address" margin="normal" required
                  variant="standard"
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon sx={{ color: '#64b5f6' }} />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth label="Password" margin="normal" required
                  variant="standard"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOpenIcon sx={{ color: '#64b5f6' }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />

                <Button
                  className="join-btn-action"
                  fullWidth
                  variant="contained"
                  type="submit"
                  sx={{ mt: 5, borderRadius: '30px', py: 1.5, fontWeight: 'bold' }}
                >
                  SIGN IN
                </Button>

                <div className="form-footer-links">
                  <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                    New here? <Link to="/register" className="text-link">Register Now</Link>
                  </Typography>
                </div>
              </form>
            </div>
          </div>
        </Paper>
      </motion.div>
    </div>
  );
};

export default Login;
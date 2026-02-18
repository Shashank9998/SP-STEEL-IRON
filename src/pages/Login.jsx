import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, InputAdornment } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import '../styles/Auth.css'; // CSS Import

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === credentials.email && storedUser.password === credentials.password) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } else {
      alert("Invalid Email or Password!");
    }
  };

  return (
    <div className="auth-page">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <Paper className="glass-card">
          <Typography variant="h4" fontWeight="800" align="left" gutterBottom>
            Welcome <span style={{ color: '#64b5f6' }}>Back.</span>
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7, mb: 4 }}>
            Login to your SP Iron & Steel account.
          </Typography>
          
          <form onSubmit={handleLogin}>
            <TextField 
              fullWidth label="Email Address" margin="normal" required
              onChange={(e) => setCredentials({...credentials, email: e.target.value})}
              InputProps={{
                startAdornment: <InputAdornment position="start"><MailOutlineIcon sx={{color: '#fff'}} /></InputAdornment>,
              }}
            />
            <TextField 
              fullWidth label="Password" type="password" margin="normal" required
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              InputProps={{
                startAdornment: <InputAdornment position="start"><LockOpenIcon sx={{color: '#fff'}} /></InputAdornment>,
              }}
            />
            
            <Button className="premium-btn" fullWidth variant="contained" type="submit" sx={{ mt: 4 }}>
              Sign In
            </Button>
          </form>

          <Typography align="center" mt={4} variant="body2">
            New here? <Link to="/register" className="auth-link">Create Account</Link>
          </Typography>
        </Paper>
      </motion.div>
    </div>
  );
};

export default Login;

// import React, { useState } from 'react';
// import { 
//   Box, TextField, Button, Typography, Paper, 
//   InputAdornment, IconButton, CircularProgress 
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useNavigate, Link } from 'react-router-dom';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// const Login = () => {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Simulating a network delay for a better feel
//     setTimeout(() => {
//       const storedUser = JSON.parse(localStorage.getItem('user'));
//       if (storedUser && storedUser.email === credentials.email && storedUser.password === credentials.password) {
//         localStorage.setItem('isLoggedIn', 'true');
//         navigate('/');
//       } else {
//         alert("Invalid Email or Password!");
//         setLoading(false);
//       }
//     }, 1500);
//   };

//   return (
//     <Box className="auth-page" sx={styles.container}>
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }} 
//         animate={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 0.6 }}
//       >
//         <Paper elevation={0} sx={styles.glassCard}>
//           <Typography variant="h4" fontWeight="800" gutterBottom sx={{ color: '#fff' }}>
//             Welcome <span style={{ color: '#90caf9' }}>Back.</span>
//           </Typography>
//           <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 4 }}>
//             Please enter your details to access your dashboard.
//           </Typography>
          
//           <form onSubmit={handleLogin}>
//             <TextField 
//               fullWidth label="Email Address" variant="filled" margin="normal" required
//               onChange={(e) => setCredentials({...credentials, email: e.target.value})}
//               sx={styles.input}
//               InputProps={{
//                 disableUnderline: true,
//                 startAdornment: <InputAdornment position="start"><MailOutlineIcon sx={{color: '#90caf9'}} /></InputAdornment>,
//               }}
//             />

//             <TextField 
//               fullWidth label="Password" type={showPassword ? 'text' : 'password'} 
//               variant="filled" margin="normal" required
//               onChange={(e) => setCredentials({...credentials, password: e.target.value})}
//               sx={styles.input}
//               InputProps={{
//                 disableUnderline: true,
//                 startAdornment: <InputAdornment position="start"><LockOpenIcon sx={{color: '#90caf9'}} /></InputAdornment>,
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" sx={{color: '#fff'}}>
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
            
//             <Button 
//               fullWidth 
//               variant="contained" 
//               type="submit" 
//               disabled={loading}
//               sx={styles.submitBtn}
//             >
//               {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
//             </Button>
//           </form>

//           <Typography align="center" mt={4} sx={{ color: '#fff' }} variant="body2">
//             New here? <Link to="/register" style={styles.link}>Create an Account</Link>
//           </Typography>
//         </Paper>
//       </motion.div>
//     </Box>
//   );
// };

// // Custom Styles Object
// const styles = {
//   container: {
//     minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     background: 'radial-gradient(circle at top left, #1a237e, #000000)', // Deep industrial feel
//     padding: 2
//   },
//   glassCard: {
//     padding: '40px',
//     maxWidth: '450px',
//     width: '100%',
//     background: 'rgba(255, 255, 255, 0.05)',
//     backdropFilter: 'blur(15px)',
//     borderRadius: '24px',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
//   },
//   input: {
//     '& .MuiFilledInput-root': {
//       backgroundColor: 'rgba(255, 255, 255, 0.08)',
//       borderRadius: '12px',
//       color: '#fff',
//       '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.12)' },
//       '&.Mui-focused': { backgroundColor: 'rgba(255, 255, 255, 0.15)' },
//     },
//     '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.5)' },
//     '& .MuiInputLabel-root.Mui-focused': { color: '#90caf9' },
//   },
//   submitBtn: {
//     mt: 4,
//     py: 1.5,
//     borderRadius: '12px',
//     fontSize: '1rem',
//     fontWeight: 'bold',
//     textTransform: 'none',
//     background: 'linear-gradient(45deg, #2196f3, #00e5ff)',
//     '&:hover': {
//       background: 'linear-gradient(45deg, #1976d2, #00bcd4)',
//       transform: 'translateY(-2px)',
//       boxShadow: '0 5px 15px rgba(33, 150, 243, 0.4)',
//     },
//     transition: 'all 0.3s ease',
//   },
//   link: {
//     color: '#90caf9',
//     textDecoration: 'none',
//     fontWeight: '600',
//     marginLeft: '5px'
//   }
// };

// export default Login;
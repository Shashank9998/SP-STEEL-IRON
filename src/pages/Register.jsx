import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, InputAdornment } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import '../styles/Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    alert("Account created successfully!");
    navigate('/login');
  };

  return (
    <div className="auth-page">
      <motion.div 
        initial={{ x: 100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <Paper className="glass-card">
          <Typography variant="h4" fontWeight="800" align="left" gutterBottom>
            Register <span style={{ color: '#64b5f6' }}>Now.</span>
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7, mb: 3 }}>
            Join the strongest network in the industry.
          </Typography>
          
          <form onSubmit={handleRegister}>
            <TextField fullWidth label="Full Name" margin="normal" required
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              InputProps={{ startAdornment: <InputAdornment position="start"><PersonOutlineIcon sx={{color: '#fff'}} /></InputAdornment> }}
            />
            <TextField fullWidth label="Email" margin="normal" type="email" required
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              InputProps={{ startAdornment: <InputAdornment position="start"><MailOutlineIcon sx={{color: '#fff'}} /></InputAdornment> }}
            />
            <TextField fullWidth label="Password" margin="normal" type="password" required
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              InputProps={{ startAdornment: <InputAdornment position="start"><LockOpenIcon sx={{color: '#fff'}} /></InputAdornment> }}
            />
            <Button className="premium-btn" fullWidth variant="contained" type="submit" sx={{ mt: 3 }}>
              Create Account
            </Button>
          </form>
          
          <Typography align="center" mt={3} variant="body2">
            Already a member? <Link to="/login" className="auth-link">Login</Link>
          </Typography>
        </Paper>
      </motion.div>
    </div>
  );
};

export default Register;



// import React, { useState } from 'react';
// import { 
//   Box, TextField, Button, Typography, Paper, 
//   InputAdornment, IconButton, CircularProgress 
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useNavigate, Link } from 'react-router-dom';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// const Register = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Simulate a brief delay for a "processing" feel
//     setTimeout(() => {
//       localStorage.setItem('user', JSON.stringify(formData));
//       setLoading(false);
//       navigate('/login');
//     }, 1200);
//   };

//   return (
//     <Box className="auth-page" sx={styles.container}>
//       <motion.div 
//         initial={{ opacity: 0, x: 50 }} 
//         animate={{ opacity: 1, x: 0 }} 
//         transition={{ type: 'spring', stiffness: 100, damping: 20 }}
//       >
//         <Paper elevation={0} sx={styles.glassCard}>
//           <Typography variant="h4" fontWeight="800" gutterBottom sx={{ color: '#fff' }}>
//             Register <span style={{ color: '#90caf9' }}>Now.</span>
//           </Typography>
//           <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
//             Join the strongest network in the industry.
//           </Typography>
          
//           <form onSubmit={handleRegister}>
//             <TextField 
//               fullWidth label="Full Name" variant="filled" margin="normal" required
//               onChange={(e) => setFormData({...formData, name: e.target.value})}
//               sx={styles.input}
//               InputProps={{
//                 disableUnderline: true,
//                 startAdornment: <InputAdornment position="start"><PersonOutlineIcon sx={{color: '#90caf9'}} /></InputAdornment>,
//               }}
//             />

//             <TextField 
//               fullWidth label="Email Address" variant="filled" margin="normal" type="email" required
//               onChange={(e) => setFormData({...formData, email: e.target.value})}
//               sx={styles.input}
//               InputProps={{
//                 disableUnderline: true,
//                 startAdornment: <InputAdornment position="start"><MailOutlineIcon sx={{color: '#90caf9'}} /></InputAdornment>,
//               }}
//             />

//             <TextField 
//               fullWidth label="Password" type={showPassword ? 'text' : 'password'} 
//               variant="filled" margin="normal" required
//               onChange={(e) => setFormData({...formData, password: e.target.value})}
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
//               {loading ? <CircularProgress size={24} color="inherit" /> : 'Create Account'}
//             </Button>
//           </form>

//           <Typography align="center" mt={3} sx={{ color: '#fff' }} variant="body2">
//             Already a member? <Link to="/login" style={styles.link}>Login</Link>
//           </Typography>
//         </Paper>
//       </motion.div>
//     </Box>
//   );
// };

// // Custom Styles Object (Same as Login for consistency)
// const styles = {
//   container: {
//     minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     background: 'radial-gradient(circle at top left, #1a237e, #000000)',
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
//     mt: 3,
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

// export default Register;
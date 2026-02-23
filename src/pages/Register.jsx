// import React, { useState } from 'react';
// import { Box, TextField, Button, Typography, Paper, InputAdornment } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useNavigate, Link } from 'react-router-dom';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
// import { toast } from 'react-toastify';
// import CloseIcon from '@mui/icons-material/Close';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import IconButton from '@mui/material/IconButton';
// import '../styles/Auth.css';

// const Register = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);

//   const handleRegister = (e) => {
//     e.preventDefault();

//     // 1. પહેલાથી રહેલા યુઝર્સ મેળવો (જો ન હોય તો ખાલી એરે [] લો)
//     const existingUsers = JSON.parse(localStorage.getItem('allUsers')) || [];

//     // 2. ચેક કરો કે આ ઈમેઈલ પહેલેથી રજીસ્ટર તો નથી ને?
//     const userExists = existingUsers.find(user => user.email === formData.email);

//     if (userExists) {
//       toast.error("This email is already registered!");
//       return;
//     }

//     // 3. નવા યુઝરને લિસ્ટમાં ઉમેરો
//     const updatedUsers = [...existingUsers, formData];

//     // 4. લોકલ સ્ટોરેજમાં અપડેટ કરેલું લિસ્ટ અને કરંટ યુઝર સેવ કરો
//     localStorage.setItem('allUsers', JSON.stringify(updatedUsers)); // બધા યુઝર્સ માટે
//     localStorage.setItem('user', JSON.stringify(formData)); // છેલ્લા રજીસ્ટર થયેલા યુઝર માટે (તમારા જૂના લોજિક મુજબ)

//     toast.success("Account created successfully! Please login.");
//     navigate('/login');
//   };

//   const handleClose = () => {
//     navigate('/');
//   };
//   return (
//     <div className="auth-page">
//       <motion.div
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ type: 'spring', stiffness: 120 }}
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
//             Register <span style={{ color: '#64b5f6' }}>Now.</span>
//           </Typography>
//           <Typography variant="body2" sx={{ opacity: 0.7, mb: 3 }}>
//             Join the strongest network in the industry.
//           </Typography>

//           <form onSubmit={handleRegister}>
//             <TextField fullWidth label="Full Name" margin="normal" required
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               InputProps={{ startAdornment: <InputAdornment position="start"><PersonOutlineIcon sx={{ color: '#fff' }} /></InputAdornment> }}
//             />
//             <TextField fullWidth label="Email" margin="normal" type="email" required
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               InputProps={{ startAdornment: <InputAdornment position="start"><MailOutlineIcon sx={{ color: '#fff' }} /></InputAdornment> }}
//             />
//             {/* <TextField fullWidth label="Password" margin="normal" type="password" required
//               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               InputProps={{ startAdornment: <InputAdornment position="start"><LockOpenIcon sx={{ color: '#fff' }} /></InputAdornment> }}
//             /> */}
//             <TextField
//               fullWidth
//               label="Password"
//               margin="normal"
//               required
//               type={showPassword ? "text" : "password"}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
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
//                     >
//                       {showPassword
//                         ? <VisibilityOff sx={{ color: '#fff' }} />
//                         : <Visibility sx={{ color: '#fff' }} />
//                       }
//                     </IconButton>
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <Button className="premium-btn" fullWidth variant="contained" type="submit" sx={{ mt: 3 }}>
//               Create Account
//             </Button>
//           </form>

//           <Typography align="center" mt={3} variant="body2">
//             Already a member? <Link to="/login" className="auth-link">Login</Link>
//           </Typography>
//         </Paper>
//       </motion.div>
//     </div>
//   );
// };

// export default Register;



import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, InputAdornment, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import '../styles/Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
    const userExists = existingUsers.find(user => user.email === formData.email);

    if (userExists) {
      toast.error("This email is already registered!");
      return;
    }

    const updatedUsers = [...existingUsers, formData];
    localStorage.setItem('allUsers', JSON.stringify(updatedUsers));
    localStorage.setItem('user', JSON.stringify(formData));

    toast.success("Account created successfully! Please login.");
    navigate('/login');
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
            {/* Left Side: Visual Panel (Same as Login) */}
            <div className="login-visual-panel">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80" 
                alt="Register Visual" 
              />
              <div className="visual-text-overlay">
                <Typography variant="h4" fontWeight="800">Join Us.</Typography>
                <Typography variant="body2">Build your future with SP Iron & Steel.</Typography>
              </div>
            </div>

            {/* Right Side: Form Panel */}
            <div className="login-form-panel">
              <Typography variant="h4" fontWeight="800" className="login-title">
                Create <span style={{ color: '#64b5f6' }}>Account</span>
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7, mb: 3 }}>
                Join the strongest network in the industry.
              </Typography>

              <form onSubmit={handleRegister} className="login-minimal-form">
                <TextField
                  fullWidth label="Full Name" margin="normal" required
                  variant="standard"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon sx={{ color: '#64b5f6' }} />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth label="Email Address" margin="normal" type="email" required
                  variant="standard"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
                  sx={{ mt: 4, borderRadius: '30px', py: 1.5, fontWeight: 'bold' }}
                >
                  CREATE ACCOUNT
                </Button>

                <div className="form-footer-links">
                  <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                    Already a member? <Link to="/login" className="text-link">Login Now</Link>
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

export default Register;
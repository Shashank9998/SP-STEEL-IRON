import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, InputAdornment, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { toast } from 'react-toastify'; 
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Auth.css'; 

const Login = ({ onLogin }) => {

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (
      storedUser &&
      storedUser.email === credentials.email &&
      storedUser.password === credentials.password
    ) {

      localStorage.setItem('isLoggedIn', 'true');

      toast.success("Login Successful! Welcome back.");

      if (onLogin) {
        onLogin();
      }

      navigate('/');

    } else {
      toast.error("Invalid Email or Password!");
    }
  };


  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="auth-page">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >

        <Paper className="glass-card">

          <IconButton
             onClick={handleClose}
             sx={{
               position: "absolute",
               top: 8,
               right: 8,
               color: "#070707",
               background: "rgba(255,255,255,0.1)",
               zIndex: 9999,
               "&:hover": {
                 background: "rgba(255,255,255,0.2)"
               }
             }}
           >
             <CloseIcon />
           </IconButton>

          <Typography variant="h4" fontWeight="800" align="left" gutterBottom>
            Welcome <span style={{ color: '#64b5f6' }}>Back.</span>
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.7, mb: 4 }}>
            Login to your SP Iron & Steel account.
          </Typography>

          <form onSubmit={handleLogin}>

            {/* Email */}
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              required
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  email: e.target.value
                })
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon sx={{ color: '#fff' }} />
                  </InputAdornment>
                ),
              }}
            />


            {/* Password with Show/Hide */}
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              margin="normal"
              required
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  password: e.target.value
                })
              }
              InputProps={{

                startAdornment: (
                  <InputAdornment position="start">
                    <LockOpenIcon sx={{ color: '#fff' }} />
                  </InputAdornment>
                ),

                endAdornment: (
                  <InputAdornment position="end">

                    <IconButton onClick={togglePassword} edge="end">

                      {showPassword
                        ? <VisibilityOff sx={{ color: '#fff' }} />
                        : <Visibility sx={{ color: '#fff' }} />
                      }

                    </IconButton>

                  </InputAdornment>
                )

              }}
            />


            <Button
              className="premium-btn"
              fullWidth
              variant="contained"
              type="submit"
              sx={{ mt: 4 }}
            >
              Sign In
            </Button>

          </form>


          <Typography align="center" mt={4} variant="body2">

            New here?
            <Link to="/register" className="auth-link">
              Create Account
            </Link>

          </Typography>

        </Paper>

      </motion.div>

    </div>
  );
};

export default Login;
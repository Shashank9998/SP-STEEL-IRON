import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  IconButton
} from '@mui/material';

import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { toast } from 'react-toastify';
import CloseIcon from '@mui/icons-material/Close';

import '../styles/Auth.css';


const Register = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();


  const handleRegister = (e) => {

    e.preventDefault();

    const existingUsers =
      JSON.parse(localStorage.getItem('allUsers')) || [];

    const userExists =
      existingUsers.find(
        user => user.email === formData.email
      );

    if (userExists) {
      toast.error("This email is already registered!");
      return;
    }

    const updatedUsers = [
      ...existingUsers,
      formData
    ];

    localStorage.setItem(
      'allUsers',
      JSON.stringify(updatedUsers)
    );

    localStorage.setItem(
      'user',
      JSON.stringify(formData)
    );

    toast.success(
      "Account created successfully! Please login."
    );

    navigate('/login');

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
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
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

          <Typography
            variant="h4"
            fontWeight="800"
            align="left"
            gutterBottom
          >
            Register
            <span style={{ color: '#64b5f6' }}>
              {" "}Now.
            </span>
          </Typography>


          <Typography
            variant="body2"
            sx={{ opacity: 0.7, mb: 3 }}
          >
            Join the strongest network in the industry.
          </Typography>


          <form onSubmit={handleRegister}>

            {/* Name */}
            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
              required
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value
                })
              }

              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon sx={{ color: '#fff' }} />
                  </InputAdornment>
                )
              }}
            />


            {/* Email */}
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              type="email"
              required

              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value
                })
              }

              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon sx={{ color: '#fff' }} />
                  </InputAdornment>
                )
              }}
            />


            {/* Password with Show/Hide */}
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              type={showPassword ? "text" : "password"}
              required

              onChange={(e) =>
                setFormData({
                  ...formData,
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

                    <IconButton
                      onClick={togglePassword}
                      edge="end"
                    >

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
              sx={{ mt: 3 }}
            >
              Create Account
            </Button>

          </form>


          <Typography
            align="center"
            mt={3}
            variant="body2"
          >
            Already a member?
            <Link
              to="/login"
              className="auth-link"
            >
              {" "}Login
            </Link>
          </Typography>


        </Paper>

      </motion.div>

    </div>

  );

};

export default Register;
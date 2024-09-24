import React from 'react';
import { Box, Stack, Typography, IconButton, Fade } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import Logo from '../assets/images/Logo-1.png';
import { blueGrey } from '@mui/material/colors';

const Footer = () => (
  <Box mt="80px" bgcolor="linear-gradient(135deg, #FFF3F4, #F8E8EB)" py="40px">
    {<Fade in={true} timeout={1000}>
      <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
        <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
      </Stack>
    </Fade> }

    <Fade in={true} timeout={2000}>
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="20px" textAlign="center">
        Thank You For Showing Interest
      </Typography>
    </Fade>

    <Stack direction="row" spacing={2} justifyContent="center" mt="20px">
      <IconButton href="/" target="_blank" sx={{ color: '#4267B2' }}>
        <Facebook />
      </IconButton>
      <IconButton href="https://www.instagram.com/lalit__kumar23/" target="_blank" sx={{ color: '#E4405F' }}>
        <Instagram />
      </IconButton>
      <IconButton href="/" target="_blank" sx={{ color: '#1DA1F2' }}>
        <Twitter />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/lalit-kumar-3175a6262/" target="_blank" sx={{ color: '#0077B5' }}>
        <LinkedIn />
      </IconButton>
    </Stack>

    <Typography variant="body2" color="textSecondary" align="center" mt="30px">
      © 2024  All rights reserved.
    </Typography>
  </Box>
);

export default Footer;

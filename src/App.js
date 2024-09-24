import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';

import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box 
      sx={{ 
        width: { xl: '1488px' }, 
        margin: 'auto', 
        bgcolor: 'light black',   // Set background color to black
        minHeight: '100vh', // Ensure the background covers the full height
        color: 'white'      // Set text color to white for contrast
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;

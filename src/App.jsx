import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import AboutUs from './components/AboutUs';
import TailoringServices from './components/TailoringServices';
import GalleryContact from './components/GalleryContact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ overflowX: 'hidden' }}>
        <Navbar />
        <Hero />
        <Collections />
        <AboutUs />
        <TailoringServices />
        <GalleryContact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

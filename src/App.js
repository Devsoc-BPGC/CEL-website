import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs.jsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <LandingPage />
      <AboutUs />
      <Footer />
    </ChakraProvider>
  );
}

export default App;

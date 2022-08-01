import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <AboutUs />
      <Footer />
    </ChakraProvider>
  );
}

export default App;

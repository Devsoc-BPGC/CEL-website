import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Footer />
    </ChakraProvider>
  );
}

export default App;

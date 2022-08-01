import React from 'react';

import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import TeamMemberGrid from './components/TeamMemberGrid';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <TeamMemberGrid />
      <Footer />
    </ChakraProvider>
  );
}

export default App;

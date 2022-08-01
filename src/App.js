import React from 'react';

import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { TeamMemberGrid } from './components/TeamMemberGrid';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <TeamMemberGrid />
    </ChakraProvider>
  );
}

export default App;

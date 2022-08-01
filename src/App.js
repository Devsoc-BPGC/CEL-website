import React from 'react';

import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { TeamMemberGrid } from './components/TeamMemberGrid';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box textAlign='center' color='white' bg='black' p={100}>
        <TeamMemberGrid />
      </Box>
    </ChakraProvider>
  );
}

export default App;

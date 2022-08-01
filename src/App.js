import React from 'react';

import {
  ChakraProvider,
  Flex,
  VStack,
  Box,
  Text,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { TeamMemberGrid } from './components/TeamMemberGrid';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box textAlign='center' p={30}>
        <Flex alignItems='start'>
          <VStack>
            <Text>Coordinators</Text>
            <Text>For 2022-2023</Text>
          </VStack>
        </Flex>
        <TeamMemberGrid />
      </Box>
    </ChakraProvider>
  );
}

export default App;

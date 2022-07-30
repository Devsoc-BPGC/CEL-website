import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  HStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './components/Navbar'


function App() {
  return (
    <ChakraProvider>
        <Navbar />
    </ChakraProvider>  
  );
}

export default App;

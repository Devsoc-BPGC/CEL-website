import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid templateRows={'12.8% 72.9% 14.3%'} bg='black' h='100vh'>
        <GridItem w='100%' color={'white'}>
          NavBar
        </GridItem>
        <GridItem w='100%'>
          <LandingPage />
        </GridItem>
        <GridItem w='100%' color={'white'}>
          Footer
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;

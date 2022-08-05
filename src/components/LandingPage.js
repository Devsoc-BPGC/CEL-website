import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const LandingPage = () => {
  return (
    <Box
      textAlign={'left'}
      pt={{ base: '33%', lg: '15%' }}
      px={{ base: '2rem', md: '3rem' }}
      height='calc(100vh - 6rem)'
      width='100%'
      backgroundImage='url(/lantern.jpg)'
      backgroundColor='black'
      backgroundRepeat='no-repeat'
      backgroundSize={{ base: '225px', sm: 'initial' }}
      backgroundPosition={{ base: 'bottom', sm: 'right 0 top 0' }}
      id='home'
    >
      <Text
        color={'white'}
        fontFamily={'League Spartan'}
        fontSize={{ base: '36px', md: '65px' }}
        fontStyle={'normal'}
        fontWeight={700}
        lineHeight={{ base: '35px', md: '60px' }}
        letterSpacing={'-0.06em'}
      >
        ENTREPRENEURS,
      </Text>
      <Text
        color={'#FDC20A'}
        fontFamily={'League Spartan'}
        fontSize={{ base: '36px', md: '65px' }}
        fontStyle={'normal'}
        fontWeight={700}
        lineHeight={{ base: '35px', md: '60px' }}
        letterSpacing={'-0.06em'}
      >
        ASSEMBLE.
      </Text>
      <Text
        color={'white'}
        fontFamily={'Josefin Sans'}
        fontStyle={'normal'}
        fontSize={{ md: '34px' }}
        lineHeight={{ base: '20px', md: '34px' }}
        w={{ base: '300px', md: '500px', lg: '702px' }}
        maxW={'100%'}
        mt={{ base: '5px', md: '0px' }}
      >
        CEL BITS Goa aims to bring together like-minded people, with a passion
        for creating something from the ground up, and an unmatched
        Entrepreneurial spirit
      </Text>
    </Box>
  );
};
export default LandingPage;

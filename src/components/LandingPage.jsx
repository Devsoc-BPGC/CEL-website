import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const LandingPage = () => {
  return (
    <Flex
      textAlign={'left'}
      px={{ base: '2rem', md: '3rem' }}
      minH='calc(100vh - 6rem)'
      width='100%'
      backgroundImage={{
        base: 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(/lantern.jpg);',
        sm: 'url(/lantern.jpg)',
      }}
      backgroundColor='black'
      backgroundRepeat='no-repeat'
      backgroundSize={{ base: 'contain', sm: 'initial' }}
      backgroundPosition={{ base: 'top', sm: 'right 0 top 0' }}
      id='home'
      direction={'column'}
      justify={'center'}
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
        entrepreneurial spirit!
      </Text>
    </Flex>
  );
};
export default LandingPage;

import { Box, Circle, Text, Image } from '@chakra-ui/react';
import React from 'react';

const LandingPage = () => {
  return (
    <>
      <Box
        textAlign={'left'}
        mt={{ base: '69px', md: '100px' }}
        ml={{ base: '12px', md: '46px' }}
      >
        <Text
          color={'white'}
          fontFamily={'League Spartan'}
          fontSize={{ base: '40px', md: '65px' }}
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
          fontSize={{ base: '40px', md: '65px' }}
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
          fontSize={{ base: '20px', md: '34px' }}
          lineHeight={{ base: '20px', md: '34px' }}
          w={{ base: '300px', md: '702px' }}
          mt={{ base: '5px', md: '0px' }}
        >
          CEL BITS Goa aims to bring together like-minded people, with a passion
          for creating something from the ground up, and an unmatched
          Entrepreneurial spirit
        </Text>
        <Circle
          bg={'#FDC20A'}
          borderRadius={'10px'}
          w={{ base: '90px', md: '219px' }}
          h={{ base: '38.06px', md: '70px' }}
          fontFamily={'Josefin Sans'}
          fontSize={{ base: '10px', md: '20px' }}
          mt={{ base: '10px', md: '43px' }}
        >
          Call-to-action
        </Circle>
      </Box>
      <Box
        w={{ base: '160px', md: '444px' }}
        position='absolute'
        top={{ base: '204px', md: '0px' }}
        right={{ base: '110px', md: '0px' }}
        opacity={{ base: '70%', md: '100%' }}
        zIndex='0'
      >
        <Image src='/lantern.jpg' />
      </Box>
    </>
  );
};
export default LandingPage;

import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';

const AboutUs = () => {
  return (
    <Box>
      <Center>
        <Text color={'white'} fontFamily={'Josefin Sans'} fontSize={'26px'}>
          About
        </Text>
        <Text color={'#FFC703'} fontFamily={'Josefin Sans'} fontSize={'26px'}>
          Us
        </Text>
      </Center>
      <Center>
        <Text
          color={'white'}
          textAlign={'justify'}
          ml={'5vw'}
          mr={'5vw'}
          fontFamily={'inter'}
          fontSize={{ base: '12px', sm: '18px' }}
          lineHeight={'24px'}
        >
          Centre for Entrepreneurial Leadership (CEL) is a society of eminence
          at BITS Pilani, Goa Campus, bridging Entrepreneurship and Innovation.
          We at CEL, BITS Pilani, Goa campus believe that dreams can come true.
          No matter how high one aspires to reach, we aim to provide the
          entrepreneurial skills and lay down the path towards success for every
          single one who has the courage, determination and will power to do
          what it takes.
          <br />
          <br /> Being the Entrepreneurship cell of one of the premier
          institutes of the country, it is our responsibility to ensure that we
          maintain a highly productive environment to incubate budding
          entrepreneurs from across the nation! Through mentorship, teaching,
          conducting highly competitive activities and funding select startups,
          we ensure that the next gen entrepreneurs are able to make it to the
          top.
          <br />
          <br /> The many events we host and conduct go a long way in helping
          the participants achieve their ultimate goal. Conducting our Annual E-
          Summit, Coalescence, an entrepreneurial fest like no other, graced by
          the presence of successful millionaire entrepreneurs, inspires and
          guides students to achieve the unattainable!
        </Text>
      </Center>
    </Box>
  );
};
export default AboutUs;

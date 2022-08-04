import React from 'react';
import { Box, Text, HStack, VStack } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box
      bg={'black'}
      color={'white'}
      paddingY={{ base: '1.5rem' }}
      fontSize={'20px'}
    >
      <VStack>
        <HStack align={'center'} justify={'center'} paddingBottom={3}>
          <Text fontWeight={700} fontSize={'30px'}>
            About
          </Text>
          <Text color={'#FDC20A'} fontWeight={700} fontSize={'30px'}>
            Us
          </Text>
        </HStack>
        <Text
          paddingX={{ base: '1rem', sm: '2rem', md: '4rem' }}
          paddingY={{ base: '0.5rem' }}
          lineHeight={{ base: '2', sm: '1.5' }}
        >
          Centre for Entrepreneurial Leadership (CEL) is a society of eminence
          at BITS Pilani, Goa Campus, bridging Entrepreneurship and Innovation.
          We at CEL, BITS Pilani, Goa campus believe that dreams can come true.
          No matter how high one aspires to reach, we aim to provide the
          entrepreneurial skills and lay down the path towards success for every
          single one who has the courage, determination and will power to do
          what it takes.
        </Text>
        <Text
          paddingX={{ base: '1rem', sm: '2rem', md: '4rem' }}
          paddingY={{ base: '0.5rem' }}
          lineHeight={{ base: '2', sm: '1.5' }}
        >
          Being the Entrepreneurship cell of one of the premier institutes of
          the country, it is our responsibility to ensure that we maintain a
          highly productive environment to incubate budding entrepreneurs from
          across the nation! Through mentorship, teaching, conducting highly
          competitive activities and funding select startups, we ensure that the
          next gen entrepreneurs are able to make it to the top.
        </Text>
        <Text
          paddingX={{ base: '1rem', sm: '2rem', md: '4rem' }}
          paddingY={{ base: '0.5rem' }}
          lineHeight={{ base: '2', sm: '1.5' }}
        >
          The many events we host and conduct go a long way in helping the
          participants achieve their ultimate goal. Conducting our Annual E-
          Summit, Coalescence, an entrepreneurial fest like no other, graced by
          the presence of successful millionaire entrepreneurs, inspires and
          guides students to achieve the unattainable!
        </Text>
      </VStack>
    </Box>
  );
};

export default AboutUs;

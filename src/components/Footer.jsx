import { Box, Text, VStack, HStack, Link } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import React from 'react';

const Footer = () => {
  return (
    <Box bg='black' color='white'>
      <VStack>
        <HStack
          width={'100%'}
          paddingStart={5}
          paddingEnd={5}
          justify={'space-between'}
          align={'center'}
        >
          <Text fontWeight={800} fontSize={'25px'}>
            CONNECT. INNOVATE. INSPIRE.
          </Text>
          <VStack spacing={0} align={'start'}>
            <Text padding={0} margin={0}>
              {' '}
              <PhoneIcon color={'#FDC20A'} /> Contact: +91 1234567890{' '}
            </Text>
            <Text padding={0} margin={0}>
              {' '}
              <EmailIcon color={'#FDC20A'} /> Email: team@celbitsgoa.com{' '}
            </Text>
          </VStack>
        </HStack>
        <Text textAlign={'center'}>
          {' '}
          <Link target={'_blank'} href={'https://devsoc.club/'}>
            {' '}
            Made with 💛 by DevSoc{' '}
          </Link>{' '}
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;

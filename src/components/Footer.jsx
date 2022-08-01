import { Box, Text, VStack, HStack, Link, Icon } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { BsHeart } from 'react-icons/bs';
import React from 'react';

const Footer = () => {
  return (
    <Box bg='black' color='white'>
      <VStack paddingY={4}>
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
              <PhoneIcon color={'#FDC20A'} /> Contact:{' '}
              <Link target={'_blank'} href={'tel:+911234567890'}>
                +91 1234567890
              </Link>
            </Text>
            <Text padding={0} margin={0}>
              <EmailIcon color={'#FDC20A'} /> Email:{' '}
              <Link target={'_blank'} href={'mailto:team@celbitsgoa.com'}>
                team@celbitsgoa.com
              </Link>
            </Text>
          </VStack>
        </HStack>
        <HStack align={'center'}>
          <Text>Made with </Text>
          <Icon as={BsHeart} color={'#FDC20A'} />
          <Text> by </Text>
          <Link target={'_blank'} href={'https://devsoc.club/'}>
            DevSoc
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;

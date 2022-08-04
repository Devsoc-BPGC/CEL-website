import { Text, VStack, HStack, Link, Icon, Flex } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { BsHeart } from 'react-icons/bs';
import React from 'react';

const Footer = () => {
  return (
    <Flex
      bg='black'
      color='white'
      flexDirection={'column'}
      px={{ base: '0.75rem', sm: '1rem', md: '2rem' }}
      py={'1rem'}
      id='contact'
    >
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justifyContent={'space-between'}
        alignContent={{ base: 'flex-start', lg: 'center' }}
      >
        <Text
          fontWeight={800}
          fontSize={{ base: '1rem', sm: '1.5rem', md: '2rem' }}
          py={{ base: '0.25rem', md: '0' }}
        >
          CONNECT. INNOVATE. INSPIRE.
        </Text>
        <VStack
          spacing={0}
          align={'start'}
          fontSize={{ base: '0.75rem', sm: '1rem', md: '1.25rem' }}
          lineHeight={2}
        >
          <Text padding={0} margin={0}>
            <PhoneIcon color={'#FDC20A'} /> Contact:{' '}
            <Link target={'_blank'} href={'tel:+918762719014'}>
              +91 87627 19014
            </Link>
          </Text>
          <Text padding={0} margin={0}>
            <EmailIcon color={'#FDC20A'} /> Email:{' '}
            <Link target={'_blank'} href={'mailto:team@celbitsgoa.com'}>
              team@celbitsgoa.com
            </Link>
          </Text>
        </VStack>
      </Flex>
      <HStack alignSelf={'center'}>
        <Text>Made with </Text>
        <Icon as={BsHeart} color={'#FDC20A'} />
        <Text> by </Text>
        <Link target={'_blank'} href={'https://devsoc.club/'}>
          DevSoc
        </Link>
      </HStack>
    </Flex>
  );
};

export default Footer;
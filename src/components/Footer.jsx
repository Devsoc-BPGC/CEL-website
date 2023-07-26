import { Text, VStack, HStack, Link, Icon, Flex } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { BsHeart } from 'react-icons/bs';
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiYoutubeFill,
} from 'react-icons/ri';
import React from 'react';

const Footer = () => {
  return (
    <Flex
      bg='#111'
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
          IDEATE. INNOVATE. INSPIRE.
        </Text>
        <VStack
          spacing={0}
          align={'start'}
          fontSize={{ base: '0.75rem', sm: '1rem', md: '1.25rem' }}
          lineHeight={2}
        >
          <Text padding={0} margin={0}>
            <PhoneIcon color={'#FDC20A'} /> Contact:{' '}
            <Link target={'_blank'} href={'tel:+917901861707'}>
              +91 79018 61707
            </Link>
          </Text>
          <Text padding={0} margin={0}>
            <EmailIcon color={'#FDC20A'} /> Email:{' '}
            <Link target={'_blank'} href={'mailto:harshsingla@celbitsgoa.in'}>
              harshsingla@celbitsgoa.in
            </Link>
          </Text>
          <Text padding={0} margin={0}>
            <EmailIcon color={'#FDC20A'} /> Email:{' '}
            <Link target={'_blank'} href={'mailto:aasthakapoor@celbitsgoa.in'}>
              aasthakapoor@celbitsgoa.in
            </Link>
          </Text>
          <HStack py={2}>
            <Link
              target={'_blank'}
              href={'https://www.linkedin.com/company/celbitsgoa/'}
            >
              <RiLinkedinFill color={'#FDC20A'} />
            </Link>
            <Link target={'_blank'} href={'https://twitter.com/celbitsgoa'}>
              <RiTwitterFill color={'#FDC20A'} />
            </Link>
            <Link
              target={'_blank'}
              href={'https://www.instagram.com/celbitsgoa/'}
            >
              <RiInstagramFill color={'#FDC20A'} />
            </Link>
            <Link
              target={'_blank'}
              href={'https://www.facebook.com/celbitsgoa/'}
            >
              <RiFacebookFill color={'#FDC20A'} />
            </Link>
            <Link
              target={'_blank'}
              href={'https://www.youtube.com/c/CoalescenceBITS'}
            >
              <RiYoutubeFill color={'#FDC20A'} />
            </Link>
          </HStack>
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

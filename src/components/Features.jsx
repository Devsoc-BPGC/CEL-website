import React from 'react';
import {
  Box,
  Text,
  Image,
  Button,
  Spacer,
  Stack,
  VStack,
} from '@chakra-ui/react';

const FeatureRight = props => {
  return (
    <Box
      bg={'black'}
      paddingX={{ base: '0.75rem', sm: '1rem', md: '5rem' }}
      paddingY={{ base: '1.5rem' }}
    >
      <Stack direction={{ base: 'column', md: 'row' }} align={'center'}>
        <Box>
          <Image
            borderRadius='full'
            boxSize={{ base: '20rem', sm: '20rem', md: '20rem', lg: '30rem' }}
            src={props.img}
            alt='Image'
          />
        </Box>
        <Spacer />
        <VStack align={{ base: 'center', md: 'end' }}>
          <Text
            color={'#FDC20A'}
            fontFamily={'League Spartan'}
            fontSize={{ base: '36px', md: '65px' }}
            fontStyle={'normal'}
            fontWeight={700}
            lineHeight={{ base: '35px', md: '60px' }}
            letterSpacing={'-0.06em'}
          >
            {props.title.toUpperCase()}
          </Text>
          <Text
            color={'white'}
            textAlign={['center', 'end']}
            fontFamily={'Josefin Sans'}
            fontStyle={'normal'}
            fontSize={{ md: '30px' }}
            lineHeight={{ base: '20px', md: '34px' }}
            w={{ base: '300px', md: '500px', lg: '702px' }}
          >
            {props.desc}
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

const FeatureLeft = props => {
  return (
    <Box
      bg={'black'}
      paddingX={{ base: '0.75rem', sm: '1rem', md: '5rem' }}
      paddingY={{ base: '1.5rem' }}
    >
      <Stack direction={{ base: 'column', md: 'row-reverse' }} align={'center'}>
        <Box>
          <Image
            borderRadius='full'
            boxSize={{ base: '20rem', sm: '20rem', md: '20rem', lg: '30rem' }}
            src={props.img}
            alt='Image'
          />
        </Box>
        <Spacer />
        <VStack align={{ base: 'center', md: 'start' }}>
          <Text
            color={'#FDC20A'}
            fontFamily={'League Spartan'}
            fontSize={{ base: '36px', md: '65px' }}
            fontStyle={'normal'}
            fontWeight={700}
            lineHeight={{ base: '35px', md: '60px' }}
            letterSpacing={'-0.06em'}
          >
            {props.title.toUpperCase()}
          </Text>
          <Text
            color={'white'}
            textAlign={['center', 'start']}
            fontFamily={'Josefin Sans'}
            fontStyle={'normal'}
            fontSize={{ md: '30px' }}
            lineHeight={{ base: '20px', md: '34px' }}
            w={{ base: '300px', md: '500px', lg: '702px' }}
          >
            {props.desc}
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

const CallToActionButton = () => {
  return (
    <Button width={'200px'} position={'unset'} height={'60px'} bg='#FDC20A'>
      Call to action
    </Button>
  );
};

const Features = () => {
  return (
    <Box>
      <FeatureLeft
        title='Campus Ambassador Program'
        desc='An opportunity for the young aspirers to excel, by representing, promoting our initiatives and aligning with our motives.'
        img='#'
      />

      <FeatureRight
        title='Startup School'
        desc='Course-line designed for curious teens eager to break into entrepreneurship.'
        img='#'
      />
    </Box>
  );
};

export default Features;

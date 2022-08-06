import React from 'react';
import {
  Box,
  Text,
  Image,
  Spacer,
  Stack,
  VStack,
  HStack,
} from '@chakra-ui/react';

const InitiativeRight = props => {
  return (
    <Box
      paddingX={{ base: '0.75rem', sm: '1rem', md: '5rem' }}
      paddingY={{ base: '1.5rem' }}
    >
      <Stack direction={{ base: 'column', md: 'row' }} align={'center'}>
        <Box>
          <Image
            borderRadius={{ base: '2rem', sm: '6rem', md: '10rem' }}
            boxSize={{ base: '4rem', sm: '12rem', md: '20rem' }}
            src={props.img}
            alt='Image'
            objectFit={'cover'}
          />
        </Box>
        <Spacer />
        <VStack
          align={{ base: 'center', md: 'end' }}
          maxW={{
            base: 'calc(100% - 4rem)',
            sm: 'calc(100% - 12rem)',
            md: 'calc(100% - 20rem)',
          }}
        >
          <Text
            color={'#FDC20A'}
            fontFamily={'League Spartan'}
            fontSize={{ base: '20px', sm: '35px', lg: '45px' }}
            textAlign={['center', 'end']}
            fontStyle={'normal'}
            fontWeight={700}
            lineHeight={{ base: '20px', sm: '35px', lg: '45px' }}
            letterSpacing={'-0.06em'}
          >
            {props.title.toUpperCase()}
          </Text>
          <Text
            textAlign={['center', 'end']}
            fontFamily={'Josefin Sans'}
            fontStyle={'normal'}
            fontSize={{ md: '30px' }}
            lineHeight={{ base: '20px', md: '34px' }}
          >
            {props.desc}
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

const InitiativeLeft = props => {
  return (
    <Box
      paddingX={{ base: '0.75rem', sm: '1rem', md: '5rem' }}
      paddingY={{ base: '1.5rem' }}
    >
      <Stack direction={{ base: 'column', md: 'row-reverse' }} align={'center'}>
        <Box>
          <Image
            borderRadius={{ base: '2rem', sm: '6rem', md: '10rem' }}
            boxSize={{ base: '4rem', sm: '12rem', md: '20rem' }}
            src={props.img}
            alt='Image'
            objectFit={'cover'}
          />
        </Box>
        <VStack
          align={{ base: 'center', md: 'start' }}
          maxW={{
            base: 'calc(100% - 4rem)',
            sm: 'calc(100% - 12rem)',
            md: 'calc(100% - 20rem)',
          }}
        >
          <Text
            color={'#FDC20A'}
            fontFamily={'League Spartan'}
            fontSize={{ base: '20px', sm: '35px', lg: '45px' }}
            textAlign={['center', 'start']}
            fontStyle={'normal'}
            fontWeight={700}
            lineHeight={{ base: '20px', sm: '35px', lg: '45px' }}
            letterSpacing={'-0.06em'}
          >
            {props.title.toUpperCase()}
          </Text>
          <Text
            textAlign={['center', 'start']}
            fontFamily={'Josefin Sans'}
            fontStyle={'normal'}
            fontSize={{ md: '30px' }}
            lineHeight={{ base: '20px', md: '34px' }}
          >
            {props.desc}
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

const Initiatives = () => {
  return (
    <Box id='initiatives' bg={'black'} color={'white'}>
      <HStack align={'center'} justify={'center'} paddingBottom={3}>
        <Text fontWeight={700} fontSize={{ base: 32, sm: 44, lg: 65 }}>
          Our
        </Text>
        <Text
          color={'#FDC20A'}
          fontWeight={700}
          fontSize={{ base: 32, sm: 44, lg: 65 }}
        >
          Initiatives
        </Text>
      </HStack>
      <InitiativeLeft
        title='Campus Ambassador Program'
        desc='An opportunity for the young aspirers to excel, by representing, promoting our initiatives and aligning with our motives.'
        img='/Campus Ambassador.jpg'
      />

      <InitiativeRight
        title='Startup School'
        desc='Course-line designed for curious teens eager to break into entrepreneurship.'
        img='/startup school.jpg'
      />

      <InitiativeLeft
        title='Newsletter'
        desc='Biweekly articles covering the startup ecosystem and more. Researched, curated and brought to life by a team of passionate folks in CEL.'
        img='/newsletter.jpg'
      />

      <InitiativeRight
        title='Vriddhi'
        desc='Financial literacy sessions for the supporting staff on campus.'
        img='/Vriddhi.png'
      />

      <InitiativeLeft
        title='RED : (Rural Entrepreneurship Development program)'
        desc='We aim to promote Economic Empowerment with Business Innovation by backing self-sustaining Social Ventures, giving back to the Society.'
        img='/RED.png'
      />

      <InitiativeRight
        title='Networking dinner'
        desc='A one-of-a-kind, exclusive event for networking and exchanging ideas with esteemed individuals from the entrepreneurial community. Closed-door event.'
        img='/networking dinner.jpg'
      />

      <InitiativeLeft
        title='Pitch your startup'
        desc='Recurring event on campus, where young founders can pitch their ideas in front of a large audience, find their co-founders and hire other like-minded individuals on board.'
        img='/pitch your company.jpg'
      />

      <InitiativeRight
        title='Today I Learned'
        desc='A series of workshops and sessions aimed at upskilling the associates of CEL.'
        img='/today i learned.png'
      />

      <InitiativeLeft
        title='Built In-House'
        desc='An initiative to bring BITSian startups into limelight, by helping them get their reach through our social media handles.'
        img='/built in-house.png'
      />
    </Box>
  );
};

export default Initiatives;

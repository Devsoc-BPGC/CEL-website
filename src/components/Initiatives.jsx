import React from 'react';
import {
  Box,
  Text,
  Image,
  // Button,
  Spacer,
  Stack,
  VStack,
} from '@chakra-ui/react';

const InitiativeRight = props => {
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
            textAlign={['center', 'end']}
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

const InitiativeLeft = props => {
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
            textAlign={['center', 'start']}
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

// const CallToActionButton = () => {
//   return (
//     <Button width={'200px'} position={'unset'} height={'60px'} bg='#FDC20A'>
//       Call to action
//     </Button>
//   );
// };

const Initiatives = () => {
  return (
    <Box id='initiatives'>
      <InitiativeLeft
        title='Campus Ambassador Program'
        desc='An opportunity for the young aspirers to excel, by representing, promoting our initiatives and aligning with our motives.'
        img='#'
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

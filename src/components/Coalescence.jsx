import { Flex, Text } from '@chakra-ui/react';
import Countdown from './Countdown';

const Coalescence = () => {
  return (
    <Flex
      direction={'column'}
      id={'coalescence'}
      py={'2rem'}
      px={{ base: '1.5rem', md: '3.5rem' }}
      pb={0}
    >
      <Text
        color={'#DBAB18'}
        fontSize={{ base: '3rem', md: '4rem' }}
        fontFamily={'League Spartan'}
        align={{ base: 'center', lg: 'center' }}
      >
        Coalescence
      </Text>
      <Flex
        direction={{ base: 'column-reverse', lg: 'row' }}
        justifyContent={'space-between'}
        py={'1rem'}
      >
        <Text
          w={{ base: '100%', lg: '65%' }}
          fontSize={{ base: '1.75rem', md: '2.5rem' }}
          py={'1rem'}
          fontFamily={'League Spartan'}
          color={'#D9D9D9'}
          align={{ base: 'center', lg: 'left' }}
        >
          CEL BITS Goa is the organiser of BITS Goa’s annual E-summit,
          Coalescence.
        </Text>
        <Flex flexGrow={1} justifyContent={'center'}>
          <Countdown target={new Date('2023-1-27')} />
        </Flex>
      </Flex>
      <Text
        fontSize={{ base: '1.25rem', md: '1.75rem' }}
        lineHeight={1.5}
        py={'1rem'}
        maxW={{ base: '100%', lg: '65%' }}
        align={{ base: 'center', lg: 'left' }}
      >
        Coalescence hosts some top-notch entrepreneurs in India with several
        events, individual talks(ACTs) and a variety of panels such as - The
        Y-Combinator conclave, web3 panel, Fintech panel and many more. But most
        importantly, it provides a platform for young and aspiring entrepreneurs
        to network and exchange ideas with today's changemakers and go through a
        transformative journey.
      </Text>
    </Flex>
  );
};

export default Coalescence;

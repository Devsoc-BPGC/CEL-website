import { Flex, HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';

const Countdown = props => {
  const [countdown, setCountdown] = useState(Date.now());
  const diff = props.target - countdown;
  setTimeout(() => setCountdown(Date.now()), 250);
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
  const minutes = String(Math.floor((diff / 60000) % 60)).padStart(2, '0');
  const hours = String(Math.floor((diff / 3600000) % 24)).padStart(2, '0');
  const days = String(Math.floor(diff / 86400000)).padStart(2, '0');
  return (
    <HStack wrap={'nowrap'} spacing={2} height={'fit-content'}>
      <Flex direction={'column'} align={'center'}>
        <Text mx={-10}>Days</Text>
        <Text fontSize={'2.5rem'} color={'#D9D9D9'}>
          {days}
        </Text>
      </Flex>
      <Text fontSize={'2.5rem'} alignSelf={'end'} color={'#FDC20A'}>
        :
      </Text>
      <Flex direction={'column'} align={'center'}>
        <Text mx={-10}>Hours</Text>
        <Text fontSize={'2.5rem'} color={'#D9D9D9'}>
          {hours}
        </Text>
      </Flex>
      <Text fontSize={'2.5rem'} alignSelf={'end'} color={'#FDC20A'}>
        :
      </Text>
      <Flex direction={'column'} align={'center'}>
        <Text mx={-10}>Minutes</Text>
        <Text fontSize={'2.5rem'} color={'#D9D9D9'}>
          {minutes}
        </Text>
      </Flex>
      <Text
        fontSize={'2.5rem'}
        alignSelf={'end'}
        display={{ base: 'none', sm: 'block' }}
        color={'#FDC20A'}
      >
        :
      </Text>
      <Flex
        direction={'column'}
        align={'center'}
        display={{ base: 'none', sm: 'flex' }}
      >
        <Text mx={-10}>Seconds</Text>
        <Text fontSize={'2.5rem'} color={'#D9D9D9'}>
          {seconds}
        </Text>
      </Flex>
    </HStack>
  );
};

export default Countdown;

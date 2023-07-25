import {
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { RiSendPlaneLine } from 'react-icons/ri';

const Novatia = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();
  const sendEmail = () => {
    fetch(
      'https://script.google.com/macros/s/AKfycbxbAkJCm6-Zp0Zz7i3D1NCnmObrPc3q6nhGhOG--BOpK_HvJ3mSFfwc745uk3VIoUch/exec',
      {
        body: JSON.stringify({ data: [new Date(), email] }),
        method: 'POST',
        mode: 'no-cors',
      }
    ).then(() => {
      toast({
        title: 'Email sent',
        description: 'You are added to the watchlist for our events!',
        status: 'success',
      });
      setEmail('');
    });
  };
  return (
    <Flex
      direction={'column'}
      id={'novatia'}
      px={{ base: '1.5rem', md: '3.5rem' }}
      pt={'3.5rem'}
    >
      <Text
        color={'#DBAB18'}
        fontSize={{ base: '3rem', md: '4rem' }}
        fontFamily={'League Spartan'}
        align={{ base: 'center', lg: 'center' }}
      >
        Novatia
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
          ‘Choose a VC over a CV’
        </Text>
        {/* <Flex flexGrow={1} justifyContent={'center'}>
          <Countdown target={new Date('2023-2-24')} />
        </Flex> */}
      </Flex>
      <Text
        fontSize={{ base: '1.25rem', md: '1.75rem' }}
        lineHeight={1.5}
        py={'1rem'}
        align={{ base: 'center', lg: 'left' }}
        maxW={{ base: '100%', lg: '65%' }}
      >
        Do you have an innovative idea which has the power to bring about a
        positive change?
      </Text>
      <Text
        fontSize={{ base: '1.25rem', md: '1.75rem' }}
        lineHeight={1.5}
        py={'1rem'}
        align={{ base: 'center', lg: 'left' }}
        maxW={{ base: '100%', lg: '65%' }}
      >
        CEL BITS Goa brings to you ‘Novatia’, our flagship B-Plan competition.
      </Text>
      <Text
        fontSize={{ base: '1.25rem', md: '1.75rem' }}
        lineHeight={1.5}
        py={'1rem'}
        align={{ base: 'center', lg: 'left' }}
        maxW={{ base: '100%', lg: '65%' }}
      >
        Novatia provides a platform for founders to pitch their ideas or their
        products to the top Venture Capitals in India.
      </Text>
      <VStack
        direction={'column'}
        alignItems={'center'}
        spacing={3}
        py={'1rem'}
        pos={'sticky'}
        bottom={'0'}
        background={'black'}
        mx={{ base: '-1.5rem', md: '-3.5rem' }}
      >
        <Text>Be notified by an email as soon as we go live...</Text>
        <InputGroup w={'100%'} maxW={'20rem'} background={'#202D2D'}>
          <Input
            flexGrow={1}
            borderRadius={0}
            border={'none'}
            placeholder={'Email...'}
            type={'email'}
            focusBorderColor={'none'}
            color={'#FDC20A'}
            _placeholder={{
              color: '#FDC20A',
            }}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <InputRightAddon
            children={<RiSendPlaneLine color={'black'} size={25} />}
            borderRadius={0}
            background={'#FDC20A'}
            _hover={{
              cursor: 'pointer',
            }}
            onClick={sendEmail}
          />
        </InputGroup>
      </VStack>
    </Flex>
  );
};

export default Novatia;

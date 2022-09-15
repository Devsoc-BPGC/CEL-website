import { Flex } from '@chakra-ui/react';
import Coalescence from './Coalescence';
import Novatia from './Novatia';

const Events = () => {
  return (
    <Flex
      direction={'column'}
      background={
        'linear-gradient(90deg, rgba(0, 0, 0, 0.83) 42.88%, rgba(0, 0, 0, 0.83) 42.89%, rgba(0, 0, 0, 0) 100%), url(/events-bg.png)'
      }
      backgroundSize={'cover'}
      backgroundAttachment={'fixed'}
      color={'white'}
    >
      <Coalescence />
      <Novatia />
    </Flex>
  );
};

export default Events;

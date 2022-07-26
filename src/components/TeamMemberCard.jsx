import React from 'react';
import { Text, Avatar, Flex, Link } from '@chakra-ui/react';

const TeamMemberCard = props => {
  return (
    <Flex
      w={{ base: '75vw', sm: 220, lg: 320 }}
      boxShadow={'5px 5px 2px white'}
      transition={'all'}
      transitionDuration={'0.8s'}
      _hover={{
        boxShadow: '10px 10px 5px white',
        transform: 'scale(1.075)',
      }}
      border={'2px solid #eee'}
      backgroundImage={
        'linear-gradient(#FDC20A 0%,#FDC20A 25%, black 25%, black 100%)'
      }
      py={12}
      direction={'column'}
      alignItems={'center'}
      textAlign={'center'}
    >
      <Avatar
        w={{ base: '45vw', sm: 125, lg: 200 }}
        h={{ base: '45vw', sm: 125, lg: 200 }}
        name={props.name}
        src={props.image}
        position={'unset'}
      />
      <Flex direction={'column'} flexGrow={1} justifyContent={'center'}>
        <Text
          fontWeight={700}
          fontSize={{ base: 16, lg: 20 }}
          color='#FDC20A'
          p={2}
        >
          {props.title.toUpperCase()}
        </Text>
        <Text fontWeight={600} fontSize={{ base: 16, lg: 20 }} p={2}>
          {props.name.toUpperCase()}
        </Text>
        <Link href={props.linkedIn}>
          <Text fontSize={{ base: 12, lg: 16 }} mt={2}>
            LinkedIn Profile
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default TeamMemberCard;

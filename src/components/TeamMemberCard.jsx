import React from 'react';
import { Box, Text, Avatar, Flex } from '@chakra-ui/react';

const TeamMemberCard = props => {
  return (
    <Box w={200} h={250} borderRight={'2px'} borderBottom={'2px'}>
      <Avatar size='2xl' name={props.name} src='#' />
      <Text fontWeight={700} fontSize='22px' color='#FDC20A' p={2}>
        {props.title.toUpperCase()}
      </Text>
      <Text fontWeight={600} fontSize='20px'>
        {props.name.toUpperCase()}
      </Text>
      <Flex
        flexDirection='column'
        align='flex-start'
        fontSize='10px'
        paddingLeft={6}
      >
        <Text>Contact: {props.contact}</Text>
        <Text>Email: {props.email}</Text>
      </Flex>
    </Box>
  );
};

export default TeamMemberCard;

import React from 'react';
import { Box, Text, Avatar } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

export const TeamMemberCard = props => {
  return (
    <Box w={200}>
      <Avatar size='2xl' name='John Smith' src='#' />
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

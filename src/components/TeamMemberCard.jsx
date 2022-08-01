import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';

export const TeamMemberCard = () => {
  return (
    <Box>
      <Avatar size='2xl' name='John Smith' src='#' />
      <Text>COORDINATOR</Text>
      <Text>John Smith</Text>
      <Text>Contact: +91 1234567890</Text>
      <Text>Email: abc@xyz.com</Text>
    </Box>
  );
};

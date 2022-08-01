import React from 'react';
import { Box, Text, Avatar } from '@chakra-ui/react';

const TeamMemberCard = () => {
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

export default TeamMemberCard;

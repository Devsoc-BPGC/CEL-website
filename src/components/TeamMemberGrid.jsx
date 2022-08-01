import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { SimpleGrid, Box } from '@chakra-ui/react';

const TeamMemberGrid = () => {
  return (
    <Box textAlign='center' color='white' bg='black' p={100}>
      <SimpleGrid columns={[1, 2, 3]} spacing='20px' justifyItems='center'>
        <TeamMemberCard
          name='John Smith'
          title='Coordinator'
          contact='+91 1234567890'
          email='abc@xyz.com'
        />
        <TeamMemberCard
          name='John Smith'
          title='Coordinator'
          contact='+91 1234567890'
          email='abc@xyz.com'
        />
        <TeamMemberCard
          name='John Smith'
          title='Coordinator'
          contact='+91 1234567890'
          email='abc@xyz.com'
        />
        <TeamMemberCard
          name='John Smith'
          title='Coordinator'
          contact='+91 1234567890'
          email='abc@xyz.com'
        />
        <TeamMemberCard
          name='John Smith'
          title='Coordinator'
          contact='+91 1234567890'
          email='abc@xyz.com'
        />
        <TeamMemberCard
          name='John Smith'
          title='Coordinator'
          contact='+91 1234567890'
          email='abc@xyz.com'
        />
      </SimpleGrid>
    </Box>
  );
};

export default TeamMemberGrid;

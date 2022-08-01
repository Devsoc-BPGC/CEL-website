import React from 'react';
import { TeamMemberCard } from './TeamMemberCard';
import { SimpleGrid } from '@chakra-ui/react';

export const TeamMemberGrid = () => {
  return (
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
  );
};

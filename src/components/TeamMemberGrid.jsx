import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { SimpleGrid } from '@chakra-ui/react';

const TeamMemberGrid = () => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing='20px'>
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
    </SimpleGrid>
  );
};

export default TeamMemberGrid;
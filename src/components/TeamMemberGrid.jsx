import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { SimpleGrid, Box, Text } from '@chakra-ui/react';

import Harsh from '../assets/img/coordis/Harsh.jpg';
import Sathvik from '../assets/img/coordis/Sathvik.jpg';
import Archit from '../assets/img/coordis/Archit.jpg';
import Aastha from '../assets/img/coordis/Aastha.jpg';
import Simran from '../assets/img/coordis/Simran.jpg';

const TeamMemberGrid = () => {
  return (
    <Box color='white' bg='black' p={25} id='team'>
      <Text fontWeight={700} fontSize={{ base: 32, sm: 44, lg: 65 }}>
        COORDINATORS
      </Text>
      <Text
        fontWeight={700}
        fontSize={{ base: 32, sm: 44, lg: 65 }}
        color='#FDC20A'
        p={2}
        mb={8}
      >
        FOR 2022-23
      </Text>
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3 }}
        spacing='50px'
        justifyItems='center'
        justifyContent={'center'}
      >
        <TeamMemberCard
          name='Harsh Singla'
          title='President'
          linkedIn='https://www.linkedin.com/in/harshsinglaa/'
          image={Harsh}
        />
        <TeamMemberCard
          name='Aastha Kapoor'
          title='Coalescence Convenor and Treasurer'
          linkedIn='https://www.linkedin.com/in/aastha-kapoor-974066258/'
          image={Aastha}
        />
        <TeamMemberCard
          name='Sathvik Nama'
          title='Sponsorship and Public Relations Head '
          linkedIn='https://www.linkedin.com/in/sathvik-nama-787563219/'
          image={Sathvik}
        />
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 2 }}
        spacing='50px'
        justifyItems='center'
        mt={'3rem'}
      >
        <TeamMemberCard
          name='Archit Arya'
          title='Operations and Initiatives Head'
          linkedIn='https://www.linkedin.com/in/archit-arya-57355b15a/'
          image={Archit}
        />
        <TeamMemberCard
          name='Simran Ahluwalia'
          title='Marketing and Media Head'
          linkedIn='https://www.linkedin.com/in/simran-ahluwalia-b96299245/'
          image={Simran}
        />
      </SimpleGrid>
    </Box>
  );
};

export default TeamMemberGrid;

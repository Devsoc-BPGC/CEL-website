import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { SimpleGrid, Box, Text } from '@chakra-ui/react';

import Saakshi from '../assets/img/coordis/Saakshi.jpg';
import Utkarsh from '../assets/img/coordis/Utkarsh.jpg';
import Rohan from '../assets/img/coordis/Rohan.jpg';
import Pradyuman from '../assets/img/coordis/Pradyuman.jpg';
import Kanha from '../assets/img/coordis/Kanha.jfif';
import Harsha from '../assets/img/coordis/Harsha.jpg';

const TeamMemberGrid = () => {
  return (
    <Box color='white' bg='black' p={25} id='contact'>
      <Text fontWeight={700} fontSize={{ base: 32, sm: 44, lg: 65 }}>
        COORDINATORS
      </Text>
      <Text
        fontWeight={700}
        fontSize={{ base: 32, sm: 44, lg: 65 }}
        color='#FDC20A'
        p={2}
      >
        FOR 2022-23
      </Text>
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3 }}
        spacing='50px'
        justifyItems='center'
      >
        <TeamMemberCard
          name='Saakshi Adiga'
          title='President'
          linkedIn='https://www.linkedin.com/in/saakshi-adiga-ab43861b1/'
          image={Saakshi}
        />
        <TeamMemberCard
          name='Kanha Mishra'
          title='Vice President'
          linkedIn='https://www.linkedin.com/in/kanha-mishra-10b1a8209/'
          image={Kanha}
        />
        <TeamMemberCard
          name='Rohan Fulwani'
          title='CR & Sponsorship Head'
          linkedIn='https://www.linkedin.com/in/rohan-fulwani-5877b81b8'
          image={Rohan}
        />
        <TeamMemberCard
          name='Pradyuman Turlapati'
          title='Events & Initiatives Head'
          linkedIn='https://www.linkedin.com/in/pradyturlapati'
          image={Pradyuman}
        />
        <TeamMemberCard
          name='Harsha Battu'
          title='Marketing & Design Head'
          linkedIn='https://www.linkedin.com/in/harsha-battu-21b37b154/'
          image={Harsha}
        />
        <TeamMemberCard
          name='Utkarsh'
          title='Operations & Finance Head'
          linkedIn='https://www.linkedin.com/in/utkarsh-bharadwaj-b65758204'
          image={Utkarsh}
        />
      </SimpleGrid>
    </Box>
  );
};

export default TeamMemberGrid;

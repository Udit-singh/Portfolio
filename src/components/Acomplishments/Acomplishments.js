import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxTitle, BoxText } from './AcomplishmentsStyles';

const data = [
  { title: 'Microsoft Technology Associate', text: 'Software Development Fundamentals (MTA)'},
  { title: 'Architecting with Google Compute Engine Specialization', text: 'Achieved specialization certificate and Goodies Milestone'},
  { title: 'TechFest IIT Bombay', text: 'Campus Ambassador, Achieved certificate of appreciation'},
];

const Acomplishments = () => (
 <Section>
   <SectionTitle>Acomplishment</SectionTitle>
   <Boxes>
     {data.map((card,index) => (
       <Box key={index}>
         <BoxTitle>{card.title}</BoxTitle>
         <BoxText>{card.text}</BoxText>
       </Box>  
     ))}
   </Boxes>
 </Section>
);

export default Acomplishments;

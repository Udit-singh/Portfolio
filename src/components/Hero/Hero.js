import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
     Hi there <br/>
     I'm Udit Singh
     </SectionTitle>
     <SectionText>
       A Full Stack Developer
     </SectionText>
     <Button>
       Learn More
     </Button>
   </LeftSection>
 </Section>
);

export default Hero;
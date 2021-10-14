import React, { useState, useRef, useEffect } from 'react';

// import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
// import { TimeLineData } from '../../constants/constants';

const About = () => {
  return (
    <Section id="about">
       <SectionDivider />
       <br/>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      I am currently a third-year Computer Science undergraduate student at Chitkara University. I would be interested in training programs, internships or certifications focused on Flutter, Dart and MERN Stack, and App Development.

I am always ready to have new experiences, meet new people and learn new things. I ﬁnd the idea of creating value and developing some amazing things for the community and impacting the world through my gratifying work.

I do have a quite expertise in deploying, managing and scaling virtual machine instances, ec2 servers and many more using Google Cloud Platform-(GCP) and Amazon Web Services-(AWS).
      </SectionText>
    </Section>
  );
};

export default About;
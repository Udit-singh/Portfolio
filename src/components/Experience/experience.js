import React, { useState, useRef, useEffect, Component } from 'react';
import { Section, SectionDivider } from '../../styles/GlobalComponents';
import { education } from '../../constants/constants';
import {ListTemp, List, ListContainer, ListItem,ListDate, ListParagraph, ListTitle, ListSubTitle } from '../Works/worksStyle';
import { SectionTitle2 } from './experienceStyles';

const Experience = () => {
  return (
    <Section row padding id="experience">
       <SectionDivider />
       <br/>
        <SectionTitle2>Education</SectionTitle2>
        <ListTemp>
       {education.map(({title,subtitle,date,description}) => (
           <div style={{justifyContent: "space-between"}}>
            <List>
                <ListItem>
                    <ListContainer>
                    <ListTitle>{title}</ListTitle>
                    <ListSubTitle>{subtitle}</ListSubTitle>
                    <ListDate>{date}</ListDate>
                    <ListParagraph>{description}</ListParagraph>
                    </ListContainer>
                </ListItem>
    </List>
           </div>
       ))}
      </ListTemp>
    </Section>
  );
  
};

export default Experience;
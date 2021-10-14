import React, { useState, useRef, useEffect, Component } from 'react';
import { Section, SectionDivider } from '../../styles/GlobalComponents';
import { works } from '../../constants/constants';
import { SectionTitle1,ListTemp, List, ListContainer, ListItem,ListDate, ListParagraph, ListTitle, ListSubTitle } from './worksStyle';

const Works = () => {
  return (
    <Section row padding id="works">
       <SectionDivider />
       <br/>
        <SectionTitle1>Works</SectionTitle1>
        <ListTemp>
       {works.map(({title,subtitle,date,description}) => (
           
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

export default Works;
import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
 <Section nopadding id="project">
   <SectionDivider/>
   <SectionTitle main>Projects</SectionTitle>
   <GridContainer>
     {projects.map(({id, title, description, image, tags, source}) => (
      <BlogCard key={id}>
        <Img src={image}/>
        <TitleContent>
          <HeaderThree title>{title}</HeaderThree>
          <Hr/>
        </TitleContent>
        <CardInfo>{description}</CardInfo>
        <div>
          <br />
          <TitleContent>Stack</TitleContent>
          <TagList>
            {
              tags.map((tag,i) =>(
                <Tag key={i}>{tag}</Tag>
              ))
            }
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href={source}>Source Code</ExternalLinks>
        </UtilityList>
      </BlogCard>
     ))}
   </GridContainer>
 </Section>
);

export default Projects;
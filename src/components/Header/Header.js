import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillMediumSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link passHref href="/">
        <a style={{display: "flex",alignItems: "center",color: "white",marginBottom: "20px"}}>
          <DiCssdeck size="3rem"/><Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
   <Link passHref href="#about">
        <NavLink>About</NavLink>
      </Link>
      </li>
      <li>
      <Link passHref href="#works">
        <NavLink>Works</NavLink>
      </Link>
      </li>
      <li>
      <Link passHref href="#project">
        <NavLink>Projects</NavLink>
      </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Udit-singh/">
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/udit-singh-081008128/">
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href="https://singhudit245.medium.com/">
        <AiFillMediumSquare size="3rem"></AiFillMediumSquare>
      </SocialIcons>
      <SocialIcons href="https://twitter.com/Udit_singh146/">
        <AiFillTwitterCircle size="3rem"></AiFillTwitterCircle>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

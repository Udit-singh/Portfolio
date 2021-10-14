import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillMediumSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:8107533816">+91 8107533816</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:singhudit245@gmail.com">singhudit245@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>@Portfolio</Slogan>
        </CompanyContainer>
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
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;

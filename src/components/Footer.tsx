import React from 'react';

import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

import { FooterWrapper } from '../styles/StyledComponents';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <h1>Desenvolvido por Gabriel Martins</h1>
        <a href="LinkedIn">
          <LinkedinLogo size={32} />
        </a>
        <a href="GitHub">
          <GithubLogo size={32} />
        </a>
      </FooterWrapper>
    </>
  );
};

export default Footer;

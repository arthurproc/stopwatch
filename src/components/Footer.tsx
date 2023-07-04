import React from 'react';

import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

import { FooterWrapper } from '../styles/StyledComponents';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <h1>Desenvolvido por Gabriel Martins</h1>
        <a href="https://www.linkedin.com/in/gabrielcmm/" target="_blank" rel="noreferrer">
          <LinkedinLogo size={32} />
        </a>
        <a href="https://www.github.com/gabrielcmm/" target="_blank" rel="noreferrer">
          <GithubLogo size={32} />
        </a>
      </FooterWrapper>
    </>
  );
};

export default Footer;

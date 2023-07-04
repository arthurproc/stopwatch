import React, { FC } from 'react';

import { Timer } from '@phosphor-icons/react';

import { HeaderContainer, HeaderWrapper, Title } from '../styles/StyledComponents';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

import ToggleDarkMode from './ToggleDarkMode';

type HeaderProps = {
  isDarkMode: boolean;
  handleToggle: () => void;
};
const Header: FC<HeaderProps> = ({ isDarkMode, handleToggle }) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Timer size={52} color={isDarkMode ? dark.colors.primaryText : light.colors.primaryText} />
        <Title>Timer</Title>
      </HeaderContainer>
      <ToggleDarkMode handleToggle={handleToggle} isDarkMode={isDarkMode} />
    </HeaderWrapper>
  );
};

export default Header;

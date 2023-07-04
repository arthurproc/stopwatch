import React, { FC } from 'react';

import { List } from '@phosphor-icons/react';

import { HeaderWrapper, MenuItem, Title } from '../styles/StyledComponents';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

type HeaderProps = {
  isDarkMode: boolean;
  handleToggle: () => void;
};
const Header: FC<HeaderProps> = ({ isDarkMode, handleToggle }) => {
  return (
    <HeaderWrapper>
      <MenuItem>
        <List
          size={52}
          color={
            isDarkMode ? dark.colors.primaryText : light.colors.primaryText
          }
        />
      </MenuItem>
      <Title>Trybe Stopwatch </Title>
      <button onClick={handleToggle}>Toggle Dark Mode</button>
    </HeaderWrapper>
  );
};

export default Header;

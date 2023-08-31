import { FC } from 'react';

import { useTheme } from 'styled-components';

import { Timer } from '@phosphor-icons/react';

import { HeaderContainer, HeaderWrapper, Title } from '../styles/StyledComponents';

import ToggleDarkMode from './ToggleDarkMode';

type HeaderProps = {
  handleToggle: () => void;
};
const Header: FC<HeaderProps> = ({ handleToggle }) => {
  const theme = useTheme();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Timer size={52} color={theme.colors.primaryText} />
        <Title>Timer</Title>
      </HeaderContainer>
      <ToggleDarkMode handleToggle={handleToggle} />
    </HeaderWrapper>
  );
};

export default Header;

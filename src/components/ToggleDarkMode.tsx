import { FC } from 'react';

import { useTheme } from 'styled-components';

import { Moon, Sun } from '@phosphor-icons/react';

import { MenuItem } from '../styles/StyledComponents';

type ToggleDarkModeProps = {
  handleToggle: () => void;
};
const ToggleDarkMode: FC<ToggleDarkModeProps> = ({ handleToggle }) => {
  const theme = useTheme();

  return (
    <MenuItem>
      {theme.currentTheme == 'dark' ? (
        <Sun size={52} onClick={handleToggle} color={theme.colors.primaryText} />
      ) : (
        <Moon size={52} onClick={handleToggle} color={theme.colors.primaryText} />
      )}
    </MenuItem>
  );
};

export default ToggleDarkMode;

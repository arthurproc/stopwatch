import { FC } from 'react';

import { Moon, Sun } from '@phosphor-icons/react';

import { MenuItem } from '../styles/StyledComponents';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

type ToggleDarkModeProps = {
  isDarkMode: boolean;
  handleToggle: () => void;
};
const ToggleDarkMode: FC<ToggleDarkModeProps> = ({ isDarkMode, handleToggle }) => {
  return (
    <MenuItem>
      {isDarkMode ? (
        <Sun size={52} onClick={handleToggle} color={dark.colors.primaryText} />
      ) : (
        <Moon size={52} onClick={handleToggle} color={light.colors.primaryText} />
      )}
    </MenuItem>
  );
};

export default ToggleDarkMode;

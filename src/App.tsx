import React, { useState } from 'react';

import Timer from './components/Timer';
import { ThemeProvider } from 'styled-components';

import { List } from '@phosphor-icons/react';

import { GlobalStyle } from './styles/GlobalStyle';
import {
  HeaderWrapper,
  MainContainer,
  MenuItem,
  Title,
} from './styles/StyledComponents';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [timeInSeconds, setTimeInSeconds] = useState(10);
  const handleToggle = () => {
    setIsDarkMode((prevState) => !prevState);
  };
  return (
    <>
      <ThemeProvider theme={isDarkMode ? dark : light}>
        <GlobalStyle />
        <MainContainer>
          <HeaderWrapper>
            <MenuItem>
              <List
                size={52}
                color={
                  isDarkMode
                    ? dark.colors.primaryText
                    : light.colors.primaryText
                }
              />
            </MenuItem>
            <Title>Trybe Stopwatch </Title>
            <button onClick={() => handleToggle()}>Toggle Dark Mode</button>
          </HeaderWrapper>
          <Timer timeInSeconds={timeInSeconds} />
        </MainContainer>
      </ThemeProvider>
    </>
  );
};

export default App;

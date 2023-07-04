import React, { useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Timer from './components/Timer';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/GlobalStyle';
import { MainContainer } from './styles/StyledComponents';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggle = () => {
    setIsDarkMode((prevState) => !prevState);
  };
  return (
    <>
      <ThemeProvider theme={isDarkMode ? dark : light}>
        <GlobalStyle />
        <MainContainer>
          <Header isDarkMode={isDarkMode} handleToggle={handleToggle} />
          <Timer />
        </MainContainer>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;

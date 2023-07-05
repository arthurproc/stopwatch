import styled from 'styled-components';

export const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
`;

export const MenuItem = styled.div`
  cursor: pointer;
  transition: all 200ms;
  &:hover {
    filter: brightness(70%);
  }
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;

  & > input {
    padding: 0.8rem;
    font-size: 1.2rem;
    background-color: ${(props) => props.theme.colors.background};
    border: 1px solid;
    border-right: none;
    border-color: ${(props) => props.theme.colors.primaryText};
    outline: none;
    color: ${(props) => props.theme.colors.primaryText};
    border-radius: 1rem 0px 0px 1rem;
  }

  & > button {
    cursor: pointer;
    font-size: 1.2rem;
    border: 1px solid;
    border-left: none;
    border-color: ${(props) => props.theme.colors.primaryText};
    border-radius: 0 1rem 1rem 0;
    background: ${(props) => props.theme.colors.buttonGradient};
    color: ${(props) => props.theme.colors.background};
    transition: all 250ms;
  }

  & > button:disabled {
    cursor: default;
    filter: grayscale(100%);
  }
`;

export const TimerElement = styled.div`
  display: inline-block;
  background-image: ${(props) => props.theme.colors.timerGradient};
  margin-left: 0.2rem;
  width: fit-content;
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  border-radius: 2rem 0px 0px 2rem;
  & > span {
    font-size: 15rem;
    padding: 2rem;
    background: ${(props) => props.theme.colors.textGradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const TimerElementSplit = styled.div`
  display: inline-block;
  & > span {
    font-size: 15rem;
    background: ${(props) => props.theme.colors.textGradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const TimerElementRight = styled.div`
  display: inline-block;
  background-image: ${(props) => props.theme.colors.timerGradient};
  margin-left: 0.2rem;
  width: fit-content;
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  border-radius: 0px 2rem 2rem 0px;
  & > span {
    font-size: 15rem;
    padding: 2rem;
    background: ${(props) => props.theme.colors.textGradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ControlButtons = styled.button`
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.8rem;
  min-width: 8rem;
  border-radius: 0.8rem;
  border: none;
  background: ${(props) => props.theme.colors.buttonGradient};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  transition: all, 200ms;
  &:hover {
    filter: brightness(90%);
  }
`;

export const ProgressContainer = styled.div`
  margin: 2.2rem 0;
  display: flex;
  justify-content: center;
  progress[value] {
    width: 60%;
    height: 1.5rem;
    -webkit-appearance: none;
    appearance: none;
  }
  progress[value]::-webkit-progress-bar {
    display: inline-block;
    border-radius: 2rem;
    background: ${(props) => props.theme.colors.timerGradient};
  }

  progress[value]::-webkit-progress-value {
    background: ${(props) => props.theme.colors.textGradient};
    border-radius: 2rem;
  }
`;

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
`;

export const ContainerRow = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TimerContainer = styled.main`
  height: calc(100vh - 6rem - 3rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background-color: ${(props) => props.theme.colors.primaryText};
  & > h1 {
    font-weight: 700;
    font-size: 1.3rem;
    margin-right: 1rem;
    color: ${(props) => props.theme.colors.background};
  }
  & > a {
    text-decoration: none;
    margin-right: 2rem;
    color: ${(props) => props.theme.colors.background};
    transition: all 200ms;
  }

  & > a:hover {
    transform: translateY(-2px);
    transform: scale(130%);
  }
`;
export const BlurredContent = styled.div`
  position: relative;
  border-radius: 2rem;
  transition: all 200ms;
  filter: blur(${(props) => (props.about === 'blurred' ? '10px' : '0px')});
`;

export const PlayButton = styled.span`
  cursor: pointer;
  filter: blur(0px);
  position: absolute;
  z-index: 1;
  right: 48%;
  top: 34.5%;
`;

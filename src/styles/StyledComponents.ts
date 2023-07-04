import styled from 'styled-components';

export const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuItem = styled.div`
  cursor: pointer;
  transition: all 200ms;
  &:hover {
    filter: brightness(70%);
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
  & > div {
    font-size: 15rem;
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
  & > div {
    font-size: 15rem;
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
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  progress[value] {
    width: 80%;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ContainerRow = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
`;

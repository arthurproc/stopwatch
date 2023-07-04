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

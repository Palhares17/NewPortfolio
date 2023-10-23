import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${(props) => props.theme.colorTitle};
    font-family: Lexend;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  li {
    font-size: 1;
    font-weight: 400;
    color: ${(props) => props.theme.colorText};
    transition: color 0.1s ease-in-out;
    position: relative;

    .active:after,
    &:after {
      content: "";
      display: block;
      height: 2px;
      width: 0px;
      background: ${(props) => props.theme.gradient};
      margin-top: 6px;
      transition: 0.3s;
      position: absolute;
    }

    .active,
    &:hover {
      color: ${props => props.theme.colorHover};
    }

    .active::after,
    &:hover:after {
      color: ${props => props.theme.colorHover};
      width: 50%;
    }
  }
`;
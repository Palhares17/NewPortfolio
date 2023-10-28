import { styled, keyframes } from 'styled-components';

const animate = keyframes`
  0% {
    background-position:0% 50%;
  };
  50% {
    background-position:100% 50%;
  };
  100% {
    background-position:0% 50%;
  };
`;

export const StyledContact = styled.section`
  margin-top: 5rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;

  input, textarea {
    border: 2px solid transparent;
    display: block;
    padding: 0.8rem;
    border-radius: 4px;
    background-color: ${props => props.theme.colorTag};
    color: ${props => props.theme.colorTitle};
    font-family: 'Ubuntu', sans-serif;
    transition: all 0.2s ease-in-out;

    &::placeholder {
      color: ${props => props.theme.colorText};
    }

    &:focus, &:hover {
      outline: none;
      border: 2px solid ${props => props.theme.boxShadow};
    }
  }

  textarea {
    resize: none;
    height: 6rem;
  }

  button {
    margin-top: 2rem;
    padding: 0.8rem;
    font-family: 'Lexend', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    color: ${props => props.theme.colorTitle};
    cursor: pointer;
    background: ${props => props.theme.gradient};
    background-size: 180% 180%;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: ${props => props.theme.gradientHover};
      animation: ${animate} 1s linear infinite;
      scale: 1.01;
    }
  }
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;
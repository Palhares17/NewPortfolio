import styled from 'styled-components';

export const H1Styles = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  font-family: Ubuntu, sans-serif;
`;


export const GradientText = styled.h1`
  font-family: Ubuntu, sans-serif;
  background: ${props => props.theme.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.06rem;
`;

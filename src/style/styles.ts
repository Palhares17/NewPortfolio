import styled from 'styled-components';

export const H1Styles = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  font-family: Ubuntu, sans-serif;
`;

export const H2Styles = styled.h1`
  font-weight: 500;
  font-size: 1.7rem;
  font-family: Ubuntu, sans-serif;
  font-weight: 600;
`;


export const GradientText = styled.h1`
  font-family: Ubuntu, sans-serif;
  background: ${props => props.theme.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
`;

export const Spacer = styled.div`
  width: 100%;
  height: 1px;
  background: ${props => props.theme.colorSpacer};
  margin-top: 12px;
  margin-bottom: 0.75rem;
`;
import { styled } from 'styled-components';

export const MeContainer = styled.div`
  height: 60vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 5rem;
  align-items: center;
  justify-items: end;

  .intro {
    h1 {
      font-weight: 500;
      font-size: 2rem;
    }

    p {
      color: ${(props) => props.theme.colorText};
      margin-top: 1.5rem;
      font-size: 1rem;
      font-style: normal;
      font-weight: 300;
      line-height: 150%; 
      letter-spacing: 0.025rem;
    }

    h3 {
      margin-top: 1.5rem;
      color: #E7E7E7;
      font-family: Lexend;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.04rem;
      position: relative;

      &::before {
        content: '</>';
        position: absolute;
        left: -3rem;
        background: ${props => props.theme.gradient};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  .tagContainer {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
 
`;

export const Span = styled.span`
  color: #E7E7E7;
  font-family: Ubuntu;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.06rem;
`;

export const Tags = styled.span`
  display: inline-flex;
  padding: 0.25rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  background: ${(props) => props.theme.colorTag};
  border-radius: 4px;
  font-family: Ubuntu, sans-serif;
  font-size: 0.875rem;
`;

export const Photo = styled.div`
  flex-shrink: 0;
  justify-items: end;
  position: relative;

  > img {
    border-radius: 0.5rem;
    box-shadow: 8px 8px 0px 0px ${props => props.theme.boxShadow};
    transform: rotate(4.149deg);
  }
`;

export const SocialTag = styled.div`
  position: absolute;
  top: 16px;
  right: -146px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;

  a {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    border: 1.75px solid transparent;
    color: white;
    background: linear-gradient(#0A0909, #0A0909) padding-box, ${(props) => props.theme.gradient} border-box;
    transition: 0.5s; 
  }
`;
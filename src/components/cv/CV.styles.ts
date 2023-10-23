import styled from 'styled-components';

export const CvContainer = styled.section`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Social = styled.div`
  display: flex;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    font-weight: 600;
  }

  .tags {
    color: #087aa0;
  }
`;

export const MarginBottom = styled.div`
  margin-bottom: 3rem;
`;

export const Paragraph = styled.p`
  margin-top: 1.2rem;
  font-size: 1rem;
  line-height: 32px;
  color: ${props => props.theme.colorText};
`;
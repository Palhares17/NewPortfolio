import { Paragraph } from '../cv/CV.styles';

import styled from 'styled-components';

const FooterStyle = styled.footer`
  position: absolute;
  bottom: 10px;
  display: flex;
  /* left: -10px; */
`;

const Footer = () => {
  return (
    <FooterStyle>
      <Paragraph>© Todos os direitos reservados | 2023</Paragraph>
    </FooterStyle>
    
  );
};

export default Footer;
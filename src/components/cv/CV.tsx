import React from 'react';
import { H1Styles, H2Styles, Spacer } from '../../style/styles';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { CvContainer, MarginBottom, Paragraph, Social } from './CV.styles';

const CV = () => {
  return (
    <>
      <CvContainer>
        <H1Styles>Matheus Silva Palhares</H1Styles>
        <Social>
          <a href='#' className="tags"><BsGithub />GitHub</a>
          <a href='#' className="tags"><BsLinkedin />LinkedIn</a>
          <a href='#'>🏖️ Rio das Ostras | RJ</a>
        </Social>
      </CvContainer>
      <Paragraph>Lorem ipsum dolor sit amet. In laborum nobis sit atque omnis aut nesciunt molestiae 33 temporibus harum est vero officia quo molestias rerum non tempora dolores. </Paragraph>
      <MarginBottom />

      <H2Styles>Formação Acadêmica</H2Styles>
      <Spacer />
      <Paragraph>Lorem ipsum dolor sit amet. In laborum nobis sit atque omnis aut nesciunt molestiae 33 temporibus harum est vero officia quo molestias rerum non tempora dolores. </Paragraph>
      <MarginBottom />

      <H2Styles>Cursos + Qualificações</H2Styles>
      <Spacer />
      <Paragraph>Lorem ipsum dolor sit amet. In laborum nobis sit atque omnis aut nesciunt molestiae 33 temporibus harum est vero officia quo molestias rerum non tempora dolores. </Paragraph>
      <MarginBottom />
    </>
  );
};

export default CV;
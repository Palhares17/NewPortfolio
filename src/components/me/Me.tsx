import React from 'react';
import { GradientText, MeContainer, Photo, Span, Tags } from './Me.styles';
import MyPhoto from '../../assets/myPhoto.png';

const Me = () => {
  return (
    <MeContainer>
      <div className='intro'>
        <h1><Span>E aí,</Span><br></br>Bem-Vindo ao meu <GradientText>Portifólio</GradientText> 👋</h1>
        <p>Lorem ipsum dolor sit amet. Eum ullam officia eum expedita molestiae hic quis excepturi et veritatis harum ut ducimus ratione. Est nulla consequatur nam sint voluptatem et rerum quia</p>

        <h3>
          Minhas Tecnologias
        </h3>
        <div className='tagContainer'>
          <Tags>html</Tags>
          <Tags>js</Tags>
          <Tags>css</Tags>
          <Tags>react</Tags>
          <Tags>figma</Tags>
        </div>

      </div>

      <Photo>
        <img src={MyPhoto} alt="Matheus Palhares" />
        
      </Photo>
    </MeContainer>
  );
};

export default Me;
import { MeContainer, Photo, SocialTag, Span, Tags } from './Me.styles';
import MyPhoto from '../../assets/myPhoto.png';
import { BsGithub, BsLinkedin, BsSpotify } from 'react-icons/bs';
import { GradientText, H1Styles } from '../../style/styles';

const Me = () => {
  return (
    <MeContainer>
      <div className='intro'>
        <H1Styles><Span>E aí,</Span><br></br>Bem-Vindo ao meu <GradientText>Portifólio</GradientText> 👋</H1Styles>
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
        <SocialTag>
          <a href='https://github.com/Palhares17' target="_blank" rel="noreferrer"><BsGithub size={16} />GitHub</a>
          <a href='https://www.linkedin.com/in/matheus-palhares-b90386210/' target="_blank" rel="noreferrer"><BsLinkedin size={16} />LinkedIn</a>
          <a href='https://open.spotify.com/playlist/4AWO2yavVLTVuYE1PKDvXg' target="_blank" rel="noreferrer"><BsSpotify size={16} />Spotify</a>
        </SocialTag>
      </Photo>
    </MeContainer>
  );
};

export default Me;
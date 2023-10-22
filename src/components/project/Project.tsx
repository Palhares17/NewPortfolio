import React from 'react';
import { GradientText, H1Styles } from '../../style/styles';
import html from '../../assets/svg/html.svg';
import react from '../../assets/svg/react.svg';
import wordpress from '../../assets/svg/wordpress.svg';
import { DivSyles, FilterTech, Gallery, Info, Introduction, Square } from './Project.styles';
import { MyProjects, PropsProject } from './MyProjects';

const Project = () => {
  const [mouseEnter, setMouseEnter] = React.useState(false);

  function handleMouse(event: any) {
    event.preventDefault();
    console.log(event.target);
    setMouseEnter(true);
  }

  return (
    <>
      <Introduction>
        <H1Styles>Alguns dos meu <GradientText>trabalhos</GradientText></H1Styles>
        <DivSyles>
          <FilterTech><img src={html} alt="" /></FilterTech>
          <FilterTech><img src={react} alt="" /></FilterTech>
          <FilterTech><img src={wordpress} alt="" /></FilterTech>
        </DivSyles>
      </Introduction>

      <Gallery>
        {MyProjects.map((item: PropsProject) => {
          return (
            <Square key={item.title} onMouseEnter={handleMouse}>
              <img src={item.img} alt="" key={item.title} />
              {mouseEnter &&
                <Info>
                  <h3>{item.title}</h3>
                  {item.techs.map((tech) => {
                    return (
                      <span key={tech}>{tech}</span>
                    );
                  })}
                </Info>}
            </Square>
          );
        })}
      </Gallery>
    </>
  );
};

export default Project;
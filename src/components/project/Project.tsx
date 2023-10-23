import React from 'react';
import { motion } from 'framer-motion';
import { GradientText, H1Styles } from '../../style/styles';

import html from '../../assets/svg/html.svg';
import react from '../../assets/svg/react.svg';
import wordpress from '../../assets/svg/wordpress.svg';

import { DivStyles, FilterTech, Gallery, Info, Introduction, Square } from './Project.styles';
import { MyProjects, PropsProject } from './MyProjects';
import ModalProject from './modalProject/ModalProject';
import { ModalOverlay } from './modalProject/ModalProject.styles';

const Project = () => {
  const [hoveredProject, setHoveredProject] = React.useState<PropsProject | null>(null);
  const [modal, setModal] = React.useState<PropsProject | null>(null);

  const handleMouseEnter = (project: PropsProject) => {
    setHoveredProject(project);
  };

  const handleModal = (project: PropsProject) => {
    console.log(modal);
    setModal(project);
  };

  return (
    <>
      {modal && <ModalProject item={modal} event={() => setModal(null)} />}

      {modal && <ModalOverlay onClick={() => setModal(null)} />}
      <Introduction>
        <H1Styles>Alguns dos meus <GradientText>trabalhos</GradientText></H1Styles>
        <DivStyles>
          <FilterTech><img src={html} alt="" /></FilterTech>
          <FilterTech><img src={react} alt="" /></FilterTech>
          <FilterTech><img src={wordpress} alt="" /></FilterTech>
        </DivStyles>
      </Introduction>

      <Gallery>
        {MyProjects.map((item: PropsProject) => {
          return (
            <Square key={item.title}>
              <img
                src={item.img}
                alt=""
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseOut={() => setHoveredProject(null)}
                onClick={() => handleModal(item)}
              />
              {hoveredProject === item && (
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    opacity: { ease: 'linear' },
                    layout: { duration: 0.3 }
                  }}
                >
                  <Info onMouseEnter={() => handleMouseEnter(item)}>
                    <h3>{item.title}</h3>
                    {item.techs.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </Info>
                </motion.div>
              )}
            </Square>
          );
        })}
      </Gallery>
    </>
  );
};

export default Project;
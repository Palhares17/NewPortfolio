import React from 'react';
import { ContainerModal, LayoutModal } from './ModalProject.styles';
import { GradientText, H1Styles, Spacer } from '../../../style/styles';
import { ModalProjectProps } from '../MyProjects';

import { motion } from 'framer-motion';

const ModalProject = ({ item }: ModalProjectProps) => {
  return (
    <LayoutModal>
      <motion.div
        animate={{
          scale: [0, 1],
        }}
        transition={{ duration: 0.2 }}
      >
        <img src={item.img} alt="" />
        <ContainerModal>
          <H1Styles>{item.title}</H1Styles>
          <Spacer />
          <p>{item.description}</p>
          <h2>Nossas Tecnologias</h2>
          <div className="techs">
            {item.techs.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <GradientText><a href={item.link}>Dá uma olhada</a></GradientText>
        </ContainerModal>
      </motion.div >
    </LayoutModal >
  );
};

export default ModalProject;
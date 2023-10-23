import React from 'react';
import { CloseModal, ContainerModal, Image, LayoutModal } from './ModalProject.styles';
import { GradientText, H1Styles, Spacer } from '../../../style/styles';
import { AiOutlineClose } from 'react-icons/ai';
import { ModalProjectProps } from '../MyProjects';
// import { MyProjects } from '../MyProjects';

const ModalProject = ({ item, event }: ModalProjectProps) => {
  return (
    <LayoutModal>
      <Image $link={item.img} />
      {/* <img src={BikCraft} alt="" /> */}

      <CloseModal onClick={event.onClick}><AiOutlineClose size={16} className="custom-icon" /></CloseModal>
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
    </LayoutModal>
  );
};

export default ModalProject;
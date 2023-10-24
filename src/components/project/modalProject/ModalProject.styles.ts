import styled from 'styled-components';

export const LayoutModal = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 600px;
  height: 75%;
  transform: translate(-50%, -50%);
  z-index: 2000;
  border-radius: 8px;
  background: ${props => props.theme.bgModal};
  box-shadow: 0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);

  img {
  padding: 4px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px 8px 0 0;  
  width: 100%;
  height: 50%;
  }
`;

export const ContainerModal = styled.div`
  margin: 3rem 2rem 0 2rem;

  h1, p, a {
    color: #fff;
  }

  h1 {
    margin-bottom: 0.25rem;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 2rem;
    font-size: 0.875rem;
    color: ${props => props.theme.colorText};
    font-weight: 500;
    line-height: 24px;
  }

  h2 {
    font-size: 1rem;
  }

  .techs {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: .75rem;
    margin-bottom: 2rem;

    span {
      background: ${props => props.theme.colorTag};
      padding: 0.2rem .8rem;
      border-radius: 4px;
      font-size: 0.875rem;
    }
  }

  a {
    font-size: 0.875rem;
    padding: 4px 4px;
    border-bottom: 1px solid ${props => props.theme.boxShadow};
  }
`;

export const CloseModal = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 12px;
  right: 12px;
  padding: 0.25rem;
  cursor: pointer;
  transition: 0.3s;
  background-color: #e5383b;
  border: 2px solid #dc2f02;
  border-radius: 50%;

  .custom-icon {
    color: #fff;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const ModalOverlay = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,.5);
  filter: blur(8px);
  -webkit-filter: blur(8px);
  z-index: 900;
`;
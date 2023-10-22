import styled from 'styled-components';

export const FilterTech = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: ${props => props.theme.colorTag};
  border-radius: 4px;
  img {
    height: 2rem;
    cursor: pointer;
  }
`;

export const DivSyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Introduction = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 3rem;
`;

export const Square = styled.div`
  position: relative;
  /* border: 2px solid ${props => props.theme.boxShadow}; */

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const Info = styled.div`
  position: absolute;
  bottom: 3px;
  width: 100%;
  height: 30%;
  background: rgba(0, 0, 0, 0.81);
  padding-top: 1rem;
  padding-left: 1rem;

  h3 {
    font-size: 1.2rem;
    color: #fff;
    font-family: Lexend, sans-serif;
    font-weight: 500;
    margin-bottom: 0.8rem;
  }

  span {
    padding: .2rem .8rem;
    background: ${props => props.theme.colorTag};
    margin-right: 0.5rem;
    border-radius: 4px;
  }
`;

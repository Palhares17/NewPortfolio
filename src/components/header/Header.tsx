// import React from 'react';
import { HeaderContainer } from './Header.styles';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <h1><Link to="/">Matheus Palhares</Link></h1>

      <nav>
        <ul>
          <li>
            <NavLink to="projects">Projects</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/cv">CV</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
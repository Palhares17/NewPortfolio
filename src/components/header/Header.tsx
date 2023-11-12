// import React from 'react';
import SwitchTheme from '../switchTheme/SwitchTheme';
import { HeaderContainer } from './Header.styles';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ event }: any) => {
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
        <SwitchTheme change={event} />
      </nav>

    </HeaderContainer>
  );
};

export default Header;
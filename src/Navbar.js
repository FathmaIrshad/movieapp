import React from 'react';
import {NavLink} from 'react-router-dom';
// import {Nav,NavLink,Bars,NavMenu} from './NavbarElements';

export default function Navbar(){

    return(
      <nav className='navbar'>
        <div className='container'>
          <div className="nav-elements">
            <ul>
              <li><NavLink to="/">Movie Show </NavLink></li>
              <li><NavLink to="/Tvshow">TV Show</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    );
};


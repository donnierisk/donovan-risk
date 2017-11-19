import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {

  return (
      <nav>
        <ul>
          <li id="about-link"><NavLink exact to='/'>About Me</NavLink></li>
          <li id="skillset-link"><NavLink activeClassName='active' to='/Skillset'>Skillset</NavLink></li>
          <li id="history-link"><NavLink activeClassName='active' to='/MyHistory'>My History</NavLink></li>
        </ul>
      </nav>
  );
}


export default Navbar

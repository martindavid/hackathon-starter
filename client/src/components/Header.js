import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () =>
  (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
      <Link className='navbar-brand' to='/'>Project Name</Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarsExampleDefault' aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/' activeClassName='active'>Home</NavLink></li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='component' activeClassName='active'>Component</NavLink>
          </li>
        </ul>
        <ul className='navbar-nav justify-content-end'>
          <li className='nav-item'>
            <NavLink className='btn btn-outline-success' to='login'>Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );

export default Header;

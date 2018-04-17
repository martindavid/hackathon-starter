import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavItem } from 'reactstrap';

import LoginButton from 'components/LoginButton';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar color='dark' dark expand='md' fixed='top' id='mainNav'>
        <NavbarBrand tag={NavLink} to='/'>Start Bootstrap React</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar className='mr-auto'>
            <NavItem>
              <NavLink
                className='nav-link'
                to='/'
                activeClassName='active'
              >
              Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className='nav-link'
                to='component'
                activeClassName='active'
              >Component
              </NavLink>
            </NavItem>
          </Nav>
          <Nav navbar className='justify-content-end'>
            <NavItem>
              <LoginButton />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;

import React, { Component, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

  import {Link} from 'react-router-dom';

import '../App.css';

const NavigationBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar   className="theNavBar"  light expand="md">
          <NavbarBrand href="/" className="GarnetLabsBrand" >GL</NavbarBrand>
          {/* <NavbarToggler onClick={toggle} /> */}
          <Collapse isOpen={isOpen} navbar>
            <Nav className="theNavBar" className="mr-auto" navbar>
              <NavItem >
                <Link to="/">Home</Link>
              </NavItem >
              <NavItem >
                <Link to="/profile/chris">Chris</Link>
              </NavItem>
              <NavItem >
                <Link to="/profile/david">David</Link>
              </NavItem>
              <NavItem >
                <Link to="/contactUs">Contact Us</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default NavigationBar;

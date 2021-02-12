import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../App.css';

const Footer = (props) => {
  return (
    <div>
      <Nav className="footerStyles">
        <NavItem>
          <NavLink href="https://www.facebook.com/ThisUniverse-100497308197033/?modal=admin_todo_tour"><i className="fa fa-facebook-f"></i></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://twitter.com/ThisUniverse2"><i className="fa fa-twitter"></i></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://www.twitch.tv/thisdotuniverse"><i className="fa fa-twitch"></i></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/This-Universe"><i className="fa fa-github"></i></NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Footer;
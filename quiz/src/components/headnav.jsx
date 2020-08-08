import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const H = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
      return (
      <header>
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Ref Quiz</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/components/">USA Hockey</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Hockey Canada</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">NCAA</NavLink>
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink target='_blank' href="https://hngodwin.com">Portfolio</NavLink>
        </NavItem>
        </Nav>
    </Collapse>
  </Navbar>
      </header>
);

}


export default H;

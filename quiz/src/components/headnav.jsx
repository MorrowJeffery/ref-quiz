import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap';

const H = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglec = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggledd = () => setDropdownOpen(!dropdownOpen);

      return (
      <header>
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Ref Quiz</NavbarBrand>
    <NavbarToggler onClick={togglec} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>

      <Dropdown nav isOpen={dropdownOpen} toggle={toggledd}>
         <DropdownToggle nav caret>
           USA Hockey
         </DropdownToggle>
         <DropdownMenu>
           <DropdownItem>Level 1</DropdownItem>
           <DropdownItem>Level 2</DropdownItem>
           <DropdownItem>Level 3</DropdownItem>
           <DropdownItem>Level 4</DropdownItem>
           <DropdownItem divider />
           <DropdownItem>All</DropdownItem>
         </DropdownMenu>
       </Dropdown>

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

import React from 'react';
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

class H extends React.Component {

  constructor(props) {
      super(props);
      this.togglec = this.togglec.bind(this);
      this.toggledd = this.toggledd.bind(this);
      this.state = {
        isOpen: false,
        dropdownOpen: false
      };
    }
    togglec() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    toggledd() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }


  render() {
      return (
      <header>
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Ref Quiz</NavbarBrand>
    <NavbarToggler onClick={this.togglec} />
    <Collapse isOpen={this.state.isOpen} navbar>
      <Nav className="mr-auto" navbar>

      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggledd}>
         <DropdownToggle nav caret>
           USA Hockey
         </DropdownToggle>
         <DropdownMenu>
           <DropdownItem onClick={() => this.props.fclick('USA Hockey','1')}>
              Level 1
           </DropdownItem>
           <DropdownItem onClick={() => this.props.fclick('USA Hockey','2')}>
              Level 2
           </DropdownItem>
           <DropdownItem onClick={() => this.props.fclick('USA Hockey','3')}>
            Level 3
           </DropdownItem>
           <DropdownItem onClick={() => this.props.fclick('USA Hockey','4')}>
              Level 4
           </DropdownItem>
           <DropdownItem onClick={() => this.props.fclick('USA Hockey','all')}>
            All Levels
           </DropdownItem>
           <DropdownItem divider />
           <DropdownItem>Sled</DropdownItem>
           <DropdownItem divider />
           <DropdownItem> <a className='dropdown-item'
           href="https://www.usahockeyrulebook.com/page/show/1018524-appendix-i-summary-of-penalties/#panelTwo"
           target="_blank"rel="noopener noreferrer"> Penalty Options</a></DropdownItem>
           <DropdownItem> <a className='dropdown-item'
           href="https://www.usahockeyrulebook.com/page/show/1018525-appendix-ii-summary-of-face-off-locations/#panelTwo"
           target="_blank"rel="noopener noreferrer">Faceoff Locations</a></DropdownItem>
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
}

export default H;

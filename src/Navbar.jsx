import React, { useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Col} from 'reactstrap';
import Reloj from './components/Reloj';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink >About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >Contactos</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Reloj/>
      </Navbar>
    
  );
}

export default Example;
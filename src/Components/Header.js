import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faSearch, faHome } from '@fortawesome/free-solid-svg-icons'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className="text-uppercase">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto w-100" navbar>
            <NavItem>
              <NavLink href="/"><FontAwesomeIcon icon={faHome} /> Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Phones</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Macbooks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Ipad</NavLink>
            </NavItem>
          </Nav>

          <NavbarBrand href="/" className="text-uppercase mr-auto logo">octane jump</NavbarBrand>

          <Nav navbar className="w-100 flex-row-reverse">
            <NavItem>
              <NavLink href="/"><FontAwesomeIcon icon={faUser} /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><FontAwesomeIcon icon={faHeart} /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><FontAwesomeIcon icon={faSearch} /></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Input} from 'reactstrap';
import MegaMenu from './MegaMenu'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className="text-uppercase pt-0 pb-0">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavbarBrand href="/" className="text-uppercase mr-auto logo pt-2">octane tech</NavbarBrand>
          <NavItem className="searchBox d-flex justify-content-center pr-3 mr-auto w-100 text-center">
            <span className="searchLogo"><FontAwesomeIcon icon={faSearch} /></span>
            <Input 
              type="text" 
              name="search" 
              placeholder="SEARCH    [For eg. iPhone11, Macbook Pro 16]" 
              className="mainSearch border-0"
            />
          </NavItem>
          <Nav navbar className="flex-row-reverse">
            <NavItem>
              <NavLink href="/" className="text-center">
                <FontAwesomeIcon icon={faUser} />
                <div className="nav-right-icon-desc">Akshay</div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="text-center">
                <div>
                  <span className="icon-bubbles">5</span>
                  <FontAwesomeIcon icon={faShoppingBag} />
                </div>
                <div className="nav-right-icon-desc text-uppercase">cart</div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="text-center">
                <div>
                  <span className="icon-bubbles">7</span>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="nav-right-icon-desc text-uppercase">wishlist</div>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <MegaMenu />
    </div>
  );
}

export default Header;
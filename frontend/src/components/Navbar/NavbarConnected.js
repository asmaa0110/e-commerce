/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Collapse, Navbar, NavbarToggler, Nav, NavItem, Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Signout from '../Auth/Signout';
import CartModal from '../Cart/CartModal';

class NavbarConnected extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.newMethod().state.isOpen,
    });
  }

  newMethod() {
    return this;
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Nav>
            <NavItem>
              <NavLink to="/Home" style={{ display: 'flex', alignItems: 'center' }}>
                <img width="42px" src="https://pngimage.net/wp-content/uploads/2018/06/logo-livre-png-1.png" alt="" />
                <h3 style={{ color: '#17a2b8', padding: '0px 6px' }}>
                  <strong> MonLivre </strong>
                  {' '}
                </h3>
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/Profile"><Button outline color="info" style={{ margin: '0px 30px', height: '100%' }}>Mon profile</Button></NavLink>
              </NavItem>
              <Signout />
              <CartModal />
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    );
  }
}
export default NavbarConnected;

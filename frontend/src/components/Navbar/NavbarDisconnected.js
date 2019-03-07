/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Collapse, Navbar, NavbarToggler, Nav, NavItem, Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import CartModal from '../Cart/CartModal';

class NavbarDisconnected extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const newLocal = this;
    this.setState({
      isOpen: !newLocal.state.isOpen,
    });
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
                <NavLink to="/signup"><Button outline color="secondary">Inscription</Button></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/login"><Button style={{ marginLeft: ' 30px ' }} color="info">Connexion</Button></NavLink>
              </NavItem>
              <CartModal />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavbarDisconnected;

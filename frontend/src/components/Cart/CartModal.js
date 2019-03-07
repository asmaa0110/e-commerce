/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { Query } from 'react-apollo';
import CartList from './CartList';
import { GET_CART } from './CartQuery';

class CartModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    return (
      <div>
        <Query query={GET_CART}>
          {({ data, loading, error }) => {
            if (loading) return <p>...</p>;
            if (error) return <p>err</p>;
            return (
              <Button color="warning" onClick={this.toggle} style={{ margin: '0px 30px' }}>
                {this.props.buttonLabel}
                <span aria-hidden="true">
                  {data.cart.totalQuantity}

                </span>
                <i className="fas fa-shopping-cart" />
              </Button>
            );
          }}
        </Query>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Mon chariot</ModalHeader>
          <ModalBody>
            <CartList />
          </ModalBody>
          <ModalFooter>
            <Button outline color="info" onClick={this.toggle}>Confirmer ma commande</Button>
            {' '}
            <Button color="secondary" onClick={this.toggle}>Annuler</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CartModal;

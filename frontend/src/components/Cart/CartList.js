/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_CART } from './CartQuery';
import CartItem from './CartItem';

class CartList extends Component {
  render() {
    return (
      <Query query={GET_CART}>
        {({ data, loading, error }) => {
          if (loading) return <p>Chargement</p>;
          if (error) return <p>erreur</p>;
          if (data.cart.items.length === 0) return <p>Vous n'avez encore rien sélectionné</p>;
          return (
            <div>
              {data.cart.items.map((item) => (
                <div>

                  <CartItem
                    key={item.Product.id}
                    {...item}
                  />
                </div>
              ))}
              <hr />
              <h3>{`Total: ${data.cart.totalPrice}dt`}</h3>
            </div>
          );
        }}
      </Query>
    );
  }
}
export default CartList;

/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-return-assign */
/* eslint-disable radix */
/* eslint-disable operator-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GET_CART } from './components/Cart/CartQuery';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:4004',
  fetchOptions: {
    credentials: 'include',
  },
  request: (operation) => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
  onError: ({ networkError }) => {
    if (networkError) {
      // eslint-disable-next-line no-console
      console.log('Network error', networkError);
    }
  },
  clientState: {
    defaults: {
      cart: {
        __typename: 'cart',
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
      },

    },
    resolvers: {
      Mutation: {
        addItem: (root, {
          id, ImageUrl, Name, Category, Price, Description,
        }, { cache }) => {
          const data = cache.readQuery({ query: GET_CART });
          data.cart.totalQuantity++;
          if (data.cart.items.some((el) => el.Product.id === id)) {
            data.cart.items.map((el) => {
              if (el.Product.id === id) {
                // eslint-disable-next-line no-return-assign
                return (
                  el.quantity++,
                  data.cart.totalPrice = data.cart.totalPrice + parseInt(el.Product.Price)
                );
              }
              return (
                el.quantity,
                data.cart.totalPrice
              );
            });
          } else {
            data.cart.items.push({
              __typename: 'Item',
              Product: {
                __typename: 'Product',
                id,
                ImageUrl,
                Name,
                Category,
                Price,
                Description,
              },
              quantity: 1,
            });
            data.cart.totalPrice = data.cart.totalPrice + parseInt(Price);
          }

          cache.writeData({ data });
          return null;
        },

        subItem: (root, {
          id, ImageUrl, Name, Category, Price, Description,
        }, { cache }) => {
          const data = cache.readQuery({ query: GET_CART });
          data.cart.totalQuantity--;
          if (data.cart.items.some((el) => el.Product.id === id)) {
            data.cart.items.map((el) => {
              if (el.Product.id === id) {
                return (
                  el.quantity--,
                  data.cart.totalPrice = data.cart.totalPrice - parseInt(el.Product.Price)
                );
              }
              return (
                el.quantity,
                data.cart.totalPrice
              );
            });
          } else {
            data.cart.items.push({
              __typename: 'Item',
              Product: {
                __typename: 'Product',
                id,
                ImageUrl,
                Name,
                Category,
                Price,
                Description,
              },
              quantity: -1,
            });
            data.cart.totalPrice = data.cart.totalPrice - parseInt(Price);
          }
          cache.writeData({ data });
          return null;
        },
      },
    },
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

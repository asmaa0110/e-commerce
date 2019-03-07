/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import { Mutation } from 'react-apollo';
import { ADD_ITEM, SUB_ITEM } from './CartQuery';

export default class CartItem extends Component {
  state={
    total: 0,
    _id: this.props.Product.id,
    Name: this.props.Product.Name,
    Description: this.props.Product.Description,
    Price: this.props.Product.Price,
    Category: this.props.Product.Category,
    ImageUrl: this.props.Product.ImageUrl,
  }

  render() {
    const {
      _id, Name, Description, Price, Category, ImageUrl,
    } = this.state;
    return (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', margin: '10px',
        }}
      >
        <img src={this.props.Product.ImageUrl} alt="" style={{ width: '20%', height: '20%' }} />
        <div style={{ padding: '10px', width: '100%' }}>
          <p><strong>{this.props.Product.Name}</strong></p>
          <p>{`Prix unitaire: ${this.props.Product.Price}dt`}</p>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <p>Qauntité:</p>
            <div style={{ display: 'flex', border: 'solid rgba(0,0,0,.125) 1px', borderRadius: '10px' }}>


              <Mutation mutation={ADD_ITEM}>
                {
                  (addItem, { loading, error }) => {
                    if (loading) return <div>chargement...</div>;
                    if (error) return <div>error</div>;
                    return (
                      <Button
                        style={{ border: 'none' }}
                        outline
                        color="info"
                        onClick={() => addItem({
                          variables: {
                            id: _id, ImageUrl, Name, Category, Price, Description,
                          },
                        })}
                      >+</Button>
                    );
                  }}
              </Mutation>

              <Input type="text" name="quantity" value={this.props.quantity} min="0" style={{ width: '50px', textAlign: 'center', border: 'none' }} />

              <Mutation mutation={SUB_ITEM}>
                {
                  (subItem, { loading, error }) => {
                    if (loading) return <div>chargement...</div>;
                    if (error) return <div>error</div>;
                    if (this.props.quantity >= 2) {
                      return (
                        <Button
                          style={{ border: 'none' }}
                          outline
                          color="danger"
                          onClick={() => subItem({
                            variables: {
                              id: _id, ImageUrl, Name, Category, Price, Description,
                            },
                          })}
                        >-</Button>
                      );
                    }
                    return (
                      <Button style={{ border: 'none' }} outline color="danger">-</Button>
                    );
                  }}
              </Mutation>


            </div>
            <p>{`Prix total :${this.setState.total = this.props.Product.Price * this.props.quantity}dt`}</p>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

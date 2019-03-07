/* eslint-disable react/jsx-filename-extension */
import {
  Button, Form, FormGroup, Input,
} from 'reactstrap';
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { ADD_PRODUCT, GET_PRODUCTS } from '../../queries';


export default class AddProduct extends Component {
    state={
      Name: '',
      Description: '',
      Price: '',
      Category: '',
      ImageUrl: '',
    }

    validateFrom = () => {
      const {
        Name, Description, Price, Category, ImageUrl,
      } = this.state;
      const isInvalid = !Description || !Name || !Price || !Category || !ImageUrl;
      return isInvalid;
    }

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

    updateCache=(cache, { data: { addProduct } }) => {
      const { Products } = cache.readQuery({ query: GET_PRODUCTS });
      cache.writeQuery({
        query: GET_PRODUCTS,
        data: {
          Products: [addProduct, ...Products],
        },
      });
    }

    render() {
      const {
        Name, Description, Price, Category, ImageUrl,
      } = this.state;

      return (
        <div>
          <h2 style={{ padding: '20px' }}>Ajouter un produit</h2>
          <Mutation
            mutation={ADD_PRODUCT}
            variables={{
              Name, Description, Price, Category, ImageUrl,
            }}
            update={this.updateCache}
          >
            {(addProduct, { data, loading, error }) => {
              if (loading) return <h1>Chargement ...</h1>;
              if (data) {
                this.props.history.push('/Home');
              }

              return (
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    addProduct();
                  }}
                  style={{ padding: '0px 400px' }}
                >
                  <FormGroup>
                    <Input type="text" name="Name" value={Name} placeholder="Nom du produit" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Input type="textarea" name="Description" value={Description} placeholder="Description" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" name="Price" value={Price} placeholder="Prix du produit" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup />
                  <FormGroup>
                    <Input type="select" name="Category" value={Category} placeholder="catégorie du produit" onChange={this.handleChange}>
                      <option>roman</option>
                      <option>Thriller</option>
                      <option>Cuisine</option>
                      <option>Bande dessinée</option>
                      <option>Histoire</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" name="ImageUrl" value={ImageUrl} placeholder="lien de l'image" onChange={this.handleChange} />
                  </FormGroup>
                  <Button disabled={loading || this.validateFrom()}>Confirmer</Button>
                  {error && (
                    <p>{error.message}</p>
                  )}
                </Form>
              );
            }}

          </Mutation>
        </div>
      );
    }
}

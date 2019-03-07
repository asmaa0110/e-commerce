/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import { Query } from 'react-apollo';
import React, { Component } from 'react';
import { Input } from 'reactstrap';
import ProductItem from './Product/ProductItem';
import { GET_PRODUCTS } from '../queries';


class Home extends Component {
  // state = {
  //     SearchValue: ""

  //   }
  //   handleChange = (e) =>{
  //     const  SearchValue  = e.target
  //     this.setState( SearchValue )
  // }
  render() {
    return (
      <div>
        <div
                    style={{
            margin: '2% 30%', display: 'flex', alignItems: 'center', border: 'solid rgba(0,0,0,.125) 1px', borderRadius: '5px',
          }}
        >
          <Input style={{ border: 'none' }} placeholder="recherche ..." />
          <i className="fas fa-search" style={{ color: '#6c757d', padding: '0px 10px' }} />
        </div>
        <Query query={GET_PRODUCTS}>
          {({ data, loading, error }) => {
            if (loading) return <p>Chargement</p>;
            if (error) return <p>erreur</p>;
            return (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                  { data.Products.map((product) => <ProductItem key={product._id} {...product} />)}
                </div>
              </div>
            );
          }}

        </Query>
      </div>
    );
  }
}

export default Home;

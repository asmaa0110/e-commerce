/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import { Button } from 'reactstrap';
import { GET_PRODUCT } from '../../queries';
import { ADD_ITEM } from '../Cart/CartQuery';

const ProductPage = ({
  match, ImageUrl, Name, Category, Price, Description,
}) => {
  const { _id } = match.params;
  return (
    <Query
      query={GET_PRODUCT}
      variables={{
        _id,
      }}
    >
      {({ data, loading, error }) => {
        if (loading) return <div>chargement...</div>;
        if (error) return <div>error</div>;
        return (
          <div style={{ display: 'flex', padding: '50px', height: '800px' }}>
            <div>
              <img src={data.getProduct.ImageUrl} alt="" style={{ width: '500px', padding: '20px' }} />
              <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
                <h3>{`Prix:${data.getProduct.Price}dt`}</h3>
                <Mutation mutation={ADD_ITEM}>
                  {
                    (addItem, { loading, error }) => {
                      if (loading) return <div>chargement...</div>;
                      if (error) return <div>error</div>;
                      return (
                        <Button
                          color="warning"
                          onClick={() => addItem({
                            variables: {
                              id: _id, ImageUrl, Name, Category, Price, Description,
                            },

                          })}
                        >Ajouter au panier<i className="fas fa-cart-plus" /></Button>
                      );
                    }
                  }
                </Mutation>
              </div>
            </div>
            <div style={{ padding: '50px' }}>
              <h2 style={{ padding: '0px 20px 20px' }}>{data.getProduct.Name}</h2>
              <p style={{ textAlign: 'justify' }}>{data.getProduct.Description}</p>
            </div>
          </div>
        );
      }}
    </Query>
  );
};
export default withRouter(ProductPage);

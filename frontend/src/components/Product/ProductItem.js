/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Card, CardImg, CardTitle, CardSubtitle, Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { ADD_ITEM } from '../Cart/CartQuery';

export default function ProductItem({
  _id, ImageUrl, Name, Category, Price, Description,
}) {
  return (
    <div>
      <Card
        style={{
          width: '300px', height: '580px', padding: '5px', margin: '10px',
        }}
      >
        <Link to={`/products/${_id}`}><CardImg style={{ height: '450px' }} src={ImageUrl} alt="" /></Link>
        <CardTitle>
          <strong>{Name}</strong>
          {' '}
        </CardTitle>
        <CardSubtitle>{`Catégorie:${Category}`}</CardSubtitle>
        <div
          style={{
            display: 'flex', justifyContent: 'space-around', height: '100px', 'align-items': 'flex-end',
          }}
        >
          <Link to={`/products/${_id}`}><Button outline color="secondary">Voir l'article</Button></Link>
          <div
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '110px',
            }}
          >
            <CardSubtitle>
              <strong>{`${Price}dt`}</strong>
            </CardSubtitle>
            <Mutation mutation={ADD_ITEM}>
              {
                (addItem, { loading, error }) => {
                  if (loading) return <div>chargement...</div>;
                  if (error) return <div>error</div>;
                  return (
                    <Button
                      color="warning"
                      onClick={() => {
                        addItem({
                          variables: {
                            id: _id, ImageUrl, Name, Category, Price, Description,
                          },
                        });
                      }}
                    >
                      <i className="fas fa-cart-plus" />

                    </Button>
                  );
                }
              }
            </Mutation>
          </div>
        </div>
      </Card>
    </div>
  );
}

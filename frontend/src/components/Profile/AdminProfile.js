/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

const AdminProfile = ({ session }) => (
  <div>
    <h3 style={{ padding: '20px' }}>{`Bienvenue ${session.getCurrentUser.Name} ${session.getCurrentUser.FirstName} ! `}</h3>
    <div
      style={{
        backgroundColor: '#17a2b8', color: 'white', display: 'flex', alignItems: 'center',
      }}
    >
      <div style={{ width: '530px', padding: '30px' }}>
        <h4>{`date de naissance: ${session.getCurrentUser.Age}`}</h4>
      </div>
      <img src={session.getCurrentUser.ImageUrl} alt="" style={{ width: '300px', border: 'solid white 3px', borderRadius: '300px' }} />
      <div style={{ width: '530px', padding: '30px' }}>
        <h4>{`Email: ${session.getCurrentUser.Email}`}</h4>
      </div>
    </div>
    <NavLink to="/products/add_product">
      <Button style={{ margin: '10px' }}>Ajouter un produit</Button>
    </NavLink>
  </div>

);
export default AdminProfile;

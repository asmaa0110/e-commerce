/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Button, Alert } from 'reactstrap';

const UserProfile = ({ session }) => {
  console.log(session);
  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <div
        style={{
          display: 'flex', flexWrap: 'wrap', width: '300px', justifyContent: 'center', height: '100%',
        }}
      >
        <img src={session.getCurrentUser.ImageUrl} alt="" style={{ width: '300px', border: 'solid white 3px', borderRadius: '300px' }} />
        <Button outline color="secondary" style={{ margin: '20px' }}>
          <i className="fas fa-cog" />Modifier mon profile</Button>
      </div>
      <div
        style={{
          textAlign: 'start', width: '100%', padding: '50px', height: '100%',
        }}
      >
        <Alert color="dark">
          {`Nom: ${session.getCurrentUser.Name}`}
        </Alert>
        <Alert color="dark">
          {`Prénom : ${session.getCurrentUser.FirstName}`}
        </Alert>
        <Alert color="dark">
          {`date de naissance:  ${session.getCurrentUser.Age}`}
        </Alert>
        <Alert color="dark">
          {`Email: ${session.getCurrentUser.Email}`}
        </Alert>
      </div>
    </div>
  );
};
export default UserProfile;

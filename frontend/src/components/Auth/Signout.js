/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

const handleSignout = (client, history) => {
  localStorage.setItem('token', '');
  client.resetStore();
  history.push('/Home');
};

const Signout = ({ history }) => (
  <div>
    <ApolloConsumer>
      {(client) => (
        <Button outline color="danger" onClick={() => handleSignout(client, history)}>Déconnexion</Button>
      )}

    </ApolloConsumer>
  </div>
);
export default withRouter(Signout);

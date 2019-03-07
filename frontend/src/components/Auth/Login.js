/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import {
  Button, Form, FormGroup, Input,
} from 'reactstrap';
import { LOGIN_USER } from '../../queries';


class Login extends Component {
    state={
      Email: '',
      Password: '',
    }

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

    render() {
      const { Email, Password } = this.state;
      return (
        <div>
          <h2 style={{ padding: '20px' }}> Je me connecte </h2>
          <Mutation mutation={LOGIN_USER} variables={{ Email, Password }}>
            { (loginUser, { data, loading, error }) => {
              if (loading) return <h1>Chargement ...</h1>;
              if (data) {
                console.log(data);
                localStorage.setItem('token', data.loginUser.token);
                this.props.refetch();
                this.props.history.push('/Home');
              }
              return (
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    loginUser();
                  }}
                  style={{ padding: '0% 30%' }}
                >
                  <FormGroup>
                    <Input type="email" name="Email" value={Email} placeholder="Email" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Input type="password" name="Password" value={Password} placeholder="Mot de passe" onChange={this.handleChange} />
                  </FormGroup>
                  <Button type="submit" className="button-primary" onChange={this.handleChange} disabled={loading} color="info">Connexion</Button>
                  {error && <p>{error.message}</p>}
                </Form>
              );
            }}
          </Mutation>
        </div>

      );
    }
}
export default withRouter(Login);

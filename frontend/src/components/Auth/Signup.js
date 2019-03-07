/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import {
  Button, Form, FormGroup, Input,
} from 'reactstrap';
import { SIGNUP_USER } from '../../queries';

class Signup extends Component {
    state={
      FirstName: '',
      Name: '',
      Age: '',
      Email: '',
      Password: '',
      PasswordConfirmation: '',

    }

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

    validateFrom = () => {
      const {
        FirstName, Name, Age, Email, Password, PasswordConfirmation,
      } = this.state;
      const isInvalid = !FirstName || !Name || !Age || !Email || !Password || !PasswordConfirmation || Password !== PasswordConfirmation;
      return isInvalid;
    }

    render() {
      const {
        FirstName, Name, Age, Email, Password, PasswordConfirmation,
      } = this.state;
      return (
        <div>
          <h2 style={{ padding: '20px' }}> S'inscrire </h2>
          <Mutation
            mutation={SIGNUP_USER}
            variables={{
              FirstName, Name, Age, Email, Password,
            }}
          >
            {(signupUser, { data, loading, error }) => {
              if (loading) return <h1>Chargement ...</h1>;
              if (data) {
                console.log(data);
                localStorage.setItem('token', data.signupUser.token);
                this.props.refetch();
                this.props.history.push('/Home');
              }
              return (
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    signupUser();
                  }}
                  style={{ padding: '0% 25%' }}
                >
                  <FormGroup>
                    <Input type="text" name="FirstName" value={FirstName} placeholder="Nom" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" name="Name" value={Name} placeholder="Prénom" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Input type="date" name="Age" value={Age} placeholder="date de naissance" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Input type="email" name="Email" value={Email} placeholder="Email" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Input type="password" name="Password" value={Password} placeholder="Mot de passe" onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Input type="password" name="PasswordConfirmation" value={PasswordConfirmation} placeholder="confirmer mot de passe" onChange={this.handleChange} />
                  </FormGroup>
                  <Button type="submit" className="button-primary" onChange={this.handleChange} disabled={loading || this.validateFrom()}>Confirmer</Button>
                  {error && <p>{error.message}</p>}
                </Form>
              );
            }}
          </Mutation>
        </div>

      );
    }
}
export default withRouter(Signup);

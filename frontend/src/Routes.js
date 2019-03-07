/* eslint-disable react/jsx-filename-extension */
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import withSession from './components/withSession';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import ProductPage from './components/Product/ProductPage';
import AddProduct from './components/Product/AddProduct';

const Routes = ({ refetch, session }) => (
  <BrowserRouter>
    <div>
      <Navbar session={session} />
      <Switch>
        <Route exact path="/Home" component={Home} />
        {session && session.getCurrentUser.Role === 'admin' ? <Route path="/products/add_product" component={AddProduct} /> : <Route path="/Home" />}
        <Route exact path="/signup" render={() => <Signup refetch={refetch} />} />
        <Route axcat path="/login" render={() => <Login refetch={refetch} />} />
        <Route path="/profile" render={() => <Profile session={session} />} />
        <Route path="/products/:_id" component={ProductPage} />
        <Redirect to="/Home" />
      </Switch>
    </div>
  </BrowserRouter>
);
const RootWithSession = withSession(Routes);
export default RootWithSession;
// export default Routes

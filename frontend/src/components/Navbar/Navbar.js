/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
import React from 'react';
import NavbarConnected from './NavbarConnected';
import NavbarDisconnected from './NavbarDisconnected';

const Navbars = ({ session }) => (
  <nav>
    {session && session.getCurrentUser ? <NavbarConnected session={session} /> : <NavbarDisconnected session={session} />}
  </nav>
);
export default Navbars;

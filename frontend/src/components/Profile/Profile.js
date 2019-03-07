/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import AdminProfile from './AdminProfile';
import UserProfile from './UserProfile';

const Profile = ({ session }) => (

  <div>
    {session.getCurrentUser.Role === 'admin' ? <AdminProfile session={session} /> : <UserProfile session={session} />}
  </div>
);
export default Profile;

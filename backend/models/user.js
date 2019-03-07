import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchima = new Schema({
  Name: {
    type: String,

  },
  FirstName: {
    type: String,

  },
  Age: {
    type: String,

  },
  Password: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  ImageUrl: {
    type: String,
    default: 'https://cdn0.iconfinder.com/data/icons/user-collection-4/512/user-512.png',
  },
  Role: {
    type: String,
    default: 'User',
  },
});

module.exports = mongoose.model('User', UserSchima);

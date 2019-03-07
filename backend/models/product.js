import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchima = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  ImageUrl: {
    type: String,

  },

});


module.exports = mongoose.model('Product', ProductSchima);

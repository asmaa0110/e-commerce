/* eslint-disable import/first */
import User from './models/user';
import Product from './models/product';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


exports.resolvers = {
  Query: {
    Users: () => User.find(),
    Products: () => Product.find(),
    getCurrentUser: async (root, args, { currentUser }) => {
      console.log(currentUser);
      return currentUser.user;
    },
    getProduct: async (root, { _id }) => {
      const product = await Product.findOne({ _id });
      return product;
    },

  },
  Mutation: {

    addProduct: async (root, {
      Name, Category, Price, Description, ImageUrl,
    }) => {
      const NewProduct = await new Product({
        Name,
        Category,
        Price,
        Description,
        ImageUrl,
      }).save();
      return NewProduct;
    },

    loginUser: async (root, { Email, Password }) => {
      const user = await User.findOne({ Email });
      console.log(Email, Password);
      if (!user) {
        throw new Error('User not found');
      }
      const isValidPassword = await bcrypt.compare(Password, user.Password);
      if (!isValidPassword) {
        throw new Error('Invalid Password');
      }
      let token;
      try {
        token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '10h' });
      } catch (error) {
        console.log('ERROR');
      }
      return { token };
    },

    signupUser: async (root, {
      Email, Password, Name, FirstName, Age, Role, ImageUrl,
    }) => {
      const user = await User.findOne({ Email });
      const passwordHash = bcrypt.hashSync(Password, 10);
      if (user) {
        throw new Error('User already exists');
      }
      const newUser = await new User({
        Email,
        Password: passwordHash,
        Name,
        FirstName,
        Age,
        Role,
        ImageUrl,

      }).save();

      let token;
      try {
        token = jwt.sign({ user: newUser }, process.env.SECRET, { expiresIn: '10h' });
      } catch (error) {
        console.log('ERROR');
      }
      return { token };
    },
  },


};

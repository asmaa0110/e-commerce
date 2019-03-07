/* eslint-disable import/first */
import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';
import jwt from 'jsonwebtoken';

mongoose
  .connect('mongodb://localhost:27017/e_commerce', { useNewUrlParser: true })
  .then(() => console.log('data base connected'))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 4004;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization;
    try {
      const currentUser = jwt.verify(token, process.env.SECRET);
      return {
        currentUser,
      };
    } catch (error) {
      return null;
    }
  },
});


server.listen(PORT, () => {
  console.log(`🚀  Server ready at ${PORT}`);
});

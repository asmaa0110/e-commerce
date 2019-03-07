import { gql } from 'apollo-server';


exports.typeDefs = gql`
  type User {
      _id: ID
    Name: String
    FirstName: String
    Password:String
    Email:String
    Age: String
    ImageUrl: String
    Role:String
   }

   type Product {
       _id:ID
    Name:String
    Category :String
    Price :Int
    Description :String
    ImageUrl :String
   }

   type Query {
     Users: [User]
     Products: [Product]
     getCurrentUser : User
     getProduct(_id:ID!): Product
   }

   type Token {
     token: String
   }

   type Mutation  {
       addProduct(Name:String,Category :String,Price :Int,Description :String,ImageUrl :String) : Product
       signupUser(Email:String, Password:String, Name:String, FirstName:String, Age:String, Role:String, ImageUrl :String): Token
       loginUser(Email:String, Password:String): Token   
   }
   `;

import { gql } from 'apollo-boost';

export const GET_PRODUCTS = gql`
query {
    Products{
        _id
        Name
        Category
        Price
        Description
        ImageUrl
    }
}
`;

export const SIGNUP_USER = gql`
mutation($Email:String, $Password:String, $Name:String, $FirstName:String, $Age:String, $Role:String, $ImageUrl:String){
  signupUser(Email:$Email, Password:$Password, Name:$Name, FirstName:$FirstName, Age:$Age, Role:$Role, ImageUrl:$ImageUrl ){
    token
  }
}
`;
export const ADD_PRODUCT = gql`
mutation($Name:String, $Description:String, $ImageUrl:String, $Category:String, $Price:Int){
  addProduct(Name:$Name, Description:$Description, ImageUrl:$ImageUrl, Category:$Category, Price:$Price){
    _id,Name,Description,ImageUrl,Category,Price}
}
`;

export const LOGIN_USER = gql`
mutation($Email: String, $Password: String, ) {
    loginUser(Email: $Email, Password: $Password) {
      token
    }
  }
  `;
export const GET_CURRENT_USER = gql`
query {
  getCurrentUser{
      Name,
      FirstName,
      Age,
      Email,
      Password,
      Role,
      ImageUrl
  }
}
`;
export const GET_PRODUCT = gql`
query($_id: ID!) {
  getProduct(_id: $_id) {
    _id
    Name
    Description
    Category
    Price
    ImageUrl
  }
}
`;

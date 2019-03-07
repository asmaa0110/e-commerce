import { gql } from 'apollo-boost';

export const GET_CART = gql`
query {
    cart @client{
        items{
           Product{
                id
                Name
                Category
                Price
                Description
                ImageUrl
           }
        quantity
        
        }
        totalQuantity
        totalPrice
    }
}
`;
export const ADD_ITEM = gql`
mutation AddItem($id:ID, $Name:String,$Category :String,$Price :Int,$Description :String,$ImageUrl :String){
    addItem (id:$id, Name:$Name, Description:$Description, ImageUrl:$ImageUrl, Category:$Category, Price:$Price)@client
}
`;

export const SUB_ITEM = gql`
mutation SubItem($id:ID, $Name:String,$Category :String,$Price :Int,$Description :String,$ImageUrl :String){
    subItem (id:$id, Name:$Name, Description:$Description, ImageUrl:$ImageUrl, Category:$Category, Price:$Price)@client
}`;

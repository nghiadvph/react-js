export interface Products{
    _id:string|number,
    name:string,
    description:string,
    price:number,
    image:string
  }
  export interface User{
    username:string,
    email:string,
    userpass:string
  }
  export interface LoginUser{
    email:string,
    userpass:string
  }
  export type CartItem = {
    product: Products;
    quantity: number;
  };
  export type Cart = {
    _id: string;
    user: string;
    products: CartItem[];
  };
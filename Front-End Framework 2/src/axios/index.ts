import axios from "axios"
import { CartItem, Products, User } from "../types/Product";
const token  = localStorage.getItem("token");
export const intainer = axios.create({
    baseURL : 'http://localhost:8080/api',
    headers:{
        Authorization: token ? `Bearer ${token}` : null,
        'Content-Type':'application/json'   
    }
})
export const http = axios.create({
    baseURL : 'http://localhost:8080/api',
    headers:{
        Authorization: token ? `Bearer ${token}` : null,
        'Content-Type':'application/json'
    }
})
// export interface Acc{
//     accessToken :string
// }
export interface Access{
    token:string,
    data:string
}
export type Cart = {
    users:User[]
    products: CartItem[];
  };
export const addToCart = (data: Cart) => {
  return http.post("/cart", data);
};
// export const updateCart = (product: Products) => {
//     return http.post(`/card/${product._id}`);
//   };
export const getAllCart = (_id:string) => {
    return http.get(`/user/${_id}`);
  };
export const getAllProduct = () =>{
     return http.get('/products');
}
export const craeteProduct = (data:Products) =>{
    return http.post('/products',data);
}
export const updateProduct = (id:string,data:Products) =>{
    return http.put(`/products/`+id, data);
}
export const getById = (id:string) =>{
    return http.get(`/products/${id}`);
}
export const deleteProduct = (id:string|number) =>{
    return http.delete(`products/${id}`);
}
export const registerForm = (data:User) =>{
    return http.post('/signup',data);
}
export const loginForm = (data:User) =>{
    return http.post<Access>('/signin',data);
}
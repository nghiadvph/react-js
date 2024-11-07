import { useEffect, useState } from "react";
import { Cart } from "../types/Product";
import { getAllCart } from "../axios";


const ShopCard = () => {
  const [product,setProduct] = useState<Cart[]>([]);

  useEffect(()=>{
    const userStorage = localStorage.getItem("user") || "{}";
    const user = JSON.parse(userStorage);
    if(!user._id)return;
      getAllCart(user._id).then((data)=>{
          // setProduct(data);   
          console.log(data);
          
        })
  },[]);
  return (
    <>
    <div className="container">
      <h2>ShopCard</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Id user</th>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product)=>(
            <tr>
              <td>{product._id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default ShopCard

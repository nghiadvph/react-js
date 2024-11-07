import axios from "axios";
import { Products } from "../types/Product";
import { useUser } from "../contexts/user";
import { useCart } from "../contexts/card";
import { intainer } from "../axios";
type AddToCart = {
  product: Products;
  quantity: number;
};

export const useProductCart = () => {
  // const { user, setUser } = useUser();
  const { cart, setCart } = useCart();

  // const getCartUser = async () => {
  //   const userStorage = localStorage.getItem("user") || "{}";
  //   const user = JSON.parse(userStorage);
  //   setUser(user);
  //   if (!user._id) return;
  //   const { data } = await intainer.get(`/card/user/${user._id}`);
  //   setCart(data);
  // };

  const addToCart = async ({ product, quantity }: AddToCart) => {
    const user  = JSON.parse(localStorage.getItem('user')|| '{}');
    if (quantity <= 0 || !user) return;
    try {
      if (cart) {
        await intainer.put(`/card/${cart._id}`, {
          product,
          quantity,
          user: user._id,
        });
      } else {
        await intainer.post("/card", {
          product,
          quantity,
          user: user._id,
        });
      }
      const { data } = await axios.get(`/card/user/${user._id}`);
      setCart(data);
    } catch (error) {
      console.log(error);
    }
  };
  // const removeToCart = async (productId: string) => {
  //   if (!user) return;
  //   if (window.confirm("Remove Item Cart")) {
  //     try {
  //       await axios.delete(`/carts/user/${user._id}/product/${productId}`);
  //       getCartUser();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };
  return { addToCart };
};
// import { Products } from "../types/Product"

// type AddToCard = {
//     product: Products;
//     quantity: number
// }

// const addToCard = async({product, quantity}:AddToCard)=>{
//     if (quantity <= 0 || !user) return;
//     try {
//       if (cart) {
//         await axios.put(`/carts/${cart._id}`, {
//           product,
//           quantity,
//           user: user._id,
//         });
//       } else {
//         await axios.post("/carts", {
//           product,
//           quantity,
//           user: user._id,
//         });
//       }
//       const { data } = await axios.get(`/carts/user/${user._id}`);
//       setCart(data);
//     } catch (error) {
//       console.log(error);
//     }
// }
import Cart from "../model/card";
import Product from "../model/products";
import ApiError from "../utils/ApiError";


class CartsController {
  async createCart(req, res, next) {
    try {
      const { quantity, user, product } = req.body;
      const cart = await Cart.findOne({ user });
      if (cart)
        throw new ApiError(404, "Cart Existed, You can only Update Cart");
      const newCart = await Cart.create({
        user,
        products: [
          {
            product,
            quantity,
          },
        ],
      });
      res.status(201).json({
        message: "Add Cart Successfull",
        data: newCart,
      });
    } catch (error) {
      next(error);
    }
  }
  async getCartUser(req, res, next) {
   try {
     const cart = await Cart.findOne({ user: req.params.id }).populate({
       path: "products",
       populate: {
         path: "product",
         model: Product,
       },
     });
     // if (!cart) throw new ApiError(404, "Cart Not Found");
     res.status(400).json(cart);
   } catch (error) {
     next(error);
   }
 }
}
export default CartsController;
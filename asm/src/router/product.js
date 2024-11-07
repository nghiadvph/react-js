import express from "express"
const router = express.Router();
import {
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controller/product";
import { checkauth } from "../midlewares/checkauth";
router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id",checkauth, deleteProduct);
export default router;

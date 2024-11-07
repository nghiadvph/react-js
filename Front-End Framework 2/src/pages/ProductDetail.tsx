import { useEffect, useState } from "react";
import { Products } from "../types/Product";
import { addToCart, getById } from "../axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const [product, setProoduct] = useState<Products>();
  const [quantity, setQuantity] = useState<number>(1)
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    getById(id)
      .then(({ data }) => {
        setProoduct(data);
      })
      .catch((e) => {
        toast.error("Error" + e.message);
      });
  }, []);
  const handleAddToCart = (product: Products) => {
    const user = localStorage.getItem("user");
    if (!product || !user) return;
    const checkCart = true; // check product co trong carts. find()
    if (checkCart) {
      // khi add
      addToCart({
        product,
        quantity: 1,
        user: JSON.parse(user),
      }).then((data) => {
        toast.success("Add Cart Ok");
        console.log(data);
      });
    } else {
      // khi update
    }
  };
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          {product && (
            <div className="box mt-4">
              <div className="box1">
                <img src={product.image} width={300} height={300} />
              </div>
              <div className="box2">
                <h2>{product.name}</h2>
                Mô tả:<p>{product.description}</p>
                  <div className="soluong">
                      <button onClick={()=> setQuantity(quantity === 1 ? 1 :  quantity -1)} className="button-chu">-</button>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      className="form-control input-number"
                      value={quantity}
                    />
                    <span className="input-group-btn">
                    <button onClick={()=> setQuantity(quantity + 1)} className="button-cong">+</button>
                    </span>
                  </div>
               
                <p>
                  Giá: <span className="text-danger">{product.price}$</span>
                </p>
                <button onClick={()=> handleAddToCart(product)} className="btn btn-primary">Add To Card</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

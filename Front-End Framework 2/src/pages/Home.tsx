
import { Link } from "react-router-dom";
import { useProduct } from "../hook/useProduct";

const Home = () => {
   const {loading,product} = useProduct();
  return (
        <>
        <div className="container">
            <div className="row">
              <div className="banner">
                <div className="left">
                <img src="https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-dang-cap-hien-dai_113856116.png"/>
                </div>
              </div>
                {loading && <p>Loading...</p>}
                {product.map((product)=>(
                      <div className="col mt-4" key={product._id}> 
                        <div className="card" style={{width: "18rem"}}>
                        <Link to={`/product/${product._id}`}><img className="card-img-top" style={{height : "18rem"}} src={product.image} alt="Card image cap"/></Link>
                       <div className="card-body">
                         <h5 className="card-title text-truncate">{product.name}</h5>
                         <p className="card-text text-truncate">{product.description}</p>
                         <p>Giá: <span className="text-danger">{product.price}</span></p>
                         <Link to={`/product/${product._id}`}><a href="#" className="btn btn-primary">Mua</a></Link>
                         <button className="btn btn-danger add">Add To Card</button>
                         </div>
                        </div>
                      </div>
                ))}
            </div>
        </div>
        </>
  )
}

export default Home
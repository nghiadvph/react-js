
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
        <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse add" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="">Home</Link>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0 form">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0 tim" type="submit">Search</button>
      </form>
      <div className="dangnhap">
        <Link to={'/login'}><button className="btn btn-info login">Login</button></Link>
        <Link to={'/register'}><button className="btn btn-success register">Register</button></Link>
      </div>
      <Link to={"/cart"}>Shopcard</Link>
    </div>
    </div>
  </nav>
    </>
  )
}

export default Header
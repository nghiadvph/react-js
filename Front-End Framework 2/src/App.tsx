
import { useRoutes } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast';
import LayoutLig from './layout/LayoutLig';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import PrivateRouter from './pages/PrivateRouter';
import Product_add from './pages/Product_add';
import Product_edit from './pages/Product_edit';
import ShopCard from './pages/ShopCard';

function App() {
  const router = [
      {path:"/", element:<LayoutLig/>,children:[
        {path:"/", element:<Home/>},
        {path:"/login", element:<Login/>},
        {path:"/register", element:<Register/>},
        {path:"/product/:id", element:<ProductDetail/>},
        {path:"/cart", element:<ShopCard/>}
      ]},
      {path:'/admin', element:<PrivateRouter/> ,children:[
        {path:'/admin', element:<About/>},
        {path:'/admin/product-add',element:<Product_add/>},
        {path:'/admin/product-list/:id',element:<Product_edit/>}

      ]}
  ]
  const routerLig = useRoutes(router);
  return (
    <>
    <div>{routerLig}</div>
    <Toaster/>
    </>
  )
}

export default App

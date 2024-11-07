import { Outlet, useNavigate } from "react-router-dom";

const PrivateRouter = () => {
   const user =  JSON.parse(localStorage.getItem("user")|| "{}");
  const nav = useNavigate();
   console.log(user);
   
    if(user && user.role==="admin"){
      return <Outlet/>
    }else{
      nav("/")
    }
  return (
   <></>
  )
}

export default PrivateRouter
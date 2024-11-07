import { useNavigate } from "react-router-dom";
import {  User } from "../types/Product";
import {  loginForm, registerForm } from "../axios";
import toast from "react-hot-toast";

export const useAuth = () =>{
    const nav = useNavigate();
    const onSubmit = (data:User) =>{
        registerForm(data).then(()=>{
            toast.success("Đã đăng kí thành công")
            nav("/login")
        })
        .catch((e)=>{
            toast.error("Error"+e.message)
        })
    }
    const onLogin = (data:User) =>{
        loginForm(data).then(({data})=>{
         toast.success("Đã đăng nhập thành công")
        //  console.log(localStorage.setItem("user", JSON.stringify(data.token)));
         localStorage.setItem("user", JSON.stringify(data.data))
         localStorage.setItem("token",data.token)
         nav("/admin")
        })
        .catch((e)=>{toast.error("Error:"+e.message)})
      }

      
 return {onSubmit,onLogin}
}
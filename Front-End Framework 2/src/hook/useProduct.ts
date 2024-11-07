import toast from "react-hot-toast"
import { craeteProduct, getAllProduct } from "../axios"
import { Products } from "../types/Product"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const useProduct = () =>{
    const nav = useNavigate();

    const onSubmitProduct = (data:Products)=>{
        craeteProduct(data).then(()=>{ 
            toast.success("Đã thêm thành công")
            nav('/admin')
        })
        .catch((e)=>{toast.error("Error"+e.message)})
      }
      const [product,setProduct] = useState<Products[]>([]);
      const [loading,setLoading] = useState<boolean>(true);
      useEffect(()=>{
          getAllProduct().then(({data})=>{
              toast.success("Wecome To Back ❤️❤️❤️");
              setProduct(data);
          })
          .catch((e)=> {toast.error("Error:"+e.message)})
          .finally(()=> setLoading(false))
      },[]);
      return {onSubmitProduct,loading,product}
}
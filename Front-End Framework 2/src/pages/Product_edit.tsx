import { SubmitHandler, useForm } from "react-hook-form"
import { Products } from "../types/Product";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from 'zod';
// import { useState } from "react";
import { getById, updateProduct } from "../axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
const validateProduct = z.object({
  name: z.string().min(3).trim(),
  price: z.number().min(0,{message:"Price phải lớn hơn 0"}),
  image:z.string().trim().min(1,{message:"Mời nhập image"}),
  description:z.string().trim().min(1,{message:"Mời nhập description"})
})
const Product_edit = () => {
  const nav = useNavigate();
  const {id} = useParams();
  const {register,handleSubmit,reset,formState:{errors}} = useForm<Products>({resolver:zodResolver(validateProduct)});
  const onSubmit :SubmitHandler<Products> = (data)=>{
    if(!id) return
      updateProduct(id,data).then(()=>{ 
        toast.success("Đã update thành công")
        nav('/admin')
    })    
    .catch((e)=>{toast.error("Error"+e.message)})
    }
  useEffect(()=>{
    if(!id) return
    getById(id).then(({data})=>{
   console.log(data)
   reset(data)
    })
    .catch((e)=>{toast.error("Error"+e.message)})
},[]);
  return (
   <>
   <div className="container form-add">
    <h2 className="text-center mt-5">Product-Edit</h2>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Name product</label>
          <input id="name" {...register('name')} className="form-control" type="text" />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Price product</label>
          <input id="price" {...register('price',{valueAsNumber:true})} className="form-control" type="number" />
          {errors.price && <p className="text-danger">{errors.price.message}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Image product</label>
          <input id="image" {...register('image')} className="form-control" type="text" />
          {errors.image && <p className="text-danger">{errors.image.message}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Description product</label>
          <input id="description" {...register('description')} className="form-control" type="text" />
          {errors.description && <p className="text-danger">{errors.description.message}</p>}
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
   </div>
   </>
  )
}

export default Product_edit
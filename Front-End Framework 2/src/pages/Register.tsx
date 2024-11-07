import { useForm } from "react-hook-form"
import { User } from "../types/Product";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../validate/validates";
import { useAuth } from "../hook/useAuth";
const Register = () => {
    const {register,handleSubmit,formState:{errors}} = useForm<User>({resolver: zodResolver(signUpSchema)});
    const {onSubmit} = useAuth()
  return (
   <>
   <div className="container form-register">
    <div className="text">
    <form action="" onSubmit={handleSubmit(onSubmit)}>
    <h2 className="text-center text">Register</h2>
    <div className="mb-3">
    <label className="form-label">User name</label>
    <input type="text" className="form-control" {...register("username")} id="username" aria-describedby="emailHelp" placeholder="Enter email"/>
    {errors.username && <p className="text-danger">{errors.username.message}</p>}
  </div>
     <div className="mb-3">
    <label className="form-label">User email</label>
    <input type="email" className="form-control" {...register("email")} id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    {errors.email && <p className="text-danger">{errors.email.message}</p>}
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" {...register("userpass")} className="form-control" id="userpass" placeholder="Password"/>
    {errors.userpass && <p className="text-danger">{errors.userpass.message}</p>}
  </div>
  <button type="submit" className="btn btn-primary submit">Submit</button>
</form>
    </div>
   </div>
   </>
  )
}

export default Register
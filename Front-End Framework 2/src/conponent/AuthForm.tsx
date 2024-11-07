
import { useForm } from "react-hook-form";
import { User } from "../types/Product";

interface authform{
    onSubmit: (values:User) => void
}

export function AuthForm({onSubmit}:authform) {
    const {register, handleSubmit, formState:{errors}} = useForm<User>();
    return (
      <>
      <div className="container col-5 mt-4">
        <h2>Rgister</h2>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" id="email" {...register("email" ,{
              required:"Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            })} type="text"/>
            {errors?.email && <p className="text-danger">{errors.email.message}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input className="form-control" id="password" {...register("password",{
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Password must have at least 4 characters"
              }})} type="password"/>
              {errors?.password && <p className="text-danger">{errors.password.message}</p>}
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Submid</button>
          </div>
        </div>
        </form>
      </div>
      </>
    )
  }

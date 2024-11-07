import { z } from "zod";

export const signUpSchema = z.object({
    username: z.string().min(3).trim(),
    email: z.string().email(),
    userpass: z.string().min(6),
  })

export const signInSchema = z.object({
    email: z.string().email(),
    userpass: z.string().min(6),
});
export const validateProduct = z.object({
  name: z.string().min(3).trim(),
  price: z.number().min(0,{message:"Price phải lớn hơn 0"}),
  image:z.string().trim(),
  description:z.string().trim()
})
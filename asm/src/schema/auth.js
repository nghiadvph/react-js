import Joi from "joi";
export const registerSchema = Joi.object({
    username: Joi.string().min(3).required().trim().messages({
        "any.required":"Username bắt buộc",
        "string.empty":"Username ko đc để trống",
        "string.min":"Username phải hơn 3 kí tự",
    }),
    email : Joi.string().required().email().trim().messages({
        "any.required":"Email bắt buộc",
        "string.empty":"Email ko đc để trống",
        "string.email":"Email phải đúng định dạng",
        "string.trim":"Email ko đc để khoảng trắng",
    }),
    userpass : Joi.string().required().min(6).trim().messages({
        "any.required":"Password bắt buộc",
        "string.empty":"Password ko đc để trống",
        "string.min":"Password phải hơn 6 kí tự",
        "string.trim":"Password ko đc để khoảng trắng",
    })
})
export const signinSchema = Joi.object({
    email: Joi.string().required().email().trim().messages({
        "any.required":"Email bắt buộc",
        "string.empty":"Email ko đc để trống",
        "string.email":"Email ko đúng định dạng",
        "string.trim":"Email ko được để khoảng trắng"
    }),
    userpass: Joi.string().required().min(6).trim().messages({
        "any.required":"Password bắt buộc",
        "string.empty":"Password ko đc để trống",
        "string.min":"Password phải hơn 6 kí tự",
        "string.trim":"Password ko đc để khoảng trắng"
    })
})
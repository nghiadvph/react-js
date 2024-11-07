
import User from "../model/auth"
import { registerSchema, signinSchema } from "../schema/auth";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
export const signup = async (request,response)=>{
    const {username, email, userpass} = request.body;
    console.log(registerSchema.validate(request.body,{abortEarly:false}));
    // lấy dữ liệu user gửi lên  
    const {error} = registerSchema.validate(request.body,{abortEarly:false});
    // console.log("Error details",error.details);
    if(error){
    const message= error.details.map((p)=> p.message);
       return response.status(400).json({Message: message});
    }
  //kiểm tra user đã tồn tại hay chưa
   const exitsUser = await User.findOne({email : email});
   if(exitsUser){
    return response.status(400).json({errorMessage: "Email đã tồn tại"});
   }
  //mã hóa mật khẩu
    const pass = await bcryptjs.hash(userpass,10);
    // console.log(pass);
  //thêm mới user vào db
  const user= await User({
    username,
    email,
    userpass: pass
   }).save()
   //trả về thông tin user vừa đăng kí và không trả về password
   user.userpass = undefined;
   response.status(201).json({message: "đã đk thành công", user});
};
export const signin = async(request,response)=>{
  //nhận dữ liệu client gửi lên
  const {email, userpass} = request.body;
  //kiểm tra tính hợp lệ của dũ liệu
  const {error}=signinSchema.validate(request.body,{abortEarly:false});
  //nếu dữ liệu ko hợp lệ thì trả về thông báo lỗi
  if(error){
      const errorMessage = error.details.map((message) => message.message);
      return response.status(400).json(errorMessage);
  }
  //kiển tra xem user có tồn tại hay ko
  const errorUser = await User.findOne({email:email});
  //nếu user ko tồn tại thì trả về thông báo lỗi
  if(!errorUser){
  return response.status(400).json({message:"Email ko tồn tại"});
  }
  //kiểm tra mật khẩu có đúng hay ko
  const errorPass = await bcryptjs.compare(userpass, errorUser.userpass);
  //nếu mật khẩu ko đúng thì thông báo lỗi
  if(!errorPass){
  return response.status(400).json({message:"Password ko đúng"});
  }
  // tạo token
  const token = jwt.sign({id: errorUser._id}, "123456",{expiresIn:"1h"});
  response.cookie("token", token, {httpOnly: true});
  //nếu đúng thì trả về thông tin đăng nhập thành công và thông tin đăng nhập  
   errorUser.userpass = undefined;
  response.status(201).json({message:"Đã đăng nhập thành công", data:errorUser,token});
};
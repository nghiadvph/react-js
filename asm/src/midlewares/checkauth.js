import jwt, { TokenExpiredError } from "jsonwebtoken";

export const checkauth = (request,response,next) =>{
    if(request.headers.authorization){
        const token = request.headers.authorization.split(" ")[1];
        jwt.verify(token, "123456", (error, data)=>{
    // console.log(request.headers.);
            if(error){
                if(error.name == "TokenExpiredError"){
                   return response.status(400).json({message:"Token đã hết hạn"})
                } else if(error.name == "JsonWebTokenError"){
                    return response.status(400).json({message:"Token không đúng"})
                }
            }
            next();
        })
    }
}

// if (request.headers.authorization) {
//     const token = request.headers.authorization.split(" ")[1];

//     jwt.verify(token, "123456", (error, data) => {
//       console.log(error);
//       if (error) {
//         if (error.name == "TokenExpiredError") {
//           return response.status(400).json({ message: "Token het han" });
//         } else if(error.name == "JsonWebTokenError"){
//           return response.status(400).json({message:"Token ko đúng"});
//         }
//       }
//     });
//   }
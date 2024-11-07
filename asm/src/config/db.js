import mongoose from "mongoose"
export const connectDb = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/asm");
        console.log("Db connect");
    } catch (error) {
        console.log(error);
    }
}
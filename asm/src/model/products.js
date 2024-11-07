import mongoose, { versionKey } from "mongoose";
// const {schema} = mongoose;
const NewSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    price:{
        type: Number,
        required:true,  
    },
    image:{ 
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
}, {versionKey : false});
// export const Product = mongoose.model("Product", NewSchema);
export default mongoose.model("Product", NewSchema);
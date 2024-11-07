import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userpass: {
    type: String,
    required: true,
    minlength: 6,
  },
},{versionKey:false, timestamps:true});
export default mongoose.model("User", userSchema);

import Product from "../model/products"
export const getProducts = async(request,response)=>{
     try {
        const data =await Product.find({});
        response.status(201).json(data);
     } catch (error) {
        console.log(error);
     }
};
export const getProductById = async(request,response)=>{
    try {
        const data = await Product.findById(request.params.id);
        response.status(201).json(data);
     } catch (error) {
        console.log(error);
     }
}
export const createProduct = async(request,response)=>{
    try {
        const data = await Product(request.body).save();
        response.status(201).json(data);
     } catch (error) {
        console.log(error);
     }
}
export const updateProduct = async(request,response)=>{
    try {
        const data = await Product.findByIdAndUpdate(request.params.id,request.body,{new: true});
        response.status(200).json({data,message:"Đã update"});
     } catch (error) {
        console.log(error);
     }
}
export const deleteProduct = async(request,response)=>{
    try {
        const data = await Product.findByIdAndDelete(request.params.id);
        response.status(200).json({data, message:"Đã xóa"});
     } catch (error) {
        console.log(error);
     }
}
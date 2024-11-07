import { useEffect, useState } from "react"
import { Products } from "../types/Product";
import { deleteProduct, getAllProduct } from "../axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Button, Popconfirm, Space, Table } from "antd";

const About = () => {
  const nav = useNavigate();
  const [products,setProducts] = useState<Products[]>([]);
  useEffect(()=>{
     getAllProduct().then(({data})=> setProducts(data))
  },[]);
  const handleDelete  =(id:number|string)=> {
      deleteProduct(id).then(() => {
        toast.success("Đã xóa thành công")
        // alert("đã xóa")
        nav(0); 
      })
      .catch((error)=> console.log(error.message))

    }
  const columns = [
    { title: 'Id', dataIndex: '_id' ,key:'_id'},
    { title: 'Name', dataIndex: 'name' ,key:'name'},
    { title: 'Image', dataIndex: 'image' ,key:'image',
       render:(text:string)=>{
      return <img width={200} src={text}/>
    }},
    { title: 'Price', dataIndex: 'price' ,key:'price',
      render:(text:string)=>{
        return <p>{text} VND</p>
      }
    },
    { title: 'Description', dataIndex: 'description' ,key:'description'},
    { title: 'Action',key:'action', render:(product:Products)=>{
        return (
          <Space>
            <Link to={`/admin/product-list/${product._id}`}><Button >Update</Button></Link>
           <Popconfirm
        title="Delete the product"
        description="bạn có muốn xóa ko?"
        onConfirm={()=> handleDelete(product._id)}
        okText="Yes"
        cancelText="No"
      >
        
        <Button danger>Delete</Button>
      </Popconfirm>
          </Space>
      
        )
    }},
  ];  
  return (
    <>
      <table className="container">
        <div className="admin">
        <h2 className="">Admin</h2>
        <Link to={'/'}><button className="btn btn-primary">Về trang chủ</button></Link>
        </div>
        <Link to={'/admin/product-add'}><button className="btn btn-primary">Add New Product</button></Link>
      <Table className="mt-4"  columns={columns} dataSource={products}/>
      </table>
    </>
  )
}

export default About
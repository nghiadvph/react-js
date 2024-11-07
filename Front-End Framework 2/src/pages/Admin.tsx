// import React, {  useEffect, useState } from 'react';
// import { Button, Flex, Popconfirm, Table } from 'antd';
// import type { TableColumnsType } from 'antd';
// import { getAllProduct } from '../axios';
// import { Products } from '../types/Product';

// // import { getAllProduct } from '../axios';


// interface DataType {
//   id: string|number;
//   title: string;
//   price: number;
//   description: string;
//   image:string
// }

// const columns: TableColumnsType<DataType> = [
//   { title: 'Id', dataIndex: 'id' ,key:'id'},
//   { title: 'Title', dataIndex: 'title' ,key:'title'},
//   { title: 'Image', dataIndex: 'image' ,key:'image',
//      render:(text:string)=>{
//     return <img src={text}/>
//   }},
//   { title: 'Price', dataIndex: 'price' ,key:'price',
//     render:(text:string)=>{
//       return <p>{text} VND</p>
//     }
//   },
//   { title: 'Description', dataIndex: 'description' ,key:'description'},
//   { title: 'Action',key:'action', render:(text)=>{
//     return <button></button>
//   }},
// ];

// const Admin: React.FC = () => {
//   const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [product,setProduct] = useState([]);
//   // const id= useParams();
//   useEffect(()=>{
//      getAllProduct().then(({data})=> setProduct(data));
//   },[]);
//   const start = () => {
//     setLoading(true);
//     // ajax request after empty completing
//     setTimeout(() => {
//       setSelectedRowKeys([]);
//       setLoading(false);
//     }, 1000);
//   };
   
//   // const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
//   //   console.log('selectedRowKeys changed: ', newSelectedRowKeys);
//   //   setSelectedRowKeys(newSelectedRowKeys);
//   // };

//   // const rowSelection: TableRowSelection<DataType> = {
//   //   selectedRowKeys,
//   //   onChange: onSelectChange,
//   // };

//   const hasSelected = selectedRowKeys.length > 0;

//   return (
//      <div className="container mt-4">
//        <Flex gap="middle" vertical>
//       <Flex align="center" gap="middle">
//         <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
//           Reload
//         </Button>
//         {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
//       </Flex>
//       <Table  columns={columns} dataSource={product}/>
//     </Flex>
//      </div>
//   );
// };

// export default Admin;
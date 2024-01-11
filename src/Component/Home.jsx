import React from 'react'
// import ViewChild from './ViewChild'

// const mockdata = [
//   {
//     "prod_name": "Laptop",
//     "company": "HP",
//     "price": "50,000",
//     "color": "Grey",
//     "description": " Personal Computer",
//     "id": 1
//   },
//   {
//     "prod_name": "mobile",
//     "company": "asus",
//     "price": "25,000",
//     "color": "black",
//     "description": "smart phone",
//     "id": 2
//   },
//   {
//     "prod_name": "Camera",
//     "company": "Sony",
//     "price": "25,0000",
//     "color": "red",
//     "description": "Optical instrument",
//     "id": 3
//   },
//   {
//     "prod_name": "TV",
//     "company": "LG",
//     "price": "21000",
//     "color": "pink",
//     "description": "Smart Television",
//     "id": 4
//   },
//   {
//     "prod_name": "Headphone",
//     "company": "JBL",
//     "price": "1000",
//     "color": "blue",
//     "description": "Hearing gadget",
//     "id": 5
//   }
// ]
// const PRODUCT_END_POINT="http://localhost:5000/product"
const Home = () => {
  // const [data, setdata] = useState([])
  // const fetchData=()=>{
  //   fetch(PRODUCT_END_POINT)
  //   .then((response)=>{
  //     return response.json();
  //   }).then((response)=>{
  //     // console.log("response",response);
  //     setdata(response);
  //   })
  // }
  // useEffect(()=>{
  //   fetchData();
  // },[])
  return (
    <div>
      <h1>Home</h1>
      {/* {
        data.map((item, index) => 
        
        <ViewChild {...item} key={index} />)
      } */}
      {/* <Product/> */}
    </div>
  )
}

export default Home








import React, { useState } from 'react'
import './AddData.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AddData = () => {

  let post_api = "http://localhost:5000/product"

  let [state, setState] = useState({
    pname: "", cname: "", price: "", color: "", desc: ""
  })

  const navigate=useNavigate()
  
  let changeHandeler = (e) => {
    e.persist();
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  
  }
  let submitHandler = (e) => {
    e.preventDefault();
    console.log("collect data from my product", state);


    let prod = {
      prod_name: state.pname,
      company: state.cname,
      price: state.price,
      color: state.color,
      description: state.desc
    }

    axios.post(post_api,prod).then(res=>{
      alert("Data submitted");
      console.log("add res",res)
    })
    .catch(err=>{
      alert("Error in add product")
      console.log("add err",err);

    }).finally(()=>{
      navigate("/product")
    })
  }; 
  return (



    <div className='add_data'>
      <h1>MY PRODUCT</h1>
      <form onSubmit={submitHandler} >
        <label htmlFor="pname"> Enter Product Name:</label>
        <input type="text" name="pname" id="" onChange={changeHandeler} /><br /><br></br>
        <label htmlFor="cname"> Enter Company:</label>
        <input type="text" name="cname" id="" onChange={changeHandeler} /><br /><br></br>
        <label htmlFor="price"> Enter Price:</label>
        <input type="text" name="price" id="" onChange={changeHandeler} /><br /><br></br>
        <label htmlFor="color"> Choose color:</label>
        <select name="color" id="" onChange={changeHandeler}>
          <option>---Choose colour--- </option>
          <option value="red">RED</option>
          <option value="blue">BLUE</option>
          <option value="black">Black</option>
          <option value="grey">GREY</option>
          <option value="pink">PINK</option>
          <option value="others">OTHERS</option>

        </select><br></br><br></br>
        <label htmlFor="desc">Product Description:</label>
        <input type="text" name="desc" id="" onChange={changeHandeler} /><br /><br></br>
        <input type="submit" value="Add Product" />
      </form>
    </div>
  )
}

export default AddData
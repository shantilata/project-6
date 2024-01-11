import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
// import  './AddData.css';
const EditPage = () => {
  let { pid } = useParams();
  const navigate = useNavigate()
  let get_api = "http://localhost:5000/product"
  let [state, setState] = useState({
    pname: "",
    comp: "",
    price: "",
    color: "",
    desc: "",
    id: "",
    value: ""
  })
  useEffect(() => {
    axios.get(`${get_api}/${pid}`)


      .then(res => {
        console.log("fetch single product:", res.data);
        setState(res.data)
        // alert("set single", res.data)
      })
      .catch(err => {
        console.log("err to fetch singke product", err);
        alert("Unable to find product")

      })
  }, []);



  let submitHandler = (event) => {
    event.preventDefault();
    console.log("receive after edit", state);
    axios.put(`${get_api}/${pid}`,state)
      .then(res => {
        console.log("data edited",res);
        navigate('/product')
      })
      .catch(err => {
        console.log("error to", err);
      })
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        {/* <label htmlFor="pname"> Enter Product Name:</label> */}
        <input type="text" name="pname" id="" value={state.prod_name} onChange={(event) =>
          setState((prev) => ({ ...prev, prod_name: event.target.value }))
        } /><br /><br></br>
        {/* <label htmlFor="cname"> Enter Company:</label> */}
        <input type="text" name="cname" id="" value={state.company} onChange={(event) =>
          setState((prev) => ({ ...prev, company: event.target.value }))
        } /><br /><br></br>
        {/* <label htmlFor="price"> Enter Price:</label> */}
        <input type="text" name="price" id="" value={state.price} onChange={(event) =>
          setState((prev) => ({ ...prev, price: event.target.value }))
        } /><br /><br></br>
        {/* <label htmlFor="color"> Choose color:</label> */}
        <select name="color" id="" value="state.color" readOnly>
          <option>---Choose colour--- </option>
          

        </select><br></br><br></br>
        {/* <label htmlFor="desc">Product Description:</label> */}
        <input type="text" name="desc" id="" value={state.description} onChange={(event) =>
          setState((prev) => ({ ...prev, description: event.target.value }))
        } /><br /><br></br>
        <input type="submit" value="Add Product" />
      </form>

    </div>
  )
}

export default EditPage
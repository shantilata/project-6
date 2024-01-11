import React, { useEffect, useState } from "react";
// import './View.css';
import { Container, Table } from 'react-bootstrap';
import axios from "axios";
import { Link } from 'react-router-dom'

const Product = () => {
    let post_api = "http://localhost:5000/product";

    let [products, setProducts] = useState([]);
  
   
        
  
  useEffect(() => {
      axios.get(post_api)
        .then((res) => {
          // alert("Product View Done :", res.data);
          console.log("Add res :", res.data);
          setProducts(res.data);
        })
        .catch((err) => {
          alert("Error to View Product :", err.data);
          console.log("Add err :", err.data);
        });
    }, [setProducts, post_api]);
  
  return (
    <div className="table-container">
        <Container>
        <h4 className="mt-3">Products</h4>

        {products.length > 0 ? (

            <Table className="table" striped bordered hover>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Company</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Description</th>
                        <th>View details</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.prod_name}</td>
                        <td>{product.company}</td>
                        <td>{product.price}</td>
                        <td>{product.color}</td>
                        <td>{product.description}</td>
                        <td>
              <Link to={`details/${product.id}`}>
              <button >Click</button>
              </Link >
              
              </td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            
        ) : (
            <p className="text-center mt-3 no-msg"> No products added yet. </p>
        )}
        </Container>
    </div>
  )
}

export default Product
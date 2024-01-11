import React, { useEffect, useState } from 'react'
import { useParams, useNavigate,Link } from 'react-router-dom'

// import { Card, Button,Link } from 'react-bootstrap';
// import ListGroup from 'react-bootstrap/ListGroup';

import axios from 'axios';
const ViewDetails = () => {
    let { id } = useParams();
    let navigate = useNavigate();
    // alert("collection id:" + id);
    let get_api = "http://localhost:5000/product"
    let [single, setSingle] = useState({
        pname: "",
        comp: "",
        price: "",
        color: "",
        desc: "",
        id: ""
    })

    useEffect(() => {
        axios.get(`${get_api}/${id}`)


            .then(res => {
                console.log("fetch single product:", res.data);
                setSingle(res.data)
                // alert("set single", res.data)
            })
            .catch(err => {
                console.log("err to fetch singke product", err);
                alert("Unable to find product")
            })
    }, []);

    let deletion = (did) => {
        console.log("collect id for delt", did);
        axios
            .delete(`${get_api}/${did}`)
            .then(res => {
                alert("Product deleted")
                console.log("Res for delt", res);
                navigate('/product')
            })
            .catch(err => {
                alert("Error in delete", err)
                console.log("Error for delt");
            })
    }


    return (
        <div>
            <div>
                <h1>Product Details</h1>
                <h3>Product Name:{single.prod_name}</h3>
                <h4>Company:{single.company} </h4>
                <h5>Price:{single.price}</h5>
                <p>Color:{single.color}</p>
                <p>{single.description}</p>
                <button onClick={() => deletion(single.id)}>Delete</button>
                <Link to={`/edit/${single.id}`}>
                <button>Edit</button>
                </Link>





                {/* <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Product Name:{single.prod_name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Company:{single.company}</Card.Subtitle>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Price:{single.price}</ListGroup.Item>
                            <ListGroup.Item>Color:{single.color}</ListGroup.Item>
                            <ListGroup.Item>{single.description}</ListGroup.Item>
                        </ListGroup>
                        <Button variant="primary" onClick={() => deletion(single.id)}>Delete</Button>
                        <Link to>
                        <Button>Edit</Button>
                        </Link to>
                    </Card.Body>
                </Card> */}
            </div>
        </div>
    )
}

export default ViewDetails
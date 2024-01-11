import React from 'react'
import { Container,Table } from 'react-bootstrap'
// import styles from './ViewChild.module.css'
import { Link } from 'react-router-dom'
const ViewChild = (props) => {
  let { prod_name, company, price, color, description} = props
  return (

    <div className="table-container">
       <Container>
      <Table striped bordered hover>
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


          <tr>
            <td>{prod_name}</td>
            <td>{company}</td>
            <td>{price}</td>
            <td>{color}</td>
            <td>{description}</td>
            <td>
              <Link to={`details/${props.id}`}>
              <button >Click</button>
              </Link >
            </td>
          </tr>

        </tbody>
      </Table>
      </Container>


    </div >
  )
}

export default ViewChild
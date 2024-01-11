import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import AddData from '../Component/AddData'
import Home from '../Component/Home'
import Header from '../Layout/Header/Header'
import ViewDetails from '../Component/ViewDetails'
import Product from '../Component/Product'
import EditPage from '../Component/EditPage'
const Routing = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="add" element={<AddData />} />
          <Route path="product" element={<Product />} />
          <Route path="product/details/:id" element={<ViewDetails />} />
          <Route path="edit/:pid" element={<EditPage />} />

        </Routes>
      </Router>

    </div>
  )
}

export default Routing
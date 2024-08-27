import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'

const Rout = ({shop, Filter, allCateFilter, addToCart, cart}) => {
  return (
   <>
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart cart={cart}/>}/>
      <Route path='shop' element={<Shop shop={shop} Filter={Filter} allCateFilter={allCateFilter} addToCart={addToCart}/> } />
   </Routes>
   </>
  )
}

export default Rout

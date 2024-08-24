import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'

const Rout = ({shop, Filter}) => {
  return (
   <>
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='shop' element={<Shop shop={shop} Filter={Filter}/>} />
   </Routes>
   </>
  )
}

export default Rout

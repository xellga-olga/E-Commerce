import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './comp/Nav'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

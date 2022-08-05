import React from 'react'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Items from './Pages/Items'
import {Routes as Rr, Route} from 'react-router-dom'
function Routes() {
  return (
    <Rr>
        <Route path='/' element={<Home/>}/>
        <Route path='/:item' element={<Items/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Rr>
  )
}

export default Routes
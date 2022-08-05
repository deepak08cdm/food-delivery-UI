import React,{useContext, useState} from 'react'
import { cartData } from '../MainContext'
import axios from 'axios'

function Navbar() {
    const {cartItems} = useContext(cartData)
    
    // const fetchData = async()=>{
    //     const {data} = await axios.get('http://localhost:3000/cart')
    //     console.log(data)
    //     setCartLength(data.length)
    // }
    // useEffect(()=>{
    //     fetchData()
    // })
    console.log(cartItems)
  return (
    <h1>items in the cart :- {cartItems.length}</h1>
  )
}

export default Navbar
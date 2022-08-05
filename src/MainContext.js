import React , {createContext, useState} from 'react'

export const cartData = createContext()
function MainContext(props) {
    const [cartItems, setCartItems] = useState([])
  return (
    <cartData.Provider value={{cartItems, updateCartItems:(data)=>{setCartItems(data)}}}>
        {props.children}
    </cartData.Provider>
  )
}

export default MainContext
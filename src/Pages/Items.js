import React, { useContext } from 'react'
import Divider from '@mui/material/Divider'
import axios from 'axios'
import { cardData, cartData } from '../MainContext'

const arr = [
    {
        "name": "Tomato Basil Italian Pizza",
        "image": "https://res.cloudinary.com/...pizza-1_trloij.jpg",
        "price": "450",
        "description": "Dressed with oil, the origanum and garlic cloves"
    },
    {
        "name": "Bombay Pizza",
        "image": "image-url",
        "price": "550",
        "description": "Spicy tomato sauce with Italian herbs, mushrooms, onion, cottage cheese, coriander and mozzarella"
    },
    {
        "name": "Sicilia Pizza",
        "image": "image-url",
        "price": "450",
        "description": "A thick base pizza with fresh tomato sauce, mushrooms, garlic, pickled onions"
    }
]

function Items() {
    const { cartItems, updateCartItems } = useContext(cartData)
    const handleClick = async (each) => {
        const result = await axios.post('http://localhost:3000/cart', each)
        const { data } = await axios.get('http://localhost:3000/cart')
        updateCartItems(data)
    }
    return (
        arr.map((each) => {
            return (
                <>
                    <h2>{each.name}</h2>
                    <b>{each.price}</b>
                    <p>{each.description}</p>
                    <button onClick={() => { handleClick(each) }}>Order now</button>
                    <Divider />
                </>
            )
        }
        )
    )
}

export default Items
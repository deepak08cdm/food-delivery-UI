import React, { useContext, useEffect, useState } from 'react'
import Divider from '@mui/material/Divider'
import { cartData } from '../MainContext'
import axios from 'axios'


function Cart() {
    const { cartItems } = useContext(cartData)
    return (
        cartItems.map((each) => {
            return (
                <>
                    <h2>{each.name}</h2>
                    <b>{each.price}</b>
                    <p>{each.description}</p>
                    <Divider />
                </>
            )
        }
        )
    )
}

export default Cart
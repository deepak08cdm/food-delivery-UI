import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Routes from './Routes';
import { cartData } from './MainContext';
import { useContext, useEffect } from 'react';
import axios from 'axios'

function App() {
  const { updateCartItems } = useContext(cartData)
  const fetchData = async () => {
    const { data } = await axios.get('http://localhost:3000/cart')
    updateCartItems(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
}

export default App;

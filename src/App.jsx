import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import Header from './pages/Header';
import Carousel from './pages/Carousel';
import { Outlet } from 'react-router-dom';

function App() {
  const [hotel, setHotel] = useState([]);
  useEffect(() => {
    fetch('https://travel-guru-server-7xh5f1odl-armans-projects-cd84b623.vercel.app ')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }, [])
  // console.log(hotel);

  return (
    <div className='home-div'>
      <div className='dark-layer'></div>
      <Header />
      <Outlet />
      <h1 className='text-red-500'>arman</h1>
    </div>
  )
}

export default App

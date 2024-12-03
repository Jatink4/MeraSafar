import React from 'react'
import textlogo from '../assets/MeraSafar-text-logo.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="h-screen pt-5 flex justify-between flex-col w-full bg-white-400 ">
        <img src={textlogo} alt="Mera-Safar-Logo" />
        <div className="bg-black text-white py-5 px-4">
            <h2 className='text-2xl font-bold text-center'>Get Started with MeraSafar</h2>
            <Link to='/login' className=' flex item-center justify-center w-full bg-white text-black py-3 rounded mt-2 font-bold text-xl'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home

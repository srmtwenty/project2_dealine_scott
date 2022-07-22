import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full h-16 bg-blue-600 flex items-center px-10 py-2 justify-between' >
        <Link to="/" className='text-white text-3xl font-semibold '>Project 2</Link>
        <Link to="/" className='text-white text-3xl font-semibold '>Home</Link>
        <Link to="/users" className='text-white text-3xl font-semibold '>Heroes</Link>
        <Link to="/enemies" className='text-white text-3xl font-semibold '>Enemies</Link>
        <Link to="/weapons" className='text-white text-3xl font-semibold '>Weapons</Link>
        <Link to="/armors" className='text-white text-3xl font-semibold '>Armors</Link>
        <Link to="/items" className='text-white text-3xl font-semibold '>Items</Link>
    </div>
  )
}

export default Navbar
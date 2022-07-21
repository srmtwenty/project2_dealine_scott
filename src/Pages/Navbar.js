import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full h-16 bg-blue-600 flex items-center px-10 py-2 justify-between' >
        <Link to="/" className='text-white text-3xl font-semibold '>Project 2</Link>
        <Link to="/" className='text-white text-3xl font-semibold '>Home</Link>
        <Link to="/users" className='text-white text-3xl font-semibold '>Users</Link>
        <Link to="/weapons" className='text-white text-3xl font-semibold '>Weapons</Link>
        <Link to="/armors" className='text-white text-3xl font-semibold '>Armors</Link>
        <Link to="/items" className='text-white text-3xl font-semibold '>Items</Link>
        <Link to="users/add" className='w-48 bg-white text-blue font-semibold text-xl h-12 rounded-lg flex justify-center items-center transition ease-in-out delay-150 bg-white  hover:bg-red-500 hover:text-white duration-50; '> Add Users</Link>
        <Link to="weapons/add" className='w-48 bg-white text-blue font-semibold text-xl h-12 rounded-lg flex justify-center items-center transition ease-in-out delay-150 bg-white  hover:bg-red-500 hover:text-white duration-50; '> Add Weapons</Link>
        <Link to="armors/add" className='w-48 bg-white text-blue font-semibold text-xl h-12 rounded-lg flex justify-center items-center transition ease-in-out delay-150 bg-white  hover:bg-red-500 hover:text-white duration-50; '> Add Armors</Link>
        <Link to="items/add" className='w-48 bg-white text-blue font-semibold text-xl h-12 rounded-lg flex justify-center items-center transition ease-in-out delay-150 bg-white  hover:bg-red-500 hover:text-white duration-50; '> Add Items</Link>
        <Link to="users/add" className='w-48 bg-white text-blue font-semibold text-xl h-12 rounded-lg flex justify-center items-center transition ease-in-out delay-150 bg-white  hover:bg-red-500 hover:text-white duration-50; '> Add Users</Link>
        <Link to="users/add" className='w-48 bg-white text-blue font-semibold text-xl h-12 rounded-lg flex justify-center items-center transition ease-in-out delay-150 bg-white  hover:bg-red-500 hover:text-white duration-50; '> Add Users</Link>
    </div>
  )
}

export default Navbar
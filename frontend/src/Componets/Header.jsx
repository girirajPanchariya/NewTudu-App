import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' flex justify-between w-screen h-12 bg-green-700 rounded-b-sm px-8 text-white'>
        <h1 className=' mt-2 text-2xl font-bold text-neutral-200 hover:cursor-pointer'> <Link to='/'>Tudo</Link></h1>
        <p className=' text-lime-300 text-xl font-bold py-2'>This is over Tudos</p>
        <button className='text-xl bg-pink-500 w-15 h-10 mt-1 rounded-sm hover:cursor-pointer'>Login</button>
    </div>
  )
}

export default Header
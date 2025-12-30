import React from 'react'
import CreateTudo from './CreateTudo'
import MyAllTudo from './MyAllTudo'
import TudoProvider from '../Context/TudoProvider'

const Mainsection = () => {
  return (
    <div className=' h-[93%] w-screen bg-blue-400 mt-0.5 grid grid-cols-2 p-1 px-5'>
        <TudoProvider>

            <CreateTudo/>
            <MyAllTudo/>
        </TudoProvider>
    </div>
  )
}

export default Mainsection
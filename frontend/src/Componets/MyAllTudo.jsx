import React, { useContext, useState } from 'react'
import { TudoContext } from '../Context/TudoProvider'

const MyAllTudo = () => {
const {tudo,erorr} = useContext(TudoContext)
const {deleteTudo,readTudoById,updateTudos,seDataUpdate} = useContext(TudoContext)
  return (
    <div className='bg-indigo-400 h-[101%] pl-6  overflow-y-scroll overflow-x-hidden '>

{tudo && tudo.map((item)=>(
    <div className='bg-gray-400 h-auto  items-center   rounded-sm w-140 border border-b-blue-600 font-bold mt-2 '  key={item._id}>
          <p className='text-xl text-center font-medium '> <span className='text-2xl pl-5 '>Title:</span> {item.title}</p>
          <p className='p-2 text-xl  italic font-medium '><span className='text-2xl p-2 font-bold'>Subject:</span> {item.subject}</p>
          <p className='p-2 gap-1 text-xl font-medium'><span className='text-2xl  '>Description: </span>{item.description}</p>
          <div className='h-10  w-140 mt-1 flex justify-evenly rounded-sm object-cover mb-2'>
    <button onClick={()=>deleteTudo(item._id)} className=' border-2 border-b-lime-600 w-40 rounded-sm cursor-pointer bg-red-600'>Delete</button>
    <button onClick={()=>readTudoById(item._id)} className=' border-2 border-b-lime-600 w-40 rounded-sm cursor-pointer bg-green-800'>Read</button>
    <button onClick={()=>seDataUpdate(item)} className=' border-2 border-b-lime-600 w-40 rounded-sm cursor-pointer bg-blue-600'>Edit</button>
  </div>
        </div>
        
))}

  
      
    </div>
  )
}

export default MyAllTudo
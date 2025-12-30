import React, { useContext, useEffect, useState } from 'react'
import { TudoContext } from '../Context/TudoProvider'

const CreateTudo = () => {
  const {fetchTudo,DataUpdat,updateTudos} = useContext(TudoContext)
  const [tudo, setTudo] = useState({
    title: "",
    subject: "",
    description: ""
  })
  
  useEffect(()=>{
    if(DataUpdat){
      setTudo({
        title:DataUpdat.title,
        subject:DataUpdat.subject,
        description:DataUpdat.description
      })
    }
  },[DataUpdat])

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setTudo({ ...tudo, [name]: value })
  }

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if(DataUpdat){
        await updateTudos(DataUpdat._id,tudo)
      }else{
      const response = await fetch('http://localhost:8080/Tudo/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tudo)
      })

      if (!response.ok) {
        throw new Error("Failed to create Tudo")
      }

      // reset form after submit
      setTudo({
        title: "",
        subject: "",
        description: ""
      })
     await fetchTudo()
      alert("Tudo created successfully ✅")
    }
    } catch (error) {
      console.error(error)
      alert("Error while creating Tudo ❌")
    }
  }

  return (
    <div className="h-[96%] w-[80%] bg-white overflow-hidden ml-5 ">
      <form onSubmit={handleSubmit} className="block bg-green-400 h-153 overflow-hidden w-full p-4">
        <h1 className="flex justify-center text-xl font-bold mb-4">
          Create a new Tudo
        </h1>

        <label className="text-lg font-bold">Title</label>
        <input
          type="text"
          name="title"
          value={tudo.title}
          onChange={handleChange}
          className="w-full bg-gray-100 py-2 px-4 mt-2 rounded-sm"
          placeholder="Title"
        />

        <label className="text-lg font-bold mt-4 block">Subject</label>
        <input
          type="text"
          name="subject"
          value={tudo.subject}
          onChange={handleChange}
          className="w-full bg-gray-100 py-2 px-4 mt-2 rounded-sm"
          placeholder="Subject"
        />

        <label className="text-lg font-bold mt-4 block">Description</label>
        <textarea
          name="description"
          value={tudo.description}
          onChange={handleChange}
          className="w-full h-32 bg-gray-100 py-2 px-4 mt-2 rounded-sm"
          placeholder="Description"
        />

        <button
          type="submit"
          className="mt-4 bg-black text-white px-6 py-2 rounded"
        >
          {DataUpdat ? "updata":"submit"}
        </button>
      </form>
    </div>
  )
}

export default CreateTudo

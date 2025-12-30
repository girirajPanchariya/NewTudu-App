import React, { createContext, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const TudoContext = createContext()

const TudoProvider = ({ children }) => {
    const [tudo, setTudo] = useState([])
    const [singleTudo, setSingleTudo] = useState(null)
    const [erorr, seterror] = useState(null)
    const [DataUpdat,seDataUpdate] = useState(null)
    const navigation = useNavigate()
    const fetchTudo = useCallback(async () => {
        try {
            const resposnse = await fetch('http://localhost:8080/Tudo/get')

            if (!resposnse.ok) {
                seterror("The response was not found")
            }

            const tudo = await resposnse.json()
            setTudo(tudo.AllTudo)

        } catch (error) {
            seterror(error)
        }
    }, [])

    useEffect(() => {
        fetchTudo()
    }, [fetchTudo])

    const deleteTudo = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:8080/Tudo/deleted/${id}`,
                {
                    method: 'DELETE',
                }
            )

            if (!response.ok) {
                throw new Error('Delete failed')
            }

            const data = await response.json()
            alert(data.message)

            fetchTudo()

        } catch (error) {
            console.error('DELETE ERROR:', error.message)
            seterror(error.message)
        }
    }

    const readTudoById = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/Tudo/get/${id}`)

            if (!response.ok) {
                throw new Error('There is no todo with this ID')
            }

            const data = await response.json()
            
            // ✅ Make sure this matches your backend response
            setSingleTudo(data.readTudo) // or data.ReadTudo - check your backend!
            navigation(`/Read/${id}`)
            return data.readTudo

        } catch (error) {
            console.log(error)
            seterror(error.message)
            throw error
        }
    }

    const updateTudos = async(id,updateData)=>{
            try {
                    const response =await fetch(`http://localhost:8080/Tudo/update/${id}`,{
                        method:'PUT',
                        headers:{
                        'Content-Type': 'application/json'
                        },
                        body:JSON.stringify(updateData)
                    }
                )
                const data =await response.json()
                console.log(data);
                
                    seDataUpdate()
                await fetchTudo()
                navigation('/')
                return data.updateData
            } catch (error) {
                console.log(erorr);
                
                
            }
    }

    return (
        <TudoContext.Provider value={{ 
            tudo, 
            singleTudo, 
            fetchTudo, 
            erorr, 
            deleteTudo, 
            readTudoById,
            updateTudos,
            DataUpdat,
            seDataUpdate
        
        }}>
            {children}
        </TudoContext.Provider>
    )
}

export default TudoProvider
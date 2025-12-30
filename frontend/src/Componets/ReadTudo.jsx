import React, { useContext, useEffect } from 'react'
import { TudoContext } from '../Context/TudoProvider'
import { useNavigate, useParams } from 'react-router-dom'

const ReadTudo = () => {
    const { singleTudo, erorr, readTudoById, } = useContext(TudoContext)
    const navigate = useNavigate()
    const { id } = useParams() // Get id from URL

    // Fetch the todo when component mounts if singleTudo is null
    useEffect(() => {
        if (!singleTudo && id) {
            readTudoById(id)
        }
    }, [id])

    // Handle loading state - THIS MUST COME BEFORE ACCESSING singleTudo
  

    return (
        <div className='bg-indigo-400 min-h-screen p-6'>
            <div className='max-w-3xl mx-auto'>
                {/* Back button */}
            
                {/* Todo details card  */}
                <div className='bg-white rounded-lg shadow-lg p-8'>
                    <div className='mb-6'>
                        <h1 className='text-3xl font-bold text-gray-800 mb-2'>
                            {singleTudo?.title || 'No Title'}
                        </h1>
                        <div className='h-1 w-20 bg-indigo-600 rounded'></div>
                    </div>

                    <div className='space-y-6'>
                        <div>
                            <h2 className='text-xl font-semibold text-gray-700 mb-2'>
                                Subject
                            </h2>
                            <p className='text-lg text-gray-600 italic'>
                                {singleTudo?.subject || 'No Subject'}
                            </p>
                        </div>

                        <div>
                            <h2 className='text-xl font-semibold text-gray-700 mb-2'>
                                Description
                            </h2>
                            <p className='text-lg text-gray-600 leading-relaxed'>
                                {singleTudo?.description || 'No Description'}
                            </p>
                        </div>

                        {singleTudo?.createdAt && (
                            <div className='pt-4 border-t border-gray-200'>
                                <p className='text-sm text-gray-500'>
                                    Created: {new Date(singleTudo.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadTudo
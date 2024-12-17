import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userid} = useParams()


  return (
    <div className='text-3xl text-center bg-gray-600 p-4 text-white'>User: {userid}</div>
  )
}

export default User
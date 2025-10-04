import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='flex justify-center  bg-green-500 text-white text-3xl p4' >
      User: {userid}
    </div>
  )
}

export default User

import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    let { id } = useParams()

  return (
    <div className='h-129 text-center text-2xl m-4 p-3 '>User : {id} </div>
  )
}

export default User
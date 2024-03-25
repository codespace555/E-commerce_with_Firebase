import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    const { user } = useParams()
  return (
    <div>
   <div>{user}</div>
    </div>
  )
}

export default Profile

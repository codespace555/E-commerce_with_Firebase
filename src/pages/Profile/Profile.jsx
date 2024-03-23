import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    const { user } = useParams()
  return (
    <div>
   <div>profile</div>
    </div>
  )
}

export default Profile

import React from 'react'
import {auth} from '../firebase'




const LogOut = () => {
    const signOut = () => {
        signOut(auth)
    }
  return (
    <button onClick={() => auth.signOut()} 
    className="bg-blue-100 px-4 py-2">
        Logout
    </button>
  )
}

export default LogOut
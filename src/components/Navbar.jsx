import React from 'react'
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from './SignIn'
import LogOut from './LogOut'


const styles = {
    nav: `bg-blue-500 h-20 flex justify-between items-center p-6 rounded-xl`,
    heading: `text-white text-3xl`,
}

const Navbar = () => {
    const [user] = useAuthState(auth);
  return (
    <div className={styles.nav}>

        <h1 className={styles.heading}>What'up</h1>
        {
            user ? <LogOut /> : <SignIn />
        }

    </div>
  )
}

export default Navbar
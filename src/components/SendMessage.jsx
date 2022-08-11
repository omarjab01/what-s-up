import { async } from '@firebase/util';
import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import {auth, db} from '../firebase'

const SendMessage = ({scroll}) => {


    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        if(input === ""){
            alert("Non puoi lasciare il campo vuoto");
            return
        }
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, 'messaggi'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput('')
        scroll.current.scrollIntoView({
            behavior: 'smooth'
        })
    }



  return (
    <form className='h-14 w-full max-w-[728px] flex text-xl absolute bottom-0 rounded-xl gap-2' onSubmit={sendMessage} >
        <input type="text" placeholder='Scrivi il messaggio..' 
        className='w-full text-xl p-3 bg-white text-gray-400 outline-none border-none rounded-xl'
        value={input} onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit' className=' rounded-xl w-[20%] bg-blue-500 text-white' >Invia</button>
    </form>
  )
}

export default SendMessage
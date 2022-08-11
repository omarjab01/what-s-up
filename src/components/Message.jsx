import React from 'react'
import { auth } from '../firebase'

const styles = {
    sent : `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
    message: `flex items-center shadow-xl m-4 my-6 py-2 px-3 rounded-tl-full rounded-tr-full`
}

const Message = ({message}) => {

  const messageClass = 
  message.uid === auth.currentUser.uid ? `${styles.sent}` : `${styles.received}`

  return (
    <div className=''>
        <div className={`${styles.message} ${messageClass} `} >
            <p className='absolute mt-[-4rem] text-gray-600 text-xs'>{message.name}</p>
            <p>{message.text}</p>
        </div>
    </div>
  )
}

export default Message
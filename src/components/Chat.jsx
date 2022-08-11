import { onSnapshot, orderBy } from 'firebase/firestore';
import React, {useState, useEffect, useRef} from 'react'
import Message from './Message';
import { query, collection} from 'firebase/firestore'
import { db } from '../firebase';
import SendMessage from './SendMessage';

const Chat = () => {

    const scroll = useRef();

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'messaggi'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) =>{
                messages.push({...doc.data(), id: doc.id})
            })
            setMessages(messages)
        })
        return () => unsubscribe();
    }, [])


  return (
    <>
        <main className='flex flex-col p-[10px] relative overflow-auto pb-12'>
            
            {
                messages && messages.map((message) => (
                    <Message  key={message.id} message={message} />
                ))
            }
        </main>
        <span ref={scroll} >
            <SendMessage 
                scroll={scroll}
            />
        </span>
    </>
  )
}

export default Chat
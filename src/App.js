import React from "react";
import Navbar from "./components/Navbar";
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth' 
import Chat from "./components/Chat";


const style = {
  appContainer: `max-w-[728px] mx-auto text-center rounded-xl`,
  sectionContainer: `roundex-xl flex flex-col h-[90vh] bg-slate-50 mt-10 shadow-lg border relative rounded-xl`,
}

function App() {

  const [user] = useAuthState(auth);
  console.log(user);


  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
        {
          user ? <Chat /> : null
        }
      </section>
      
    </div>
  );
}

export default App;

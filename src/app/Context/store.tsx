'use client';

import React, { createContext,useState,ReactNode,useContext} from "react";


type Email = string;

type EmailState = {
  email:Email 
  setEmail(email:Email):void;
}
const GlobalContext = createContext<EmailState | null>(null);


interface Props {
  children?: ReactNode
  // any props that come into the component
}



export const GlobalContextProvider  = ({children}:Props)=>{
const [email,setEmail] = useState<Email>("");


return (
  <GlobalContext.Provider value={{email,setEmail}}>

    {children}

  </GlobalContext.Provider>

)
     

}


export  const useGlobalContext = () => useContext(GlobalContext);

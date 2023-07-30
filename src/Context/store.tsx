'use client';

import React, { createContext,useState,ReactNode,useContext} from "react";


type Email = string;

type EmailState = {
  email:Email,
  setEmail(email:Email):void;
}


const defaultState ={
  email:'',
  setEmail:(email:Email)=>{}
} as EmailState

const GlobalContext = createContext(defaultState);


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



// export  const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
import React, { createContext,ReactNode,useState} from "react";


type Email = string;

type EmailState = {
  email:Email 
  setEmail(email:Email):void;
}

interface Props {
  children?: ReactNode
  // any props that come into the component
}
const EmailContext = createContext<EmailState | null>(null);


const Context  = ({children}:Props)=>{
const [email,setEmail] = useState<Email>("");


return (
  <EmailContext.Provider value={{email,setEmail}}>

    {children}

  </EmailContext.Provider>

)
     

}


export default Context;

// const useEmail = (): EmailState => {

//   const context = useContext(EmailContext);

//   return context;
// }

// export const Email_name = createContext('');



// const Context = ({ children }) => {

//   const [email,setEmail] = useState('');


//   return (
//     <Email_name.Provider  value={{email,setEmail}}>
// {children}

//     </Email_name.Provider>
//   )
// }

// export default Context
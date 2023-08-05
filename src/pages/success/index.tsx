"use client";

import Image from 'next/image';
import succcess from '../../../public/static/Images/icon-success.svg'
import '../../../public/static/css/success.css'
import '../../app/globals.css'
import { useGlobalContext } from '../../Context/store';
import React,{useEffect,useState} from 'react';
import { useRouter } from "next/navigation";

const Success = () => {


const {email,setEmail} = useGlobalContext();
const [currentState,setCurrentState] = useState<string>('')

const router  = useRouter();
console.log(email)

const submitHandler = (e:React.SyntheticEvent)=>{
  e.preventDefault()
  sessionStorage.clear()
  router.push('/')

}

useEffect(()=>{

    if(sessionStorage.getItem("state")){
    setCurrentState(sessionStorage.getItem('state')!)
  }else {
    alert("no value")
  }


},[])



  return (
    
    <div className='flex items-center justify-center   max-h-full bg-Charcoal-grey'>

   
<div className="max-w-fit  mt-20 md:mt-40 p-8 md:max-w-lg md:bg-white md:border md:border-gray-200 md:rounded-3xl md:shadow ">
    {/* <a href="#">
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a> */}

    <Image 
    priority
    src={succcess}
    alt="tick"

    />
    <div className="mt-10">
        
            <h5 className="mb-6 text-5xl font-bold tracking-tight text-gray-900">Thanks for subscribing!</h5>
      
        <p className="mb-3 font-normal text-gray-700 ">A confirmation email has been sent to <b>{currentState}</b> Please open it and click the button inside to confirm your subscription</p>
        <button  type="submit" onClick={submitHandler} className="text-white mt-40 md:mt-2 bg-Slate-Grey hover:bg-tomato-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg w-full text-sm px-5 py-5 text-center mr-2 mb-2">Dismiss message</button>
    </div>
</div>
</div>
  )
}

export default Success
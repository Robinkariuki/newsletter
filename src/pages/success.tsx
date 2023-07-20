import Image from 'next/image';
import succcess from '../../public/static/Images/icon-success.svg'
import '../../public/static/css/success.css'


const Success = () => {
  return (
    
<div className="max-w-fit mt-20 p-8 md:max-w-sm md:bg-white md:border md:border-gray-200 md:rounded-lg md:shadow dark:bg-gray-800 dark:border-gray-700">
    {/* <a href="#">
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a> */}

    <Image 
    priority
    src={succcess}
    alt="tick"

    />
    <div className="mt-10">
        
            <h5 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Thanks for subscribing!</h5>
      
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription</p>
        <button  type="button" className="text-white mt-40 bg-Slate-Grey hover:bg-tomato-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg w-full text-sm px-5 py-5 text-center mr-2 mb-2 dark:bg-tomato-800 dark:hover:bg-tomato-800 dark:focus:ring-red-300">Dismiss message</button>
    </div>
</div>

  )
}

export default Success
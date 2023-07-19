import Image from 'next/image';
import mobileImage from '../../public/static/Images/illustration-sign-up-mobile.svg'
import deskTopImage from '../../public/static/Images/illustration-sign-up-desktop.svg'
import checkList from '../../public/static/Images/icon-list.svg'

const SignUp = () => {
  return (
    <>
    <div className=" flex flex-col  md:m-20 md:p-4 md:max-h-fit md:flex-row-reverse md:max-w-3xl bg-white  md:border border-gray-200 rounded-lg  md:rounded-2xl md:shadow dark:bg-gray-800 dark:border-gray-700 ">
   
    <Image
    priority   
    src={mobileImage}
    alt="background image"
    className='image1 '



    />
      <Image
    priority   
    src={deskTopImage}
    alt="background image"
    className='image2 rounded-none'


    />
    <div className="p-5 space-x-3">
        
            <p className="mb-2 text-4xl  font-bold tracking-tight text-gray-900 dark:text-white">Stay Updated!</p>
               
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Join 60,000+ product managers receiving monthly updates on:</p>

        <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
    <li className="flex items-start">
    <Image
    priority   
    src={checkList}
    alt="background image"
    className='mr-3'
    
    />
       <p>Product discovery and building what matters</p> 
    </li>
    <li className="flex items-start">
    <Image
    priority   
    src={checkList}
    alt="background image"
    className='mr-3'

    />
        <p>Measuring to ensure updates are a success.</p>
    </li>
    <li className="flex items-start">
    <Image
    priority   
    src={checkList}
    alt="background image"
    className='mr-3'

    />
    <p >And much more!</p>
        
    </li>
</ul>
        
        <form>
    <div className="mb-6 mt-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@company.com" required/>
  </div>

  <button type="button" className="text-white bg-Slate-Grey hover:bg-tomato-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg w-full text-sm px-5 py-5 text-center mr-2 mb-2 dark:bg-tomato-800 dark:hover:bg-tomato-800 dark:focus:ring-red-300">Subscribe to monthly newsletter</button>
    </form>


    </div>


</div>
    </>
  )
}

export default SignUp
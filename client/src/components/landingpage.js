import React from 'react';
import Jordan from "../Assets/jordan.png"
import wave from "../Assets/sneakers/wave.png"
import free from "../Assets/sneakers/nikefree.png"

const LandingPage = () =>{
   return(
    <>
        <div className='flex w-full h-[40%]'>
            <div className=' bg-blue-20 w-[50%] flex items-center justify-center '>
                <div className='mx-auto'>
                    <h1 className='md:text-7xl sm:text-4xl font-bold md:py-4'>FIND YOUR STRIDE WITH <span className='text-red-500 '>US</span></h1>
                    <button className="bg-[#9ff5ee] hover:bg-[#15898d] hover:border-sky-900 w-[200px] rounded-md my-6 mx-auto py-3 font-bold text-black">SHOP NOW</button>
                </div>
            </div>
            <div className='flex w-[50%]'>
                <img src={Jordan}  className="h-full rotate-[50deg]"/>
                <div>
                <img src={free} className="animate-ping h-[40%] rotate-1"/>
                <img src={wave} className="h-[80%]  rotate-[-40deg]"/>

                </div>
            </div>
            
        </div>
        <div className='flex px-10 w-full h-[50%] justify-between mt-12 rounded-lg'>
           <div className='bg-[wave] shadow-lg shadow-blue-300 rounded-lg w-[30%] '>
                ygvgydfur
           </div>
           <div className='shadow-lg shadow-blue-300 rounded-lg w-[30%]'>
                ygvgydfur
           </div>
           <div className='shadow-lg shadow-blue-300 rounded-lg w-[30%]'>
                ygvgydfur
           </div>
        </div>
        <div className='w-full h-[50%] mt-12 rounded-lg bg-red-500'>
            jfdsdjkd
        </div>
        
    </>
   )
}

export default LandingPage;
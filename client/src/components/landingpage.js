import React from 'react';
import Jordan from "../Assets/jordan.png"
import wave from "../Assets/sneakers/wave.png"
import free from "../Assets/sneakers/nikefree.png"

const LandingPage = () =>{
   return(
    <>
        <div className='flex w-full h-[40%]'>
            <div className=' bg-blue-20 w-[50%] flex items-center justify-center '>
                <div className=''>
                    <h1 className='font-bold block'>FIND YOUR STRIDE WITH <span>US</span></h1>
                    <button className="bg-[#9ff5ee] hover:bg-[#15898d] hover:border-sky-900 w-[200px] rounded-md my-6 mx-auto py-3 font-bold text-black">Get started</button>
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
        
    </>
   )
}

export default LandingPage;
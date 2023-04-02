import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai'

const Shop = () =>{
    return(
        <>
           <div >
            <div classNaeName=''>
            <div class="relative w-full">
            <div className="mx-auto w-full md:w-[50%] flex pr-2 md:pr-8 pl-2 md:pl-5 z-0 ">
                <div class="relative w-full">
                    <input type="text" class="mx-auto text-lg md:text-2xl h-10 md:h-14 w-full pr-10 md:pr-12 pl-3 md:pl-5 rounded z-10 focus:shadow-xl focus:outline-none placeholder-lg" placeholder="Search anything..."/>
                    <div class="absolute top-0 right-0 h-full w-10 md:w-12 text-gray-400 hover:text-gray-500 flex items-center justify-center">
                        <i class="fa fa-search"><AiOutlineSearch/></i>
                    </div>
                </div>
            </div>
            </div>


            </div>
            <div className='flex border'>
                <div className='w-[15%] border border-solid'>
                    <div className='border border-solid'>
                        <h6>Sort</h6>
                    </div>
                    <div className='border border-solid h-'>
                        <h1>FILTER</h1>
                    </div>
                </div>
                <div>
                    product listing
                </div>
            </div>
           </div>
        </>
    )
}

export default Shop
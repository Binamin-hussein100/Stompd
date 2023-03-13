import React from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai'


const Navbar = () => {
    return(
        <>
            <div className='container px-10 mt-5'>
                <div className='flex justify-between'>
                    <div>
                        <AiOutlineSearch/>
                    </div>
                    <div >
                        <ul className='flex'>
                            <li className='px-4 font-bold'>MEN</li>
                            <li className='px-4 font-bold'>WOMEN</li>
                            <li className='px-4 font-bold'>YOUTH</li>
                            <li className='px-4 font-bold'>FEATURED</li>
                            <li className='px-4 font-bold'>CUSTOMS</li>
                        </ul>
                    </div>
                    <div className='flex'>
                        <AiOutlineUser className='m-4'/>
                        <AiOutlineShoppingCart className='m-4'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
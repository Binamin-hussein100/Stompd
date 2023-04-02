import React from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <>
            <div class="container px-4 sm:px-10 mt-5">
                <div class="flex flex-col sm:flex-row justify-between items-center">
                    <div>
                    <AiOutlineSearch />
                    </div>
                    <div class="mt-4 sm:mt-0">
                    <ul class="flex flex-col sm:flex-row">
                        <li class="px-4 font-bold"><Link to="/">HOME</Link></li>
                        <li class="px-4 font-bold"><Link to="/shop">SHOP</Link></li>
                        <li class="px-4 font-bold">FEATURED</li>
                        <li class="px-4 font-bold">CUSTOMS</li>
                    </ul>
                    </div>
                    <div class="flex">
                    <AiOutlineUser class="m-4" />
                    <AiOutlineShoppingCart class="m-4" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar;


<div className='container px-10 mt-5'>
                
                <div className='flex justify-between'>
                    <div>
                        <AiOutlineSearch/>
                    </div>
                    <div >
                        <ul className='flex'>
                            <Link to='/'>
                                <li className='px-4 font-bold'>HOME</li>
                            </Link>
                            <Link to='/shop'>
                                <li className='px-4 font-bold'>SHOP</li>
                            </Link>
                            
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
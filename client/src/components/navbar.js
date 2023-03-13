import React from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai'


const Navbar = () => {
    return(
        <>
            <div>
                <AiOutlineSearch/>
            </div>
            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div>
                <AiOutlineUser/>
                <AiOutlineShoppingCart/>
            </div>
        </>
    )
}

export default Navbar;
import React,{useState, useEffect} from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import axios from 'axios';
import wave from "../Assets/sneakers/wave.png"



const Shop = () =>{
    const [selectedFilter, setSelectedFilter] = useState("all")
    const [products,setProducts] = useState([])
    const [isDropdownVisibleGender, setIsDropdownVisibleGender] = useState(false)
    const [isDropdownVisiblePrice, setIsDropdownVisiblePrice] = useState(false)
    const [isDropdownVisibleSize, setIsDropdownVisibleSize] = useState(false)

    // useEffect(() =>{
    //     axios.get("")
    //     .then(res =>{
    //         setProducts(res.data)
    //     })
    //     .catch(err =>{
    //         console.error(err)
    //     })
    // },[])

    const filterProducts = (products, filter) =>{
        if(filter == 'all'){
            return products
        }else{
            return products.filter(product => product.category == filter)
        }
    }

    const handleDropdownClickGender = () => {
        setIsDropdownVisibleGender(!isDropdownVisibleGender)
    }

    const handleDropdownClickPrice = () => {
        setIsDropdownVisiblePrice(!isDropdownVisiblePrice)
    }

    const handleDropdownClickSize = () => {
        setIsDropdownVisibleSize(!isDropdownVisibleSize)
    }

    // const handleDropdownHover = () =>{
    //     setIsDropdownVisible(true)
    // }

    // const handleDropdownLeave = () => {
    //     setIsDropdownVisible(false)
    // }
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
                <div className='w-[20%] '>
                    
                    <div className=' p-10 '>
                        <h1 className='text-4xl font-semibold italic mb-5'>FILTER</h1>
                        <div className="relative inline-block text-left w-full" >
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center w-[80%] p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-cyan-800"
                            id="dropdownHoverButton"
                            data-dropdown-toggle="dropdownHover"
                            data-dropdown-trigger="click"
                            onClick={handleDropdownClickGender}
                        >
                            GENDER
                            <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div className={`absolute z-10 ${isDropdownVisibleGender ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`} id="dropdownHover">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">MALE</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">FEMALE</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">YOUTH</a>
                            </li>
                           
                            </ul>
                        </div>

                        {/* bt 2 */}
                        
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center w-[80%] p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-cyan-800"
                            id="dropdownHoverButton"
                            data-dropdown-toggle="dropdownHover"
                            data-dropdown-trigger="click"
                            onClick={handleDropdownClickPrice}
                        >
                            PRICE
                            <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div className={`absolute z-10 ${isDropdownVisiblePrice ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`} id="dropdownHover">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">100 - 500</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">501 - 1000</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1001 - 2000</a>
                            </li>
                           
                            </ul>
                        </div>
                        {/* bt 3 */}
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center w-[80%] p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-cyan-800"
                            id="dropdownHoverButton"
                            data-dropdown-toggle="dropdownHover"
                            data-dropdown-trigger="click"
                            onClick={handleDropdownClickSize}
                        >
                            Size
                            <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div className={`absolute z-10 ${isDropdownVisibleSize ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`} id="dropdownHover">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">5</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">6</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">7</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">8</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">9</a>
                            </li>
                            </ul>
                        </div>
                      
                        </div>
                    </div>
                </div>
                <div className='w-full border'>
                    <div className='border w-[30%]'>
                    {/* <ul>
                        {filterProducts(products, selectedFilter).map(product => (
                        <li key={product.id}>
                            {product.name}
                        </li>
                        ))}
                    </ul> */}
                        <div className='p-10'>
                            {/* name */}
                            <h3>Nike</h3>
                            {/* gender */}
                            <p>Youth</p>
                            {/* image */}
                            <img src={wave} className=""/>
                            <div className='flex justify-between'>
                                <div >
                                    <h3>Sizes</h3>
                                    <p>6,7,9,</p>
                                </div>
                                <h3>$110</h3>    
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
           </div>
        </>
    )
}

export default Shop
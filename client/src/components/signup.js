import React from "react";
import Logo from '../Assets/sneakers/logo2.png'
import login from '../Assets/Droplist.png'


const SignUp = () => {
    return(
        <>
            <div className="w-full h-[100%] flex justify-center items-center">
                <div className="border border-blue-200 bg-slate-40 border-solid bg-opacity-25 backdrop-filter flex backdrop-blur-lg p-6 rounded-lg shadow-lg w-[80%] h-[80%]">
                    {/* div1 */}
                    <div className="w-[70%]">
                        <div className="flex ">
                            <img src={Logo} className="h-20 mx-auto" alt="Stopmd Logo" />
                        </div>
                        <div className=" items-center h-[70%] mx-auto w-[70%] ">
                            <form>
                            <div className="w-full p-3">
                                    <div className="text-sm font-bold tracking-wide">Username:</div>
                                    <input placeholder="username" className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"/>
                                </div>
                                <div className="w-full p-3">
                                    <div className="text-sm font-bold tracking-wide">Email Address:</div>
                                    <input placeholder="jd@gmail.com" className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"/>
                                </div>
                                <div>
                                    <div className="flex p-3 w-full justify-between items-center">
                                        <div className="text-sm font-bold tracking-wide">
                                            Password: 
                                        </div>
                                                                 
                                    </div>
                                <input type="password" placeholder="Password" className="w-full p-3 mx-auto text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"/>
                                </div>
                                <div>
                                    <div className="flex p-3 w-full justify-between items-center">
                                        <div className="text-sm font-bold tracking-wide">
                                            Confirm password: 
                                        </div>
                                                                       
                                    </div>
                                <input type="password" placeholder="Password" className="w-full p-3 mx-auto text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"/>
                                </div>
                                <div>
                                    <button className="bg-blue-400 mt-5 ml-[20%] text-gray-100 p-4 w-[50%] rounded-full tracking-wide font-semibold font-display focus:shadow-outline  hover:bg-blue-200 shadow-lg">Sign up</button>
                                </div>
                            </form>
                            <div class=" flex justify-center items-center mt-7 space-x-10">
    
                                <div class="google-blue text-gray-700 hover:text-black shadow font-bold text-sm py-3 px-4 rounded flex justify-start items-center cursor-pointer w-[20%]">
                                    <svg viewBox="0 0 24 24" class="fill-current mr-3 w-6 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/></svg>
                                    <span class="border-l border-blue-500 h-6 w-1 block"></span>
                                    <span class="pl-3">Google</span>
                                </div>
                                
                                <div class="bg-gray-900 text-gray-100 hover:text-white shadow font-bold text-sm py-3 px-4 rounded flex justify-start items-center cursor-pointer w-[20%]">
                                    <svg viewBox="0 0 24 24" class="fill-current mr-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                    <span class="border-l border-gray-800 h-6 w-1 block mr-1"></span>
                                    <span class="pl-3">Github</span>
                                </div>
                                
                                <div class="bg-indigo-600 text-gray-100 hover:text-white shadow text-sm font-bold py-3 px-4 rounded flex justify-start items-center cursor-pointer">
                                    <svg viewBox="0 0 24 24" class="fill-current mr-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg"><path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/></svg>
                                    <span class="border-l border-indigo-500 h-6 w-1 block mr-1"></span>
                                    <span class="pl-3">Facebook</span>
                                </div>
    
                                </div>
                        </div>
                    </div>
                    {/* form */}
                    <div className="w-[30%]">
                    <img src={login} className="mx-auto" alt="Stopmd Logo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;
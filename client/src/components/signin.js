import React from "react";
import Logo from '../Assets/sneakers/logo2.png'
import login from '../Assets/login.png'


const SignIn = () => {
    return(
        <>
            <div className="w-full h-[80%] flex justify-center items-center">
                <div className="border border-blue-200 bg-slate-40 border-solid bg-opacity-25 backdrop-filter flex backdrop-blur-lg p-6 rounded-lg shadow-lg w-[80%] h-[80%]">
                    {/* div1 */}
                    <div className="w-[50%]">
                        <div className="flex ">
                            <img src={Logo} className="h-20 mx-auto" alt="Stopmd Logo" />
                        </div>
                        <div className=" items-center h-[70%] mx-auto w-[70%] ">
                            <form>
                                <div className="w-full p-3">
                                    <div className="text-sm font-bold tracking-wide">Email Address:</div>
                                    <input placeholder="jd@gmail.com" className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"/>
                                </div>
                                <div>
                                <div className="flex p-3 w-full justify-between items-center">
                                    <div className="text-sm font-bold tracking-wide">
                                        Password:
                                    </div>
                                    <div>
                                        <a className="text-xs font-display font-semibold text-indigo-300 hover:text-indigo-600 cursor-pointer">Forgot password?</a>
                                    </div>                                
                                </div>
                                <input type="password" placeholder="Password" className="w-full p-3 mx-auto text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"/>
                                </div>
                                <div>
                                    <button className="bg-blue-400 mt-5 ml-[20%] text-gray-100 p-4 w-[50%] rounded-full tracking-wide font-semibold font-display focus:shadow-outline  hover:bg-blue-200 shadow-lg">Log In</button>
                                </div>
                            </form>
                            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                                Don't have an account ? <a className="cursor-pointer text-blue-400 hover:text-indigo-800">Sign up</a>
                            </div>
                        </div>
                    </div>
                    {/* form */}
                    <div className="w-[50%]">
                    <img src={login} className="mx-auto" alt="Stopmd Logo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;
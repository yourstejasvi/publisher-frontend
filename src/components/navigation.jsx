import React from 'react';
import Logo from "../Assets/logo.png";

const navigation = () => {
  return (
    <>
    <nav className='bg-teal-700 h-[80px] shadow-xl'>
        <img className="h-24 ml-5 cursor-pointer" src={Logo} alt="logo"></img>
        <a className='text-gray-50 font-Merriweather text-3xl tracking-widest italic cursor-pointer ml-[110px] relative top-[-70px]'>Publisher</a>
        
        <div className="flex flex-row relative left-[-30px] top-[-100px] justify-end">
            <a className='w-[110px] text-gray-50 font-medium cursor-pointer rounded-2xl text-center p-1 hover:bg-indigo-50 hover:text-teal-700'>EXPLORE</a>
            <a className='w-[110px] text-gray-50 font-medium cursor-pointer rounded-2xl text-center p-1 hover:bg-indigo-50 hover:text-teal-700'>PUBLISH</a>
            <a className='w-[110px] text-gray-50 font-medium cursor-pointer rounded-2xl text-center p-1 hover:bg-indigo-50 hover:text-teal-700'>MONETIZE</a>
            <a className='w-[110px] text-gray-50 font-medium cursor-pointer rounded-2xl text-center p-1 hover:bg-indigo-50 hover:text-teal-700'>ABOUT</a>
            <a className='w-[110px] text-gray-50 font-medium cursor-pointer rounded-2xl text-center p-1 hover:bg-indigo-50 hover:text-teal-700'>SIGNUP</a>
        </div>

    </nav>
    </>
  )
}

export default navigation
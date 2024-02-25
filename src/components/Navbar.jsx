import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='w-full bg-nav'>
            <div className='max-w-[1440px] py-6 px-20  text-brown bg-nav flex justify-between items-center h-24 mx-auto'>
                <h1 className=' text-3xl font-bold text-brown font-roboto'>Collers</h1>
                <ul className='gap-4 hidden md:flex'>
                    <li className='px-2 py-3 font-roboto font-semibold cursor-pointer'>Products</li>
                    <li className='px-2 py-3 font-roboto font-semibold cursor-pointer'>Solutions</li>
                    <li className='px-2 py-3 font-roboto font-semibold cursor-pointer'>Pricing</li>
                    <li className='px-2 py-3 font-roboto font-semibold cursor-pointer'>Resources</li>
                    <li className='px-2 py-3 font-roboto font-semibold cursor-pointer'>Log In</li>
                    <li className='px-7 py-3 font-roboto font-semibold bg-transparent hover:text-nav hover:bg-brown text-brown border-2 border-brown hover:border-transparent rounded-lg cursor-pointer'>Sign
                        up now
                    </li>
                </ul>
                <div onClick={handleNav} className='md:hidden cursor-pointer'>
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>
                <div
                    className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-2 bg-nav ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold text-brown font-roboto m-8'>Collers</h1>
                    <ul className='uppercase p-4'>
                        <li className='px-2 py-3 font-roboto font-semibold border-b-2'>Products</li>
                        <li className='px-2 py-3 font-roboto font-semibold border-b-2'>Solutions</li>
                        <li className='px-2 py-3 font-roboto font-semibold border-b-2'>Pricing</li>
                        <li className='px-2 py-3 font-roboto font-semibold border-b-2'>Resources</li>
                        <li className='px-2 py-3 font-roboto font-semibold border-b-2'>Log In</li>
                        <li className='px-2 py-3 font-roboto font-semibold'>Sign up now</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
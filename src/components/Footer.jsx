import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import {
    AppStoreButton,
    GooglePlayButton,
} from "react-mobile-app-button";

const Footer = () => {
    const APKUrl =
        "https://play.google.com/store/apps/details?id=host.exp.exponent";
    const iOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
    return (
        <div className='w-full bg-tertiary'>
            <div className='max-w-[1440px] w-full mx-auto px-20 py-12 grid lg:grid-cols-4 gap-8 text-white'>
                <div
                    className='flex justify-between w-full mx-auto flex-col md:flex-row sm:flex-col items-center md:items-center sm:items-center'>
                    <div>
                        <p
                            className='flex gap-2 items-center cursor-pointer py-3'>
                            <p className='font-roboto text-white text-[16px] font-semibold'>Product</p>
                        </p>
                        <p
                            className='flex gap-2 items-center cursor-pointer py-3'>
                            <p className='font-roboto text-white text-[16px]'>Pricing</p>
                        </p>
                        <p
                            className='flex gap-2 items-center cursor-pointer py-3'>
                            <p className='font-roboto text-white text-[16px]'>Overview</p>
                        </p>
                        <p
                            className='flex gap-2 items-center cursor-pointer py-3'>
                            <p className='font-roboto text-white text-[16px]'>Browse</p>
                        </p>
                        <p
                            className='flex gap-2 items-center cursor-pointer py-3'>
                            <p className='font-roboto text-white text-[16px]'>Accessibility</p>
                        </p>
                        <p
                            className='flex gap-2 items-center cursor-pointer py-3'>
                            <p className='font-roboto text-white text-[16px]'>Five</p>
                        </p>
                    </div>
                </div>
                <div
                    className='flex justify-between w-full mx-auto flex-col md:flex-row sm:flex-col items-center md:items-center sm:items-center'>
                    <div>
                        <p
                            className='flex gap-2 items-center cursor-pointer py-3'>
                            <p className='font-roboto text-white text-[16px] font-semibold'>Solutions</p>
                        </p>
                        <p
                            className='flex gap-2 items-center cursor-pointer py-3'>
                            <p className='font-roboto text-white text-[16px]'>Brainstorming</p>
                        </p>
                        <p
                            className='flex gap-2 items-center cursor-pointer py-3'>
                            <p className='font-roboto text-white text-[16px]'>Ideation</p>
                        </p>
                        <p
                            className='flex gap-2 items-center cursor-pointer py-3'>
                            <p className='font-roboto text-white text-[16px]'>Wireframing</p>
                        </p>
                        <p
                            className='flex gap-2 items-center cursor-pointer py-3'>
                            <p className='font-roboto text-white text-[16px]'>Research</p>
                        </p>
                        <p
                            className='flex gap-2 items-center cursor-pointer py-3'>
                            <p className='font-roboto text-white text-[16px]'>Design</p>
                        </p>
                    </div>
                </div>
                <div
                    className='flex justify-between w-full mx-auto flex-col md:flex-row sm:flex-col items-center md:items-center sm:items-center'>
                    <div>
                        <p
                            className='flex gap-2 items-center cursor-pointer py-3'>
                            <p className='font-roboto text-white text-[16px] font-semibold'>Support</p>
                        </p>
                        <p
                            className='flex gap-2 items-center cursor-pointer py-3'>
                            <p className='font-roboto text-white text-[16px]'>Contact Us</p>
                        </p>
                        <p
                            className='flex gap-2 items-center cursor-pointer py-3'>
                            <p className='font-roboto text-white text-[16px]'>Developers</p>
                        </p>
                        <p
                            className='flex gap-2 items-center cursor-pointer py-3'>
                            <p className='font-roboto text-white text-[16px]'>Documentation</p>
                        </p>
                        <p
                            className='flex gap-2 items-center cursor-pointer py-3'>
                            <p className='font-roboto text-white text-[16px]'>Integrations</p>
                        </p>
                        <p
                            className='flex gap-2 items-center cursor-pointer py-3'>
                            <p className='font-roboto text-white text-[16px]'>Reports</p>
                        </p>
                    </div>
                </div>
                <div className='justify-between w-full mx-auto flex-col md:flex-col sm:flex-col'>
                    <div>
                        <p className='flex gap-2 items-center py-3'>
                            <p className='font-roboto text-white text-[16px] font-semibold'>Get the App</p>
                        </p>
                        <div className='flex flex-col gap-4'>
                            <AppStoreButton
                                url={APKUrl}
                                theme={"dark"}
                                className={"border-1 border-white"}
                            />
                            <GooglePlayButton
                                url={iOSUrl}
                                theme={"dark"}
                                className={"border-1 border-white"}
                            />
                        </div>
                    </div>
                    <div>
                        <p
                            className='flex gap-2 items-center pt-10 pb-3'>
                            <p className='font-roboto text-white text-[16px] font-semibold'>Follow Us</p>
                        </p>
                        <div className='flex justify-between md:w-[75%] my-3'>
                            <FaYoutube className='cursor-pointer' size='24'/>
                            <FaFacebookF className='cursor-pointer' size='24'/>
                            <FaTwitter className='cursor-pointer' size='24'/>
                            <FaInstagram className='cursor-pointer' size='24'/>
                            <FaLinkedinIn className='cursor-pointer' size='24'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1440px] mx-auto bg-tertiary lg:px-20 flex flex-col'>
                <div
                    className='border-t-[1px] border-[#334155] w-full text-white mx-auto flex flex-col sm:flex-col md:flex-row justify-between items-center sm:text-center'>
                    <p className='font-roboto text-white text-[16px] py-4'>
                        Collers @ 2023. All rights reserved.
                    </p>
                    <div className='flex justify-between gap-8 my-3'>
                        <div>
                            <p className='flex items-center font-roboto text-white  cursor-pointer text-[16px] py-3'>Terms</p>
                        </div>
                        <div>
                            <p className='flex items-center font-roboto text-white  cursor-pointer text-[16px] py-3'>Privacy</p>
                        </div>
                        <div>
                            <p className='flex items-center font-roboto text-white  cursor-pointer text-[16px] py-3'>Content</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <TbWorld size='24'/>
                            <p className='flex items-center font-roboto text-white  cursor-pointer text-[16px]'>EN</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
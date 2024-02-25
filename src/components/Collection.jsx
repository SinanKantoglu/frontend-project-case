import React from "react";
import { IoSearch } from "react-icons/io5";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { LuShieldCheck } from "react-icons/lu";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { HiDesktopComputer } from "react-icons/hi";
import { BiPodcast } from "react-icons/bi";
import { VscSettings } from "react-icons/vsc";
import Colleciton from "../assets/collection.png";
const Collection = () => {
    return(
        <div className='w-full bg-nav'>
            <div className='max-w-[1440px] mx-auto bg-nav p-4 sm:p-4 md:p-4 lg:p-20 flex flex-col gap-8'>
                <div
                    className='max-w-[1280px] w-full text-tertiary mx-auto flex flex-col sm:flex-col md:flex-row justify-between items-center sm:text-center'>
                    <p className='font-roboto font-[799] text-[32px] md:text-[56px]'>
                        Grow your collection
                    </p>
                </div>
                <div>
                    <p className='max-w-[1280px] font-roboto text-tertiary text-[18px]'>
                        Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque
                        sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                    </p>
                    <p className='max-w-[1280px] font-roboto text-tertiary text-[18px]'>
                        Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam
                        tellus.
                    </p>
                </div>
                <div className='flex justify-between gap-20 w-full mx-auto flex-col md:flex-row sm:flex-col'>
                    <div className='space-y-2'>
                        <button
                            className=' flex gap-2 items-center cursor-pointer text-tertiary bg-white rounded-lg p-4 shadow-lg'>
                            <IoSearch color='tertiary' size='24'/>
                            <p className='font-roboto text-tertiary text-[20px]'>Bibendum tellus</p>
                            <HiMiniArrowSmallRight color='tertiary' size='24'/>
                        </button>
                        <button
                            className='flex gap-2 items-center cursor-pointer hover:text-tertiary hover:bg-white hover:rounded-lg p-4 hover:shadow-lg'>
                            <LuShieldCheck color='tertiary' size='24'/>
                            <p className='font-roboto text-tertiary text-[20px]'>Cras eget</p>
                        </button>
                        <button
                            className='flex gap-2 items-center cursor-pointer hover:text-tertiary hover:bg-white hover:rounded-lg p-4 hover:shadow-lg'>
                            <MdOutlineRocketLaunch color='tertiary' size='24'/>
                            <p className='font-roboto text-tertiary text-[20px]'>Dolor pharetra</p>
                        </button>
                        <button
                            className='flex gap-2 items-center cursor-pointer hover:text-tertiary hover:bg-white hover:rounded-lg p-4 hover:shadow-lg'>
                            <HiDesktopComputer color='tertiary' size='24'/>
                            <p className='font-roboto text-tertiary text-[20px]'>Amet, fringilla</p>
                        </button>
                        <button
                            className='flex gap-2 items-center cursor-pointer hover:text-tertiary hover:bg-white hover:rounded-lg p-4 hover:shadow-lg'>
                            <BiPodcast color='tertiary' size='24'/>
                            <p className='font-roboto text-tertiary text-[20px]'>Amet nibh</p>
                        </button>
                        <button
                            className='flex gap-2 items-center cursor-pointer hover:text-tertiary hover:bg-white hover:rounded-lg p-4 hover:shadow-lg'>
                            <VscSettings color='tertiary' size='24'/>
                            <p className='font-roboto text-tertiary text-[20px]'>Sed velit</p>
                        </button>
                    </div>
                    <div>
                        <img src={Colleciton} alt='/'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection
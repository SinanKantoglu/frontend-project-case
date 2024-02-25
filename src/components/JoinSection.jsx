import React from "react";
import { MdDone } from "react-icons/md";
import Run from "../assets/run.png";
import { TbPointFilled } from "react-icons/tb";
const JoinSection = () => {
    return(
        <div className='w-full bg-nav'>
            <div className='max-w-[1440px] mx-auto bg-nav flex py-40 px-20'>
                <div className='md:p-20 bg-white rounded-[30px] w-full mx-auto flex flex-col sm:flex-col gap-y-6 md:flex-row gap-20'>
                    <div className='w-full flex flex-col md:flex-col sm:flex-col gap-y-6'>
                            <p className='font-roboto font-[799] text-[32px] md:text-[56px]'>
                                Why join us
                            </p>
                        <div>
                            <div className='flex gap-3'>
                                <MdDone color='green' size='24'/>
                                <p className='font-roboto text-tertiary text-[20px]'>Est et in pharetra magna adipiscing
                                    ornare aliquam.</p>
                            </div>
                            <div className='flex gap-2'>
                                <MdDone color='green' size='24'/>
                                <p className='font-roboto text-tertiary text-[20px]'>Tellus arcu sed consequat ac velit
                                    ut
                                    eu blandit.</p>
                            </div>
                            <div className='flex gap-2'>
                                <MdDone color='green' size='24'/>
                                <p className='font-roboto text-tertiary text-[20px]'>Ullamcorper ornare in et egestas
                                    dolor
                                    orci.</p>
                            </div>
                        </div>
                        <div className='items-center sm:items-center md:items-start'>
                            <button
                                className='font-roboto font-bold w-[179px] bg-transparent hover:text-nav hover:bg-brown text-brown border-2 border-brown hover:border-transparent rounded-lg py-4 md:p-4 sm:p-4'>
                                Sign up now
                            </button>
                        </div>
                    </div>
                <div className='w-full shadow-2xl rounded-[20px] p-2 hover:scale-105 duration-300'>
                    <div className='flex py-2 px-2'>
                        <TbPointFilled color='red' size={24}/>
                        <TbPointFilled color='orange' size={24}/>
                        <TbPointFilled color='green' size={24}/>
                    </div>
                    <img
                        className='w-full h-[309px] rounded-b-[20px] cursor-pointer'
                        src={Run}
                        alt='/'/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default JoinSection
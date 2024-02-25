import React from "react";
import One from "../assets/one.png";
import Two from "../assets/two.png";
import Three from "../assets/three.png";
const Categories = () => {
    return (
        <div className='w-full bg-tertiary'>
            <div className=' text-white max-w-[1280px] mx-auto py-20 flex flex-col sm:flex-col md:flex-row justify-between items-center gap-y-8 sm:text-center'>
                <p className='font-roboto font-[799] text-[32px] md:text-[56px]'>The best of the best</p>
                <button className='font-roboto font-bold w-[233px] bg-transparent hover:text-tertiary hover:bg-white text-white border-2 border-white hover:border-transparent rounded-lg py-4'>
                    Sign up now
                </button>
            </div>
            <div className='w-full max-w-[1440px] mx-auto bg-tertiary flex gap-12'>
                <div className='w-full max-w-[1280px] mx-auto flex flex-col sm:flex-col md:flex-col lg:flex-row gap-8'>
                    <div className='pb-20 md:mx-auto md:grid-cols-3 mx-4'>
                        <div className='w-full flex flex-col my-4 rounded-lg hover:scale-105 duration-300 space-y-6 border-tertiary shadow-lg shadow-white'>
                            <img
                                className='w-full h-[220px] rounded-t-lg'
                                src={One}
                                alt='/'/>
                            <p className='pl-8 text-white font-roboto text-2xl font-semibold'>Title</p>
                            <p className='pl-8 text-white font-roboto text-lg'>Egestas elit dui scelerisque ut eu purus
                                aliquam vitae habitasse.</p>
                            <div className='items-center text-center pb-8'>
                                <button
                                    className='font-roboto font-semibold text-xl w-[330.67px] bg-transparent hover:text-tertiary hover:bg-white text-white border-2 border-white hover:border-transparent rounded-lg py-4'>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='pb-20 md:mx-auto md:grid-cols-3 mx-4'>
                        <div className='w-full flex flex-col my-4 rounded-lg hover:scale-105 duration-300 space-y-6 border-tertiary shadow-lg shadow-white'>
                            <img
                                className='w-full h-[220px] rounded-t-lg'
                                src={Two}
                                alt='/'/>
                            <p className='pl-8 text-white font-roboto text-2xl font-semibold'>Title</p>
                            <p className='pl-8 text-white font-roboto text-lg'>Egestas elit dui scelerisque ut eu purus
                                aliquam vitae habitasse.</p>
                            <div className='items-center text-center pb-8'>
                                <button
                                    className='font-roboto font-semibold text-xl w-[330.67px] bg-transparent hover:text-tertiary hover:bg-white text-white border-2 border-white hover:border-transparent rounded-lg py-4'>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='pb-20 md:mx-auto md:grid-cols-3 mx-4'>
                        <div className='w-full flex flex-col my-4 rounded-lg hover:scale-105 duration-300 space-y-6 border-tertiary shadow-lg shadow-white'>
                            <img
                                className='w-full h-[220px] rounded-t-lg'
                                src={Three}
                                alt='/'/>
                            <p className='pl-8 text-white font-roboto text-2xl font-semibold'>Title</p>
                            <p className='pl-8 text-white font-roboto text-lg'>Egestas elit dui scelerisque ut eu purus
                                aliquam vitae habitasse.</p>
                            <div className='items-center text-center pb-8'>
                                <button
                                    className='font-roboto font-semibold text-xl w-[330.67px] bg-transparent hover:text-tertiary hover:bg-white text-white border-2 border-white hover:border-transparent rounded-lg py-4'>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
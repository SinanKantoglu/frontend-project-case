import React from 'react'
import { AiOutlinePlayCircle } from "react-icons/ai";
import { ReactTyped } from "react-typed";
import Sneaker from "../assets/sneaker.png"
const HeroSection = () => {
    return (
        <div className='w-full bg-nav'>
            <div className='max-w-[1440px] mx-auto bg-nav p-20'>
                <div className='mx-auto flex flex-col sm:flex-col md:flex-row gap-x-20'>
                    <div className='max-w-[714px] w-full flex flex-col justify-center gap-y-12 pb-8'>
                        <p className='font-roboto text-tertiary font-[799] text-[56px] md:text-7xl sm:text-7xl'>
                            Collectible Sneakers
                        </p>
                        <p className='font-roboto text-tertiary text-lg'>
                            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem
                            mauris.
                            Pharetra, eu imperdiet ipsum ultrices amet.
                        </p>
                        <div className='text-brown flex justify-start items-center gap-x-4'>
                            <button
                                className='font-roboto font-bold w-[179px] bg-transparent hover:text-nav hover:bg-brown text-brown border-2 border-brown hover:border-transparent rounded-lg py-4'>
                                Sign up now
                            </button>
                            <div className='font-roboto flex cursor-pointer items-center py-3'>
                                <AiOutlinePlayCircle size='24'/>
                                <ReactTyped className='font-bold pl-2 md:text-base sm:text-base text-base'
                                            strings={['Watch Demo', 'Watch Demo']} typeSpeed={50} backSpeed={40} loop/>
                            </div>
                        </div>
                    </div>
                    <div className='relative overflow-hidden flex justify-center items-center pt-10 h-full'>
                        <div>
                            <img
                                className='w-full'
                                src={Sneaker}
                                alt='/'/>
                        </div>
                    </div>
                </div>
                <ul className='md:flex pt-20 gap-x-20'>
                    <li className='space-y-4'>
                        <svg width="64" height="64" viewBox="0 0 78 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M53.1254 34.6737C49.1358 40.2349 40.8642 40.2349 36.8746 34.6737L23.3557 15.8291C18.609 9.2125 23.3379 -1.90735e-06 31.481 -1.90735e-06L58.519 -1.90735e-06C66.6621 -1.90735e-06 71.391 9.21248 66.6444 15.8291L53.1254 34.6737Z" fill="#0369A1"/>
                            <path d="M16 51.2158L18.2658 48.8879C21.4052 45.6624 26.5866 45.6608 29.728 48.8844L32 51.2158" stroke="#78350F" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
                            <line x1="15" y1="52.25" x2="33" y2="52.25" stroke="#78350F" stroke-width="1.5"/>
                            <path d="M37.304 12.1C37.2742 12.2855 37.2395 12.4988 37.1999 12.7378C37.0415 13.694 36.805 15.0611 36.4932 16.7022C35.8691 19.9859 34.9447 24.3584 33.7419 28.7259C32.5366 33.1026 31.0626 37.4336 29.3502 40.6558C28.4933 42.2683 27.5967 43.5643 26.6744 44.4481C25.7533 45.3308 24.8642 45.75 24 45.75H23.9999H23.9715H23.9542H23.9476H23.9431H23.9147H23.8959H23.8914H23.8864H23.8581H23.8448H23.8299H23.828H23.8017H23.7943H23.7736H23.7638H23.7455H23.7446H23.7175H23.6989H23.6954H23.6895H23.6617H23.647H23.6339H23.6333H23.6061H23.5991H23.5785H23.567H23.5519H23.5509H23.5234H23.5054H23.5C21.0583 45.75 18.9703 43.8857 17.1969 40.6476C15.4433 37.4455 14.1335 33.1336 13.1699 28.7635C12.2089 24.4046 11.6031 20.0392 11.2376 16.7591C11.055 15.1203 10.9326 13.755 10.856 12.8003C10.8346 12.5339 10.8168 12.2994 10.8022 12.1H37.304Z" stroke="#78350F" stroke-width="1.5"/>
                            <path d="M10.8246 12.2772C10.8246 12.2772 5.77539 10 4.51308 10C3.25077 10 1.98848 10.9109 1.98848 10.9109C0.557286 13.0206 0.788803 16.5785 1.98848 19.1087C10.4038 30.0391 13.6297 30.95 13.77 30.95" stroke="#78350F" stroke-width="1.5"/>
                            <path d="M35.9454 12.2772C35.9454 12.2772 40.9946 10 42.2569 10C43.5192 10 44.7815 10.9109 44.7815 10.9109C46.2127 13.0206 45.9812 16.5785 44.7815 19.1087C36.3662 30.0391 33.1403 30.95 33 30.95" stroke="#78350F" stroke-width="1.5"/>
                        </svg>

                        <p className='font-roboto text-tertiary text-xl font-semibold'>Nibh viverra</p>
                        <p className='font-roboto text-tertiary text-lg'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
                    </li>
                    <li className='space-y-4'>
                        <svg width="64" height="64" viewBox="0 0 77 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M48.543 46.7428C48.543 52.2656 44.0658 56.7428 38.543 56.7428L24.5631 56.7428C16.2208 56.7428 11.546 47.13 16.6972 40.568L30.6771 22.7592C36.5425 15.2873 48.543 19.4349 48.543 28.9339L48.543 46.7428Z" fill="#15803D"/>
                            <path d="M20 29.75H22.67C33.3015 29.75 41.92 38.3685 41.92 49V70.92H0.75V49C0.75 38.3685 9.36852 29.75 20 29.75Z" stroke="#78350F" stroke-width="1.5"/>
                            <line x1="41.7893" y1="69.7198" x2="0.789328" y2="57.7198" stroke="#78350F" stroke-width="1.5"/>
                            <path d="M12 38V40.67" stroke="#78350F" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M21 41V43.67" stroke="#78350F" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M30 44V46.67" stroke="#78350F" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>

                        <p className='font-roboto text-tertiary text-xl font-semibold'>Cursus amet</p>
                        <p className='font-roboto text-tertiary text-lg'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
                    </li>
                    <li className='space-y-4'>
                        <svg width="64" height="64" viewBox="0 0 81 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.75" y="15.75" width="51.83" height="38.5" rx="4.25" stroke="#78350F"
                                  stroke-width="1.5"/>
                            <path d="M18 3.4248L27.0229 12.4697" stroke="#78350F" stroke-width="1.5"
                                  stroke-linecap="round"/>
                            <path d="M18 3.4248L27.0229 12.4697" stroke="#78350F" stroke-width="1.5"
                                  stroke-linecap="round"/>
                            <path
                                d="M35.94 2.46903C36.2325 2.17578 36.7068 2.17578 36.9994 2.46903C37.2919 2.76228 37.2919 3.23772 36.9994 3.53097L35.94 2.46903ZM27.9764 12.5758L27.4467 13.1068L26.3873 12.0449L26.917 11.5139L27.9764 12.5758ZM36.9994 3.53097L27.9764 12.5758L26.917 11.5139L35.94 2.46903L36.9994 3.53097Z"
                                fill="#78350F"/>
                            <circle cx="58.5" cy="22.5" r="22.5" fill="#A21CAF" fill-opacity="0.5"/>
                        </svg>
                        <p className='font-roboto text-tertiary text-xl font-semibold'>Ipsum fermentum</p>
                        <p className='font-roboto text-tertiary text-lg'>Sit bibendum donec dolor fames neque vulputate
                            non sit aliquam. Consequat turpis natoque leo, massa.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default HeroSection
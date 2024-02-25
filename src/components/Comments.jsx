import React, {useEffect, useState} from "react";
import Slider from "react-slick"
import Banners from "../api/banners.json"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Comments = () => {

    function NextBtn({className, style, onClick }) {
        return(
            <button className='text-brown absolute top-1/2 -right-10 -translate-y-1/2' onClick={onClick}>
                <IoArrowForwardCircleOutline size={48}/>
            </button>
        )
    }
    function PrevBtn({className, style, onClick }) {
        return(
            <button className='text-brown absolute top-1/2 -left-10 -translate-y-1/2' onClick={onClick}>
                <IoArrowBackCircleOutline size={48}/>
            </button>
        )
    }

    const [banners, setBanners] = useState([]);

    useEffect(() => {
        setBanners(Banners);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrow: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "linear",
        nextArrow: <NextBtn/>,
        prevArrow: <PrevBtn/>
    }

    return(
        <div className='w-full bg-nav'>
            <div className='w-full bg-nav'>
                <div
                    className='text-tewrtiary max-w-[1440px] mx-auto px-20 pb-20 flex flex-col sm:flex-col md:flex-row justify-between items-center gap-y-8 sm:text-center'>
                    <p className='font-roboto font-[799] text-[32px] md:text-[56px]'>
                        Because they love us
                    </p>
                </div>
                <div className='max-w-[1300px] container mx-auto bg-yellow pt-4 px-10'>
                    <Slider {...settings}>
                        {banners.length && banners.map((banner, index) => (
                            <div key={banner.id}>
                                <img className='hover:scale-105 duration-300 pt-2' src={banner.image} alt="/"/>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Comments
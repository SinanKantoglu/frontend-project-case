import React from "react";
import NotAbsolute from "../assets/notabsolute.png";
const Map = () => {
    return(
        <div className='w-full bg-brown'>
            <div className='max-w-[1440px] mx-auto'>
                <img
                    className='w-full'
                    src={NotAbsolute}
                    alt='/'/>
            </div>
        </div>
    )
}

export default Map
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className='min-h-[80vh] flex flex-col gap-8 items-center justify-center'>
            <div className="text-center flex flex-col gap-1">
                <h1 className='text-[72px] font-bold leading-[80px] font-Lato'>CONNERCTING DREAMS TO REALITY</h1>
                <h1 className='text-[72px] font-bold italic leading-[80px] text-[#2C8FB5] font-Lato'>OUR PREMIER</h1>
                <h1 className='text-[72px] font-bold leading-[80px] font-Lato'>REAL ESTATE MARKERPLACE</h1>
            </div>
            <div className="text-[1.3rem] co">Where every search ends with a home</div>
            <div className="flex gap-10 items-center">
                <button className='border border-gray-800 px-[1.5rem] py-[0.6rem] rounded-full bg-[#1E90FF] text-white font-semibold text-lg flex items-center gap-3'>Find Your House <FaArrowRight /> </button>
                <button className='border border-gray-800 px-[1.5rem] py-[0.6rem] rounded-full bg-[#1E90FF] text-white font-semibold text-lg flex items-center gap-3'>List Your Property <FaArrowRight /></button>
            </div>
        </div>
    )
}

export default Hero

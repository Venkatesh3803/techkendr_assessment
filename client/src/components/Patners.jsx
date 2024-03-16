import React from 'react'
import img from "../assets/image 203.jpg";
import { FaArrowRight } from "react-icons/fa6";

const Partners = () => {
    return (
        <div className='w-full h-[1086px] mt-[3rem] bg-slate-100'>
            <div className="h-[235px] bg-[#95c4d5]  w-full">
                <div className="w-[971px] m-auto h-[334px] flex flex-col gap-[20px] pt-[100px] items-center">
                    <h1 className='font-Lato text-[72px] leading-[80px] font-bold text-[#071A45] text-center z-20'>YOUR <span className='italic font-semibold'>TRUSTED</span> PARTNER IN
                        THE FUTURE<span className='italic font-semibold'> OF HOUSING</span> </h1>
                    <p className='font-Lato text-[20px] leading-[36px] font-normal text-[#071A45] text-center  z-20'>Our partnerships with governments and local banks ensure that our housing prices are affordable enough for our target market.</p>
                    <button className='font-Lato text-[1rem] p-[16px] font-normal text-white text-center bg-[#3A7DFF] z-10 rounded-full w-fit flex items-center gap-3'>Join Our Community Today <FaArrowRight /></button>
                </div>
            </div>

            <img className='w-full h-[862px] object-cover' src={img} alt="" />
        </div>
    )
}

export default Partners

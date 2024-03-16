import React from 'react'
import img1 from "../assets/image 199.png"
import img2 from "../assets/image 200.png"
import img3 from "../assets/image 201.png"
import img4 from "../assets/image 202.png"

const HowItWork = () => {
    return (
        <div className='w-[85%] m-auto flex flex-col gap-[90px] mt-[4rem] mb-[4rem]'>
            <div className="flex flex-col gap-5 text-center">
            <h1 className='font-Lato text-[72px] leading-[86.4px] font-extrabold text-[#071A45] text-center pt-[80px]'>HOW IT WORKS</h1>
                <p className=''>Step by Step Guide</p>
            </div>

            <div className="flex gap-[80px] w-[1000px] h-[320px] items-center place-self-start">
                <img className='h-[320px] w-[320px] rounded-[40px]' src={img1} alt="" />
                <div className="flex flex-col gap-[16px] justify-center ">
                    <h1 className='text-[47px] font-semibold font-Lato leading-[57.3px]'>Discover Your Perfect Home</h1>
                    <p className='text-[20px] font-normal font-Lato leading-[24px]'>Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right.</p>
                    <span className='text-[20px] font-normal font-Lato leading-[24px] underline'>Learn More</span>
                </div>
            </div>
            <div className="flex gap-[80px] w-[1000px] h-[320px] items-center place-self-end">
                <img className='h-[320px] w-[320px] rounded-[40px]' src={img2} alt="" />

                <div className="flex flex-col gap-[16px] justify-center ">
                    <h1 className='text-[47px] font-semibold font-Lato leading-[57.3px]'>Discover Your Perfect Home</h1>
                    <p className='text-[20px] font-normal font-Lato leading-[24px]'>Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right.</p>
                    <span className='text-[20px] font-normal font-Lato leading-[24px] underline'>Learn More</span>
                </div>
            </div>
            <div className="flex gap-[80px] w-[1000px] h-[320px] items-center place-self-start">
                <img className='h-[320px] w-[320px] rounded-[40px]' src={img3} alt="" />

                <div className="flex flex-col gap-[16px] justify-center ">
                    <h1 className='text-[47px] font-semibold font-Lato leading-[57.3px]'>Discover Your Perfect Home</h1>
                    <p className='text-[20px] font-normal font-Lato leading-[24px]'>Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right.</p>
                    <span className='text-[20px] font-normal font-Lato leading-[24px] underline'>Learn More</span>
                </div>
            </div>
            <div className="flex gap-[80px] w-[1000px] h-[320px] items-center place-self-end">
                <img className='h-[320px] w-[320px] rounded-[40px]' src={img4} alt="" />

                <div className="flex flex-col gap-[16px] justify-center ">
                    <h1 className='text-[47px] font-semibold font-Lato leading-[57.3px]'>Discover Your Perfect Home</h1>
                    <p className='text-[20px] font-normal font-Lato leading-[24px]'>Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right.</p>
                    <span className='text-[20px] font-normal font-Lato leading-[24px] underline'>Learn More</span>
                </div>
            </div>

        </div>
    )
}

export default HowItWork
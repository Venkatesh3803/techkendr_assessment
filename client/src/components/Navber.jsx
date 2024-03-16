import React from 'react'

const Navber = () => {
    return (
        <div className='w-fullitems-center justify-between p-[1rem] sticky top-0 z-50 bg-white'>
            <div className="w-[95%] m-auto flex items-center justify-between">

                <h3 className="text-[2rem] font-thin cursor-pointer italic font-Lato"><span className='font-bold '>XYZ</span> Industry</h3>
                <div className="bg-blue-950 text-gray-300 rounded-full">
                    <ul className='flex gap-2 items-center px-[1.5rem] py-[0.5rem]'>
                        {["Home", "About Us", "Property", "Services", "Contact"].map((i, index) => {
                            return (
                                <li key={index} className='text-lg px-3 py-1 cursor-pointer '>{i}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex gap-5">
                    <button className='border border-gray-600 rounded-full px-[1.5rem] py-[0.5rem] '>Sign Up</button>
                    <button className='border border-gray-600 rounded-full px-[1.5rem] py-[0.5rem] bg-[#3A7DFF] text-white'>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Navber

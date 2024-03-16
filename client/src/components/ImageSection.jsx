import React from 'react'
import image from "../assets/images.png"

const ImageSection = () => {
    return (
        <div className='h-[815px] w-full relative'>
            <div className=" bg-gray-200 rounded-tr-[100px] rounded-tl-[100px] h-[70%] absolute bottom-0 w-full">
            
            </div>
                <img className='absolute top-0 left-0 w-[100%] object-cover' src={image} alt="" />
        </div>
    )
}

export default ImageSection
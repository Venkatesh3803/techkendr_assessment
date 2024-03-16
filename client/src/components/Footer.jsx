import React, { useState } from 'react'
import { FaArrowRight, FaYoutube } from "react-icons/fa6";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import axios from "axios"
import { toast } from 'react-toastify';
const Footer = () => {
    const [email, setEmail] = useState();


    // making request to backend server to send messages
    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5500/api/emailsend", email);
            if (res.data) {
                toast.success("Send Email")
            }
        } catch (error) {
            throw error
        }
    }
    return (
        <div className='w-full h-[496px] bg-[#071A45] p-[3rem] text-white'>
            <div className="w-[90%] m-auto flex">
                <div className=" flex-[1.5]">
                    <div className="w-[80%] flex flex-col gap-[20px]">
                        <h1 className='font-Lato text-[40px] font-semibold leading-[48px] mt-[40px]'>ZXY <span className='font-Lato text-[40px] font-light leading-[48px] italic'>INDUSTRY
                        </span></h1>
                        <div className="font-Lato text-[16px] font-normal leading-[20px] text-[#C9C6C2] w-[60%] ">XYZ Industries: Where real estate dreams meet seamless transactions, transforming aspirations into achievements.</div>
                        <button className='border border-gray-500 p-[16px] pr-[32px] rounded-full w-fit flex items-center gap-5'>EXPLORE <FaArrowRight /></button>
                    </div>
                </div>
                <div className="flex-[2] flex justify-between">
                    <div className="flex flex-col gap-[20px]">
                        <h2 className='font-semibold text-[20px] leading-[24px]'>Quick Links</h2>
                        <u l className='flex flex-col gap-[10px] text-[#C9C6C2] leading-[20px]'>
                            {["Abouts US", "Blogs", "Testimonials", "Terms and Conditions", "Privacy Policy", "Site Map"].map((l, index) => {
                                return (
                                    <li key={index}>{l}</li>
                                )
                            })}
                        </u>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <h2 className='font-semibold text-[20px] leading-[24px]'>Customer Support</h2>
                        <ul className='flex flex-col gap-[10px] text-[#C9C6C2] leading-[20px]'>
                            {["Feedback", "Report a Problem", "Request a Aall Back"].map((l, index) => {
                                return (
                                    <li key={index}>{l}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <h2 className='font-semibold text-[20px] leading-[24px]'>Subscribe Us</h2>
                        <ul className='flex flex-col gap-[10px] text-[#C9C6C2] leading-[20px]'>
                            <li>Subscribe us to Weetly newsletters</li>
                            <form action="" onSubmit={handleSubscribe}>
                                <input type="text" placeholder='Email id' className='px-[1rem] py-[0.5rem] rounded-sm text-black' onChange={(e) => setEmail(e.target.value)} />
                                <button type='submit' className='font-Lato p-[16px] font-normal text-white text-center bg-[#3A7DFF] rounded-lg w-full'>Subscribe</button>
                            </form>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='border border-gray-50 w-full mt-[50px]' />
            <div className="flex justify-between items-center mt-8">
                <div className="flex items-center gap-5 ">
                    <FaYoutube />
                    <FaInstagram />
                    <FaTwitter />
                    <FaFacebook />
                </div>
                <div className="flex gap-4 text-sm">
                    <p>Terms | Privacy</p>
                    <p>©2024XYZ</p>
                </div>
            </div>
        </div >
    )
}

export default Footer

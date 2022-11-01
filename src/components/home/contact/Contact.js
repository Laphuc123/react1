import React from 'react'
import img from "../../../images/customer-support.png";

export default function Contact() {
  return (
    <div className='w-[90%] mx-auto sm:w-[80%]'>
        <div className="mt-16">
            <div className="border border-[#F6F6F6] bg-[#F6F6F6] rounded-[20px] py-10">
                <div className="w-[80%] mx-auto">
                    <div className="sm:flex sm:justify-center sm:items-center">
                        <div className="sm:w-[50%] sm:text-left">
                            <img src={img} alt=""/>
                        </div>
                        <div className="sm:w-[50%] sm:text-right">
                            <div className="text-center sm:w-[80%] sm:text-left">
                                <p className="text-[32px] sm:text-[60px] sm:leading-[60px] font-[700] text-[#272D38] leading-[32px]">Be a part of the next big thing</p>
                            </div>
                            <div className="text-center sm:w-[80%] sm:text-left">
                                <p className="text-[20px] font-[300] text-[#272D38] mt-5">We work with Brans, Startups, to SMEs. Colaborate for more impact and growt</p>
                            </div>
                            <div className="text-center sm:text-left mt-5">
                                <button className="border border-[#8EADD5] font-[600] bg-[#8EADD5] hover:bg-white hover:text-[#8EADD5] text-white text-[17px] py-1 px-5 rounded-[8px] sm:py-2 sm:px-7">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import img from "../../../images/business-people-discussing-business-idea.png";
import Button from '../button/Button';

export default function Banner() {
  return (
    <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
        <div className="sm:flex justify-center items-start">
            <div className="sm:w-[54%] sm:text-left">
                <div className="text-center sm:text-left">
                    <h1 className="text-[40px] sm:text-[64px] font-[700] text-[#272D38] leading-[50px] sm:leading-[64px]">Building Digital Products, Brands & Experience</h1>
                </div>
                <div className="text-center sm:text-left mt-3 sm:mt-5">
                    <p className=" text-[16px] sm:text-[18px] font-[400] text-[#272D38]">Digital Agency is your online team mangement tool that easy and prompt</p>
                </div>
                <Button/>
            </div>
            <div className="my-20 sm:mt-0 sm:w-[55%] sm:text-right">
                <img className="w-full sm:w-[80%] sm:ml-auto" src={img} alt=""/>
            </div>
        </div>
    </div>
  )
}

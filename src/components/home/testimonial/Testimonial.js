import React from 'react'
import img1 from "../../../images/western-man-4975942-4159828 1.png";
import img2 from "../../../images/western-man-4975942-4159828 2.png";
import img3 from "../../../images/western-man-4975942-4159828 3.png";

export default function Testimonial() {
  return (
    <div className='w-[90%] mx-auto sm:w-[80%]'>
        <div className="mt-20">
            <div className="text-center">
                <p className="text-[12px] sm:text-[20px] font-[400] text-[#272D38]">TESTIMONIALS</p>
            </div>
            <div className="text-center mt-5">
                <p className="text-[32px] sm:text-[60px] font-[700] text-[#272D38]">Read What Other have to Say</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-8 gap-y-8 mt-5">
                <div className="border border-[#F6F6F6] bg-[#F6F6F6] rounded-[20px] py-5 sm:py-8">
                    <div className="w-[80%] mx-auto">
                        <div className="flex justify-center">
                            <img className=" rounded-full" src={img1} alt=""/>
                        </div>
                        <div className="flex justify-center">
                            <p className="text-[18px] font-[400] text-[#272D38]">Andrew Rathore</p>
                        </div>
                        <div className="text-center mt-8">
                            <p className="text-[14px] font-[300] text-[#272D38]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.</p>
                        </div>
                    </div>
                </div>
                <div className="border border-[#F6F6F6] bg-[#F6F6F6] rounded-[20px] py-5">
                    <div className="w-[80%] mx-auto">
                        <div className="flex justify-center">
                            <img className=" rounded-full" src={img2} alt=""/>
                        </div>
                        <div className="flex justify-center">
                            <p className="text-[18px] font-[400] text-[#272D38]">Vera Duncan</p>
                        </div>
                        <div className="text-center mt-8">
                            <p className="text-[14px] font-[300] text-[#272D38]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.</p>
                        </div>
                    </div>
                </div>
                <div className="border border-[#F6F6F6] bg-[#F6F6F6] rounded-[20px] py-5">
                    <div className="w-[80%] mx-auto">
                        <div className="flex justify-center">
                            <img className=" rounded-full" src={img3} alt=""/>
                        </div>
                        <div className="flex justify-center">
                            <p className="text-[18px] font-[400] text-[#272D38]">Mark Smith</p>
                        </div>
                        <div className="text-center mt-8">
                            <p className="text-[14px] font-[300] text-[#272D38]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import img from "../../../images/designer-team-working-on-creative-design.png";

export default function Branding() {
  return (
    <div className='w-[90%] mx-auto sm:w-[80%]'>
        <div className="mt-10 sm:w-full sm:my-20">
            <div className="sm:flex sm:flex-row-reverse justify-center items-center">
                <div className="sm:w-[50%] sm:text-left ">
                    <div className="text-center sm:text-left">
                        <p className="text-[32px] sm:text-[60px] sm:leading-[60px] font-[700] text-[#272D38]">Branding & Design system</p>
                    </div>
                    <div className="text-center sm:w-[64%] sm:text-left mt-5">
                        <p className="text-[14px] sm:text-[20px] font-[400] text-[#272D38] capitalize">Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</p>
                    </div>
                    <div className="flex justify-center sm:justify-start mt-5 mb-10 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block sm:hidden w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hidden sm:block w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>            
                    </div>
                </div>
                <div className="sm:w-[50%] sm:text-right">
                    <img className="w-full sm:w-[80%]" src={img} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

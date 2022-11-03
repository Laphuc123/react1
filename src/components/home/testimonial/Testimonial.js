import React, { useEffect, useState } from 'react'
import { getUser } from "../../../services/Users";
export default function Testimonial() {
    const [dataUser, setDataUser] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await getUser();
            setDataUser(data);
        };
        getData();
    },[setDataUser]);
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
                {
                    dataUser.map((data,index) => {
                    return (
                        <div className="border border-[#F6F6F6] bg-[#F6F6F6] rounded-[20px] py-5 sm:py-8" key={index}>
                            <div className="w-[80%] mx-auto">
                                <div className="flex justify-center">
                                    <img className=" rounded-full" src={data.user_urlAvatar} alt=""/>
                                </div>
                                <div className="flex justify-center">
                                    <p className="text-[18px] font-[400] text-[#272D38]">{data.user_name}</p>
                                </div>
                                <div className="text-center mt-8">
                                    <p className="text-[14px] font-[300] text-[#272D38]">{data.user_description}</p>
                                </div>
                            </div>
                        </div>
                    )
                    })
                }
            </div>
        </div>
    </div>
  )
}

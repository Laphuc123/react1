import React, { useEffect, useState } from 'react'
import { getContent } from "../../../services/Content";
import Icon from '../icon/Icon';

export default function Branding() {
    const [dataContent, setDataContent] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await getContent();
            setDataContent(data);
        };
        getData();
    },[setDataContent]);
  return (
    <div className='w-[90%] mx-auto sm:w-[80%]'>
        {
            dataContent.filter(data => data.id === 1).map((data,index) => {
                return (
                    <div className="mt-10 sm:w-full sm:my-20" key={index}>
                        <div className="sm:flex sm:flex-row-reverse justify-center items-center">
                            <div className="sm:w-[50%] sm:text-left ">
                                <div className="text-center sm:text-left">
                                    <p className="text-[32px] sm:text-[60px] sm:leading-[60px] font-[700] text-[#272D38]">{data.content_title}</p>
                                </div>
                                <div className="text-center sm:w-[64%] sm:text-left mt-5">
                                    <p className="text-[14px] sm:text-[20px] font-[400] text-[#272D38] capitalize">{data.content_shortContent}</p>
                                </div>
                                <Icon />
                            </div>
                            <div className="sm:w-[50%] sm:text-right">
                                <img className="w-full sm:w-[80%]" src={data.content_urlImage} alt=""/>
                            </div>
                        </div>
                    </div>          
                )
            })
        }
    </div>
  )
}

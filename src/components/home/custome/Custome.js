import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { getContent } from "../../../services/Content";
import Icon from '../icon/Icon';

export default function Custome() {
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
        {dataContent.filter(data => data.id === 2).map((data,index) => {
            return (
                <div className="mt-20" key={index}>
                    <div className="sm:flex sm:justify-between sm:items-center">
                        <div className="sm:w-[50%] sm:text-left">
                            <div className="text-center sm:w-[70%] sm:text-left">
                                <p className="text-[32px] sm:text-[60px] sm:leading-[60px] font-[700] text-[#272D38]">{data.content_title}</p>
                            </div>
                            <div className="text-center sm:w-[64%] sm:text-left mt-5">
                                <p className="text-[20px] font-[400] text-[#272D38] capitalize">{data.content_shortContent}</p>
                            </div>
                            <Icon/>
                        </div>
                        <div className="sm:w-[50%] sm:text-left">
                            <img className="w-full  sm:mr-auto" src={data.content_urlImage} alt=""/>
                        </div>
                    </div>
                </div>
            )
        })
        }
    </div>
  )
}

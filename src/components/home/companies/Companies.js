import React from 'react'
import img1 from '../../../images/Logos Container.png';



export default function Companies() {
  return (
    <div className='w-[90%] mx-auto sm:w-[80%]'>
        <div className='w-[70%] mx-auto'>
            <div class="text-center sm:mt-10">
                <p class="text-[#667085] text-[14px]">Trusted by 4,000+ companies</p>
            </div>
            <div className='mt-5'>
                <a><img src={img1} /></a>
            </div>
        </div>
    </div>
  )
}

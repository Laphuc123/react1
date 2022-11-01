import React, { useState } from 'react'
import './Menu.css';
import icon from '../../../images/menu.png';
import './Menu1';

export default function Menu() {
    const [checkMenu,SetCheckMenu] = useState(false)
    const menu = () => {
        SetCheckMenu(!checkMenu)
    }
  return (
    <div>
        <div className='block sm:hidden'>
            <ul className=''>
                <li className='inline-block'>
                <a  href="" className="icon" onClick={menu}><img src={icon} alt=""></img></a>
                    <div className={checkMenu === true ? "dropdown_content none" : "dropdown_content block"}>
                        <a>
                            <div>
                                <p className='text-[18px] fonr-[400] text-[#272D38] hover:text-[#8EADD5]'>home</p>
                            </div>
                        </a>
                        <hr></hr>
                        <a>
                            <div>
                                <p className='text-[18px] fonr-[400] text-[#272D38] hover:text-[#8EADD5]'>About</p>
                            </div>
                        </a>
                        <hr></hr>
                        <a>
                            <div>
                                <p className='text-[18px] fonr-[400] text-[#272D38] hover:text-[#8EADD5]'>Testimonials</p>
                            </div>
                        </a>
                        <hr></hr>
                        <a>
                            <div>
                                <p className='text-[18px] fonr-[400] text-[#272D38] hover:text-[#8EADD5]'>contact</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <div>
        <div class="hidden sm:block">
                <div class="flex justify-center items-center gap-x-10">
                    <div>
                        <a href="#"><p className="text-[18px] fonr-[400] text-[#272D38] hover:text-[#8EADD5]">home</p></a>
                    </div>
                    <div>
                        <a href="#"><p className="text-[18px] fonr-[400] text-[#272D38] hover:text-[#8EADD5]">About</p></a>
                    </div>
                    <div>
                        <a href="#"><p className="text-[18px] fonr-[400] text-[#272D38] hover:text-[#8EADD5]">Testimonials</p></a>
                    </div>
                    <div>
                        <a href="#"><p className="text-[18px] fonr-[400] text-[#272D38] hover:text-[#8EADD5]">contact</p></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

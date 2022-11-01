import React from 'react'
import logo from "../../../images/Digital Agency.png";
import menu from "../../../images/menu.png";
import Menu from '../nav/Menu';
import './Header.css';

export default function Header() {
  return (
    <div className='w-[90%] mx-auto sm:w-[80%]'>
      <div className="flex justify-between items-center mt-5 sm:mt-10">
            <div className="w-[50%] text-left">
                <img className="w-[70%] sm:w-[30%]" src={logo} alt=""/>
            </div>
            <Menu/>
        </div>
    </div>
  )
}

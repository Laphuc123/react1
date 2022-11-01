import React from 'react'

export default function Footer() {
  return (
    <div className=" bg-[#F6F6F6] mt-10">
        <div className="w-[90%] sm:w-[80%] mx-auto py-10">
            <div className="flex sm:justify-around sm:items-center flex-col sm:flex-row gap-y-14 sm:text-left text-center">
                <div className="sm:w-[20%] sm:mx-0 mx-auto w-[80%] flex flex-col gap-y-5">
                    <p className="text-[18px] text-[#272D38] font-[700]">Digital Agency</p>
                    <a href="#"><p className="text-[16px] text-[#272D38] font-[300] hover:text-[#8EADD5]">Building digital products, brands & experience</p></a>
                </div>
                <div className="flex flex-col gap-y-3">
                    <p className="text-[18px] text-[#272D38] font-[700]">Resources</p>
                    <a href="#"><p className="text-[16px] text-[#272D38] font-[300] hover:text-[#8EADD5]">Guides</p></a>
                    <a href="#"><p className="text-[16px] text-[#272D38] font-[300] hover:text-[#8EADD5]">Blog</p></a>
                    <a href="#"><p className="text-[16px] text-[#272D38] font-[300] hover:text-[#8EADD5]">Cuistomer Stories</p></a>
                    <a href="#"><p className="text-[16px] text-[#272D38] font-[300] hover:text-[#8EADD5]">Glossery</p></a>
                </div>
                <div className="flex flex-col gap-y-3">
                    <p className="text-[18px] text-[#272D38] font-[700]">Company</p>
                    <a href="#"><p className="text-[16px] text-[#272D38] font-[300] hover:text-[#8EADD5]">About Us</p></a>
                    <a href="#"><p className="text-[16px] text-[#272D38] font-[300] hover:text-[#8EADD5]">Careers</p></a>
                    <a href="#"><p className="text-[16px] text-[#272D38] font-[300] hover:text-[#8EADD5]">Partners</p></a>
                    <a href="#"><p className="text-[16px] text-[#272D38] font-[300] hover:text-[#8EADD5]">Contact Us</p></a>
                </div>
                <div className="flex flex-col gap-y-3">
                    <p className="text-[18px] text-[#272D38] font-[700]">Social Media</p>
                    <a href="#"><p className="text-[16px] text-[#272D38] font-[300] hover:text-[#8EADD5]">LinkedIn</p></a>
                    <a href="#"><p className="text-[16px] text-[#272D38] font-[300] hover:text-[#8EADD5]">Facebook</p></a>
                    <a href="#"><p className="text-[16px] text-[#272D38] font-[300] hover:text-[#8EADD5]">Instagram</p></a>
                    <a href="#"><p className="text-[16px] text-[#272D38] font-[300] hover:text-[#8EADD5]">Twitter</p></a>
                </div>
            </div>
            <div className="text-center mt-10">
                <p className="sm:text-[16px] text-[12px] text-[#272D38] font-[300]">© Matheus. Todos os direitos reservados</p>
            </div>
        </div>
    </div>
  )
}

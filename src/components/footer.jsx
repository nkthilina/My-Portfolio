import React from "react";
import { LuMail } from "react-icons/lu";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";

export default function footer() {
  return (
    <footer className="bg-[#12141e] pt-12 pb-10">
    {/* footer top */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful products?
            </h2>
            <a href="#contact">
              <button className="flex items-center bg-primaryColor text-white font-[500] gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                <LuMail className="mr-2" />
                Hire me
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              accusamus deleniti est tenetur ducimus quod!
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">Follow Me : </span>
              <span className="w-[35px] h-[35px] p-1 rounded-[50px] cursor-pointer text-center items-center">
                <a href="github" className="text-gray-300 font-[500] text-[18px]">
                <VscGithubInverted className="w-[30px] h-[30px]"/>
                </a>
              </span>
              <span className="w-[35px] h-[35px] p-1 rounded-[50px] cursor-pointer text-center items-center">
                <a href="github" className="text-gray-300 font-[500] text-[18px]">
                <FaLinkedin className="w-[32px] h-[32px]"/>
                </a>
              </span>
              <span className="w-[35px] h-[35px] p-1 rounded-[50px] cursor-pointer text-center items-center">
                <a href="github" className="text-gray-300 font-[500] text-[18px]">
                <BsFacebook className="w-[30px] h-[30px]"/>
                </a>
              </span>
              <span className="w-[35px] h-[35px] p-1 rounded-[50px] cursor-pointer text-center items-center">
                <a href="github" className="text-gray-300 font-[500] text-[18px]">
                <FaSquareInstagram className="w-[34px] h-[34px]"/>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div>
              <ul className='flex items-center justify-center gap-10 mt-10'>
                <li className='text-gray-400 font-[600]'><a href="#about">About</a></li>
                <li className='text-gray-400 font-[600]'><a href="#service">Service</a></li>
                <li className='text-gray-400 font-[600]'><a href="#portfolio">Portfolio</a></li>
                <li className='text-gray-400 font-[600]'><a href="#contact">Contact</a></li>
              </ul>
            </div>
      </div>
      {/* end footer top */}
    </footer>
  );
}

import React, { useRef, useEffect} from 'react'
import { AiOutlineDingtalk } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const stickyHeaderFunction = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header')
      }
      else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunction()
    return window.removeEventListener('scroll', stickyHeaderFunction)
  },[])

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
      behavior: 'smooth',
    })
  }

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

  return (
    <div ref={headerRef} className='w-full h-[80px] leading-[80px] flex items-center'>
      <div className="container">
        <div className="flex items-center justify-between">
            {/* logo */}
            <div className="flex items-center gap-[10px]">
              <span className="w-10 h-10 bg-primaryColor text-white text-[18px] font-[500] rounded-full items-center justify-center flex">
                T
              </span>
              <div className="leading-[20px] ">
                <h2 className="text-xl text-smallTextColor font-[700]">Thilina</h2>
                <p className="text-smallTextColor text-[14px] font-[500]">personal</p>
              </div>
            </div>
            {/* end logo */}

            {/* menu */}
            <div className="menu" ref={menuRef} onClick={toggleMenu}>
              <ul className='flex items-center gap-10'>
                <li onClick={handleClick} className='text-smallTextColor font-[600]'><a href="#about">About</a></li>
                <li onClick={handleClick} className='text-smallTextColor font-[600]'><a href="#services">Services</a></li>
                <li onClick={handleClick} className='text-smallTextColor font-[600]'><a href="#portfolio">Portfolio</a></li>
                <li onClick={handleClick} className='text-smallTextColor font-[600]'><a href="#contact">Contact</a></li>
              </ul>
            </div>
            {/* end menu */}
            
            {/* menu right */}
            <div className="flex items-center gap-4">
              <button className='flex items-center gap-2 tea=xt-smallTextColor text-[600] border-2 border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300'>
              <AiOutlineDingtalk className='w-7 h-7'/> Lets talk
              </button>
              <span onClick={toggleMenu} className="text-2xl md:hidden text-smallTextColor  cursor-pointer">
              <IoMenu />
              </span>
            </div>
            {/* end menu right */}
        </div>
      </div>
    </div>
  )
}

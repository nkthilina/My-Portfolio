import React from "react";
import { LuMail } from "react-icons/lu";
import { TbApiApp } from "react-icons/tb";
//import CountUp from 'react-countup/build/CountUp'

export default function Hero() {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* hero left content */}
          <div className="w-full md:basis-1/2">
            <h5
              className="text-headingColor font-[600] text-[16px]"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Hello Welcome
            </h5>
            <h1
              className="text-headingColor font-[800] text-[30px] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              I'm Thilina Madhusanka <br /> Software Developer
            </h1>
            <div
              className="flex items-center gap-6 mt-7"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
            >
              <a href="#contact">
                <button className="flex items-center bg-primaryColor text-white font-[500] gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <LuMail className="mr-2" />
                  Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See portfolio
              </a>
            </div>
              <p
                data-aos="fade-left"
                data-aos-duration="1500"
                className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
              >
              <span className="mt-2"><TbApiApp className="w-6 h-6"/></span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                ea earum consequuntur deleniti impedit laboriosam accusamus
                facilis amet? Rem, magnam.
              </p>
          </div>
          {/* end hero left content */}
        </div>
      </div>
    </section>
  );
}

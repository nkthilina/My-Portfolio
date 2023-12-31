import React from "react";
import { LuMail } from "react-icons/lu";
import { TbApiApp } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaFacebook, FaInstagramSquare } from "react-icons/fa";
//import heroImage from "../images/heroImage.jpg";
//import ThilinaLeonardo from "../images/Thilina_Leonardo_Diffusion_XL.jpg"
import Thilina from "../images/Leonardo_Diffusion_XL_Handsome_t.jpg"
import CountUp from "react-countup";

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
              <span className="mt-2">
                <TbApiApp className="w-6 h-6" />
              </span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ea
              earum consequuntur deleniti impedit laboriosam accusamus facilis
              amet? Rem, magnam.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow me :{" "}
              </span>
              <span>
                <a
                  href="#github"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <IoLogoGithub className="w-6 h-6" />
                </a>
              </span>
              <span>
                <a
                  href="#linkedIn"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </span>
              <span>
                <a
                  href="#facebook"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
              </span>
              <span>
                <a
                  href="#instagram"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <FaInstagramSquare className="w-7 h-7" />
                </a>
              </span>
            </div>
          </div>
          {/* end hero left content */}
          {/* hero image */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center ">
              <img className="w-[350px] h-[450px]" src={Thilina} alt="" />
            </figure>
          </div>
          {/* end hero image */}
          {/* hero content right */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor text-[32px] font-[700]">
                <CountUp start={0} end={1} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor text-[18px] font-[600]">
                Years of experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor text-[32px] font-[700]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor text-[18px] font-[600]">
                Success Rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor text-[32px] font-[700]">
                <CountUp start={0} end={150} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor text-[18px] font-[600]">
                Happy Clients
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor text-[32px] font-[700]">
                <CountUp start={0} end={5} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor text-[18px] font-[600]">
                Projects Completed
              </h4>
            </div>
          </div>
          {/* end hero content right */}
        </div>
      </div>
    </section>
  );
}

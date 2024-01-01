import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
      <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">Get in touch</h2>
        <div className="md:flex  justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3958.3667580198266!2d79.95910307674313!3d7.198928974258447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTEnNTYuMSJOIDc5wrA1Nyc1MC4zIkU!5e0!3m2!1sen!2slk!4v1704115374580!5m2!1sen!2slk"
              className="border-0 w-full h-full "
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 h-[300px] sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form action="" className="w-full">
                <div className="mb-5">
                    <input type="text"
                    placeholder="Enter your name" 
                    className="w-full p-3 focus:outline-none rounded-[5px]" />
                </div>
                <div className="mb-5">
                    <input type="email"
                    placeholder="Enter your email" 
                    className="w-full p-3 focus:outline-none rounded-[5px]" />
                </div>
                <div className="mb-5">
                    <input type="text"
                    placeholder="Subject" 
                    className="w-full p-3 focus:outline-none rounded-[5px]" />
                </div>
                <div className="mb-5">
                    <textarea type="text"
                    rows={3}
                    placeholder="Write your message" 
                    className="w-full p-3 focus:outline-none rounded-[5px]" />
                </div>
                <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-in duration-150">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Services() {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[40px] mb-5">
            What do I help
          </h2>
          <p className="text-center lg:max-w-[600px] lg:max-auto text-headingColor font-[500] text-[16px] leading-7 mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            sequi omnis maxime dolore id molestiae enim ut nihil facere rerum.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* vertical line running through the middle */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>
              {/* end vertical line running through the middle */}

              {/* left card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3></h3>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Voluptatem, sunt quam asperiores soluta labore
                          neque!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end left card */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

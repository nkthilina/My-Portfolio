import React from 'react'

export default function header() {
  return (
    <div className='w-full h-[80px] leading-[80px] flex items-center'>
      <div className="container">
        <div className="flex items-center justify-between">
            {/* logo */}
            <div className="flex items-center gap-[10px]">
              <span className="w-10 h-10 bg-primaryColor text-white text-[18px] font-[500] rounded-full items-center justify-center flex">
                T
              </span>
              <div className="leading-[20px] ">
                <h2 className="text-xl text-smallTextColor font-[700]">Thilina</h2>
                <p className="text-smallTextColor text-[18px] font-[500]">Personal</p>
              </div>
            </div>
            {/* end logo */}

        </div>
      </div>
    </div>
  )
}

import React from 'react';
import { FaUsers ,FaDollarSign} from 'react-icons/fa6';
import {MdOutlineWatchLater} from 'react-icons/md'

import {PiBookOpenText} from 'react-icons/pi'
const States = () => {
  const stats = [
    {
      data: "200",
      desc: "Number of Users",
      backgroundColor: "#7644FF",
      icon: <FaUsers className='text-[#7644FF] p-1' />,
    },
    {
      data: "200",
      desc: "Number of Products",
      backgroundColor: "#02B86C",
      icon: <PiBookOpenText className='text-[#02B86C] p-1' />,
    },
    {
      data: "200",
      desc: "Total Earning",
      backgroundColor: "#F99500",
      icon: <FaDollarSign className='text-[#F99500] p-1' />,
    },
    // {
    //   data: "12K+",
    //   desc: "New Booking",
    //   backgroundColor: "#9C27B0",
    //   icon: <FaRegCalendarAlt/>,
    // },
  ];

  return (
    <>
      
     
          
      <div className="flex-wrap mt-12 gap-x-4 gap-y-10 items-center justify-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
  {stats.map((item, idx) => (
    <div
      key={idx}
      style={{
        backgroundColor: item.backgroundColor,
        width: "19rem", // Set fixed width
        height: "7rem", // Set fixed height
      }}
      className="border p-4 flex items-center "
    >
      <div className='flex items-center'>
        <div className="text-6xl mr-2 rounded-full bg-white">
          {item.icon}
        </div>
        <div className="border-r-2 border-white h-16"></div>
      </div>
      <div className="flex flex-col justify-center items-center ml-4">
        
        <p className="mt-2 text-white font-medium">{item.desc}</p>
        <h4 className="text-4xl text-white font-semibold">
          {item.data}
        </h4>
      </div>
    </div>
  ))}
</div>


          
       
     
    </>
  );
};

export default States;
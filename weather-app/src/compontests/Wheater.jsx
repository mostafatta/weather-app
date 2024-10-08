import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import clearImage from '../Assets/clear.png';
import wind from '../Assets/wind.png'
import hum from '../Assets/humidity.png'
const Wheater = () => {
  const handleSearch=(e)=>{
    cityState(e.target.value);
  }
  const handleClick=()=>{
    cityState('')
  }
  const [city,cityState]=useState('');
  return (
    <div className="flex justify-center items-center min-h-screen bg-black"> 
      <div className="flex flex-col items-center bg-slate-600 p-10 rounded-[8px] shadow-md"> 
        {/* Search Bar */}
        <div className="mb-4 flex"> 
          <input type="text" className="rounded-full p-2 outline-none " placeholder="Enter city name..."  value={city}onChange={handleSearch} /> 
         <button onClick={handleClick} className=" m-3 cursor-pointer"> <IoMdSearch /></button>

        </div>
        {/* Degree and City */}
        <div className="text-white mb-4 flex flex-col">
          <h1 className=' text-7xl'>18 c</h1>
          <h1 className=' m-auto font-bold text-4xl  mt-2 '>{city}</h1>
        </div>
        {/* State Image */}
        <div className="text-white mb-4"> {/* Text color and spacing */}
        <img src={clearImage} alt="" />
        </div>
        {/* Two images wind and humidity */}
        <div className="text-white mb-4 flex gap-6"> 
          <div className=' flex flex-row gap-2'>
            <div className='m-auto'>
            <img src={hum} alt="" />
            </div>
            <div className=' m-auto'>
              <p className=''>20 %</p>
              <p className=' font-bold'>humidity</p>
            </div>

          </div>
          <div className='flex flex-row gap-2'>
            <div className='m-auto'>
              <img src={wind} alt="" />
            </div>
            <div>
              <p>3 k/s</p>
              <p className=' font-bold'> wind speed</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Wheater;

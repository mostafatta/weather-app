import React from 'react';

const Wheater = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white"> {/* Full-height white background */}
      <div className="flex flex-col items-center bg-slate-600 p-10 rounded-[8px] shadow-md"> {/* Centered content */}
        {/* Search Bar */}
        <div className="mb-4"> {/* Add margin below */}
          <input type="text" className="rounded-lg p-2" placeholder="Search..." /> {/* Input styling */}
        </div>
        {/* Degree and City */}
        <div className="text-white mb-4"> {/* Text color and spacing */}
          Degree and City
        </div>
        {/* State Image */}
        <div className="text-white mb-4"> {/* Text color and spacing */}
          State Image
        </div>
        {/* Two images wind and humidity */}
        <div className="text-white mb-4"> {/* Text color and spacing */}
          Wind and Humidity
        </div>
      </div>
    </div>
  );
};

export default Wheater;

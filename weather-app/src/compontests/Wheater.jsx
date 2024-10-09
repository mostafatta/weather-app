import React, { useEffect, useRef, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import clearImage from '../Assets/clear.png';
import cloud from '../Assets/cloud.png';
import rain from '../Assets/rain.png';
import snow from '../Assets/snow.png';
import drizzle from '../Assets/drizzle.png';
import wind from '../Assets/wind.png';
import hum from '../Assets/humidity.png';

const Weather = () => {
  const [weather, setWeather] = useState({
    humidity: 0,
    windowSpeed: 0,
    temp: 0,
    city: '',
    icon: '',
  });
  const cityName = useRef(null);
  const [loading, setLoading] = useState(true);

  const iconMapping = {
    '01d': clearImage,
    '02d': cloud,
    '03d': cloud,
    '04d': cloud,
    '09d': drizzle,
    '10d': rain,
    '13d': snow,
  };

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();

      const icon = iconMapping[data.weather[0].icon]||clearImage;
      setWeather({
        humidity: data.main.humidity,
        windowSpeed: data.wind.speed,
        temp: Math.floor(data.main.temp - 273.15),
        city: data.name,
        icon: icon,
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      await search("London"); // Optional: Initial search for London
      setLoading(false);
    };
    fetchWeather();
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="flex flex-col items-center bg-slate-600 p-10 rounded-[8px] shadow-md">
        {/* Search Bar */}
        <div className="mb-4 flex">
          <input
            type="text"
            className="rounded-full p-2 outline-none"
            placeholder="Enter city name..."
            ref={cityName}
          />
          <button
            className="m-3 cursor-pointer"
            onClick={() => search(cityName.current.value)}
          >
            <IoMdSearch />
          </button>
        </div>

        {/* Temperature, City Name, and State Image */}
        <div className="text-white mb-4 flex flex-col items-center">
          <h1 className='text-7xl'>{weather.temp} °C</h1>
          <h1 className='m-auto font-bold text-4xl mt-2'>{weather.city}</h1>
          <div className="mb-4">
            {weather.icon ? (
              <img src={weather.icon} alt="Weather icon" />
            ) : (
              <p>Loading icon...</p> // Fallback text
            )}
          </div>
        </div>

        {/* Wind and Humidity */}
        <div className="text-white mb-4 flex gap-6">
          <div className='flex flex-row gap-2'>
            <div className='m-auto'>
            <img src={hum} alt="Humidity icon" />
            </div>
            <div>
            <p>{weather.humidity} %</p>
            <p className='font-bold'>Humidity</p>
            </div>
          </div>
          <div className='flex flex-row gap-2'>
            <div className='m-auto'>
            <img src={wind} alt="Wind speed icon" />
            </div>
            <div>
            <p>{weather.windowSpeed} km/h</p>
            <p className='font-bold'>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

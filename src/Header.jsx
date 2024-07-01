import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';

const Header = () => {
  const [anytimeOpen, setAnytimeOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(1);
 const toggleAnytime = () => {
 setAnytimeOpen(!anytimeOpen);
    setPriceOpen(false);
 setGuestsOpen(false);
  };
const togglePrice = () => {
    setPriceOpen(!priceOpen);
setAnytimeOpen(false);
    setGuestsOpen(false);};
const toggleGuests = () => {
    setGuestsOpen(!guestsOpen);
setAnytimeOpen(false);
    setPriceOpen(false);
  };

const incrementGuests = () => {
     setGuests(prevGuests => prevGuests + 1);
  };

 const decrementGuests = () => {
      setGuests(prevGuests => (prevGuests > 1 ? prevGuests - 1 : 1));
  };

  return (
    <div className='container mx-auto  style={{positionsticky}} '>
    <header className='p-4 flex flex-col md:flex-row justify-between items-center'>
 <a href='' className='flex items-center gap-2 mb-2 md:mb-0'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90">
<path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
       </svg>
 <span className='font-bold text-xl'>Airbnb</span>
   </a>
        <div className='flex flex-col md:flex-row gap-2 border border-gray-300 p-2 px-4 rounded-full shadow-md shadow-gray-300 w-full md:w-auto'>
  <div className='relative w-full md:w-auto'>
          <button onClick={toggleAnytime} className='focus:outline-none w-full md:w-auto'>
    {startDate && endDate ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}` : 'Anytime'}
            </button>
     {anytimeOpen && (
 <div className='absolute left-0 right-0 md:left-auto md:right-auto mt-2 bg-white rounded-lg shadow-lg py-2 z-10'>
    <div className='px-4 py-2'>
                  <DatePicker
 selected={startDate}
   onChange={(dates) => {
    const [start, end] = dates;
  setStartDate(start);
   setEndDate(end);
 }}
      startDate={startDate}
    endDate={endDate}
 selectsRange
   inline
  />
     </div>
  </div>
    )}
    </div>
          <div className='border-l border-gray-300'></div>
   <div className='relative'>
  <button onClick={togglePrice} className='focus:outline-none'>
              Price
    </button>
            {priceOpen && (
   <div className='absolute mt-2 w-40 bg-white rounded-lg shadow-lg py-2'>
 <p className='px-4 py-2 cursor-pointer hover:bg-gray-100'>Low to high</p>
     <p className='px-4 py-2 cursor-pointer hover:bg-gray-100'>High to low</p>
<p className='px-4 py-2 cursor-pointer hover:bg-gray-100'>Under 2000</p>
  <p className='px-4 py-2 cursor-pointer hover:bg-gray-100'>Under 10000</p>
    <p className='px-4 py-2 cursor-pointer hover:bg-gray-100'>10000</p>
</div>
)}
</div>
          <div className='border-l border-gray-300'></div>
<div className='relative'>
            <button onClick={toggleGuests} className='focus:outline-none'>
{guests} {guests === 1 ? 'guest' : 'guests'}
</button>
{guestsOpen && (
<div className='absolute mt-2 w-40 bg-white rounded-lg shadow-lg py-2 flex items-center justify-between px-4'>
<button
onClick={decrementGuests}
className='bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-2 rounded-full focus:outline-none'
>
-
</button>
  <span>{guests}</span>
         <button
onClick={incrementGuests}
className='bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-2 rounded-full focus:outline-none'
         >
           +
</button>
      </div>
            )}
   </div>
   <button className='bg-white text-black rounded-full'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
   </button>
</div>
<Link to={'/login'} className='flex gap-2 border border-gray-300 p-2 px-4 rounded-full shadow-md '>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </Link>
      </header>
    </div>
  );
};

export default Header;



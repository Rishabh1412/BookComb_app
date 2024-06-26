import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ item }) {
  const Free="Free"
  const { id, volumeInfo, saleInfo } = item;
  const {  retailPrice } = saleInfo || { };

  const { title, subtitle, imageLinks } = volumeInfo;
  // const {retailPrice}=saleinfo

  return (
    
    <div className="p-2 px-4 m-4 bg-neutral-900 text-white rounded-lg shadow-md pb-12 hover:bg-yellow-400 hover:text-black hover:scale-105 duration-300">
      <Link to={`/book/${id}`}>
        <img 
          className="w-full h-64 object-cover rounded border border-black"
          src={imageLinks?.thumbnail}
          alt={title}
        />
        <h2 className="text-lg font-semibold mt-4">{title}</h2>
        <div className=''>
        {subtitle && <h3 className='font-thin mt-3 text-xs'>{subtitle}</h3>}
        <div className="text-sm mb-2 text-black mt-4">
        {retailPrice && (
          
          <span className='min-w-min bg-white py-1 rounded-xl flex justify-center items-center'>
            <br/>
            <span className=' text-sm font-medium'>Rs.&nbsp;</span> {retailPrice.amount} 
          </span>
        ) || <p className=' bg-white py-1 rounded-xl flex justify-center items-center'>Free</p>}
        </div>
        </div>
        
      </Link>
    </div>
  );
}

export default Cards;

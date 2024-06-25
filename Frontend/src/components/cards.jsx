import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ item }) {
  const { id, volumeInfo } = item;
  const { title, subtitle, imageLinks } = volumeInfo;

  return (
    <div className="p-2 px-4 m-4 bg-neutral-900 text-white rounded-lg shadow-md  pb-12 hover:bg-yellow-400 hover:text-black hover:scale-105 duration-300">
      <Link to={`/book/${id}`}>
        <img 
          className="w-full h-64 object-cover rounded border border-black"
          src={imageLinks?.thumbnail}
          alt={title}
        />
        <h2 className="text-lg font-semibold mt-4">{title}</h2>
        {subtitle && <h3 className='font-thin mt-3 text-xs'>{subtitle}</h3>}
        
      </Link>
    </div>
  );
}

export default Cards;

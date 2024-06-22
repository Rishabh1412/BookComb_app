import React from 'react';

function Cards({ item }) {
  return (
    <div className='mt-4 my-3 p-3'>
      <div className="card max-w-82 bg-base-100 shadow-xl my-12 rounded-md hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={item.volumeInfo.imageLinks?.thumbnail}
            alt={item.volumeInfo.title}
          />
        </figure>
        <div className="card-body rounded-md">
          <h2 className="card-title">
            {item.volumeInfo.title}
            <div className="badge badge-secondary">{item.volumeInfo.categories?.[0]}</div>
          </h2>
          <p>{item.volumeInfo.subtitle}</p>
          <p>{item.volumeInfo.authors?.join(', ')}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">
              Rs.{item.saleInfo.retailPrice?.amount}
            </div>
            <a
              href={item.saleInfo.buyLink}
              className="cursor-pointer py-2 px-1 rounded-lg border-black badge badge-outline hover:bg-pink-500 hover:text-white hover:px-4 duration-1000"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

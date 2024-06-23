import React from 'react';

function Cards({ item }) {
  return (
    <div className='mt-4 my-3 px-3 py-2'>
      <div className="card max-w-82 bg-base-100 shadow-xl my-12 rounded-md hover:scale-105 duration-300 border max-h-96 h-96">
        <figure className=' object-fill h-1/2'>
          <img 
            src={item.volumeInfo.imageLinks?.thumbnail}
            alt={item.volumeInfo.title}
          />
        </figure>
        <div className="card-body rounded-md">
          <h3 className="card-title text-xl h-1/2">
            <p className='text-sm max-h-1/2'>{item.volumeInfo.title}</p>
            
            <div className=" text-xs bg-pink-500 text-white p-2  rounded-xl">{item.volumeInfo.categories?.[0] || <p>Undefined</p> }</div> 
          </h3>
          {/* <p>{item.volumeInfo.subtitle}</p> */}
          {/* <p>{item.volumeInfo.authors?.join(', ')}</p> */}
          <div className="card-actions justify-between">
            <div className="badge badge-outline ">
            
              Rs. {item.saleInfo.retailPrice?.amount || 0}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

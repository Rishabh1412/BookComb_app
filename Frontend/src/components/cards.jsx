import React from 'react'

function cards({item}) {
  return (
    <>
        <div className='mt-4 my-3 p-3'>
            <div className="card max-w-82 bg-base-100 shadow-xl my-12 rounded-md hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border">
                <figure><img 
                        src={item.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body rounded-md">
                    <h2 className="card-title">
                    {item.name}
                    <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                    <div className="badge badge-outline">Rs.{item.price}</div> 
                    <div className="cursor-pointer py-2 px-1 rounded-lg border-black badge badge-outline hover:bg-pink-500 hover:text-white hover:px-4 duration-1000">Buy now</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default cards

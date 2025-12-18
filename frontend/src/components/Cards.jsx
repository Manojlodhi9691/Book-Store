import React from 'react';

function Cards({item}) {
  
  return (
   <> 
   <div className="mt-4 p-3 transition-transform duration-300 transform hover:scale-110 relative hover:z-10">
      <div className="card bg-base-100 shadow-xl mx-auto dark:bg-slate-900 dark:text-white dark:border ">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className=" hover:bg-pink-500 hover:text-white cursor-pointer px-4 py-2 rounded-full">Buy Now</div>
    </div>
  </div>
</div>
    </div>
   </>
  )
}

export default Cards
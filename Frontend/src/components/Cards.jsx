import React from 'react'

const Cards = ({item}) => {
    console.log(item)
  return (
    <div className='hover:scale-105 duration-200'>
      <div>
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <imgs
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">${item.price}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white p-4">{item.category}</div>
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white p-4">Buy now</div>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Cards

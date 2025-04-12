import React from 'react'
import { Link } from 'react-router-dom'

const Arrivels = () => {
  return (
    <div>
      <h1 className='text-center mb-10 font-bold text-4xl sm:text-2xl lg:text-6xl'>Best Collection Arrived</h1>
      <div className="arivals flex justify-around flex-wrap gap-0.5 ">
{
        [1, 2, 3, 4,5,6,7,8].map((item) => (
         <Link to={`/product/${item}`} key={item} >
           <div className="card bg-base-100 w-72 mb-5 h-96  overflow-hidden" key={item}>
          <figure>
            <img
              src="https://demos.webicode.com/html/Bo-shop-html/images/item-img-1-8-1.jpg"
              className='h-80 w-full'
              alt="Shoes" 
              />
          </figure>
          <div className="card-body">
            <h3 className="card-title">Card Title</h3> 
          </div>
        </div>
         </Link>
        ))
}
      </div>
    </div>
  )
}

export default Arrivels
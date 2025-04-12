import React from 'react'

const Driver = () => {
    return (
<div className="flex flex-col md:flex-row h-80 bg-base-100 p-4 md:p-10 gap-6 md:gap-10">
  {/* Left Side - Content */}
  <div className='flex-1 flex flex-col justify-center items-start space-y-4 md:space-y-6'>
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
      Premium Collection
    </h1>
    <p className="text-gray-600 text-sm md:text-base">
      Discover our exclusive range of high-quality products designed for your comfort and style. 
      Perfect for every occasion and season.
    </p>
    <button className="btn btn-primary px-8 py-3">
      Shop Now
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </div>

  {/* Right Side - Image */}
  <div className='flex-1 h-full w-full rounded-lg overflow-hidden shadow-lg'>
    <img 
      src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1535258356/pj37lkaaxklwgww2czvn.jpg" 
      alt="Featured Product"
      className="w-full h-full object-cover object-center"
    />
  </div>
</div>
    )
}

export default Driver
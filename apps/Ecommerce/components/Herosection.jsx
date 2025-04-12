import React from 'react'
import '../main.css'
const Herosection = () => {
    return (
        <div className='min-h-screen flex items-center justify-center md:justify-end md:pe-10 lg:pe-40 bg-my bg-cover bg-center px-4 sm:px-6'>
            <div className='w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center md:text-left'>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
                    Welcome to our Store
                </h1>
                <p className='text-lg sm:text-xl mt-4 md:mt-6'>
                    Find the best products for you
                </p>
                <div className='mt-6 md:mt-8 flex justify-center md:justify-start'>
                    <button className='btn btn-primary px-8 py-3 text-sm sm:text-base md:text-lg'>
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Herosection
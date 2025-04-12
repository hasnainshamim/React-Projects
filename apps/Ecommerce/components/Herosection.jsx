import React from 'react'
import '../main.css'
const Herosection = () => {
    return (
        <div className='h-screen flex items-center justify-end pe-40 bg-my'
        >
            <div className='flex flex-col items-start'>
                <h1 className='text-6xl font-bold'>Welcome to our Store</h1>
                <p className='text-xl mt-4'>Find the best products for you</p>
                <button className='btn btn-primary mt-6'>Shop Now</button>
            </div>
        </div>
    )
}

export default Herosection
import React from 'react'

const Categories = () => {
    return (
        <div className='flex flex-wrap justify-around my-15 overflow-hidden'>
            <div className='bg-red-600 w-35 h-35 rounded-full'>
                <img src="../public/cat-men.jpg" alt="cat" />
            </div>
            <div className='bg-red-600 w-35 h-35 rounded-full'>
                {/* <img src="" alt="cat" /> */}
            </div>
            <div className='bg-red-600 w-35 h-35 rounded-full'>
                {/* <img src="" alt="cat" /> */}
            </div>
            <div className='bg-red-600 w-35 h-35 rounded-full'>
                {/* <img src="" alt="cat" /> */}
            </div>
            <div className='bg-red-600 w-35 h-35 rounded-full'>
                {/* <img src="" alt="cat" /> */}
            </div>
        </div>
    )
}

export default Categories
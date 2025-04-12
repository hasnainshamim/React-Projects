import React from 'react'

const Banner = () => {
  return (
    <div 
    style={
        {
            position: 'relative',
            height: '300px',
            backgroundImage: `url('https://themesflat.co/html/modaz/images/parallax/bg-parallax3.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff'
        }
    }
    >
        <h1 className='text-black text-5xl sm:text-xl'>
        Women‘s Collection
        </h1> 
        <button className='btn btn-error w-40 rounded-none mt-4'>
            Shop
        </button>
    </div>
  )
}

export default Banner
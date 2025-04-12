import React from 'react';

const Categories = () => {
  const categories = [
    {
      name: "Men's",
      image: "https://i.pinimg.com/736x/d4/24/58/d4245806458d4177c8f0ef15d2733522.jpg"
    },
    {
      name: "Women's",
      image: "https://i.pinimg.com/736x/11/e8/d6/11e8d6112101edd2b4e4a683c55c5088.jpg"
    },
    {
      name: "Kid's",
      image: "https://i.pinimg.com/236x/df/3e/27/df3e276200f839dba2154011c96a953a.jpg"
    },
    {
      name: "Unisex",
      image: "https://www.stridestore.com.au/cdn/shop/collections/unisex-denim-425828.jpg?v=1677924756&width=800"
    }
  ];

  return (
    <div className='flex flex-wrap justify-center gap-4 md:gap-8 my-8 md:my-15 px-4'>
      {categories.map((category, index) => (
        <div 
          key={index}
          className='relative w-20 h-20 md:w-35 md:h-35 rounded-full overflow-hidden flex justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300 group'
          style={{
            backgroundImage: `url('${category.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dark overlay */}
          <div className='absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300'></div>
          
          {/* Category name */}
          <h3 className='relative z-10 font-bold text-white text-sm md:text-base lg:text-lg text-center px-2'>
            {category.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Categories;
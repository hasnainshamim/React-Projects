import React from 'react';
import Card from './Card';

const Tab = () => {
  return (
    <div className="tabs tabs-boxed md:tabs-border flex items-center justify-center mt-10">
      {/* Men's Tab */}
      <input 
        type="radio" 
        name="my_tabs_2" 
        className="tab" 
        aria-label="Men's" 
        id="tab-mens"
      />
      <div className="tab-content border-base-300 bg-base-100 p-4 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {/* Women's Tab */}
      <input 
        type="radio" 
        name="my_tabs_2" 
        className="tab" 
        aria-label="Women's" 
        id="tab-womens"
        defaultChecked 
      />
      <div className="tab-content border-base-300 bg-base-100 p-4 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <Card />
          <Card />
        </div>
      </div>

      {/* Kid's Tab */}
      <input 
        type="radio" 
        name="my_tabs_2" 
        className="tab" 
        aria-label="Kid's" 
        id="tab-kids"
      />
      <div className="tab-content border-base-300 bg-base-100 p-4 md:p-10">
        <div className="grid grid-cols-1 gap-4 md:gap-8">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Tab;
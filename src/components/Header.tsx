import React from 'react';

const Header: React.FC = () => {
  return (
    <div className='px-4 pt-4 sm:flex sm:justify-between md:px-8 lg:px-16 xl:px-24'>
      <h2 className='text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold'>
        Dashboard
      </h2>
      <h2 className='text-sm sm:text-base lg:text-lg xl:text-xl'>
        Welcome back, Rishi
      </h2>
    </div>
  );
};

export default Header;

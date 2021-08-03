import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className='flex w-full items-center justify-between mt-4'>
      <div className='text-blue-700 font-bold text-md md:text-base'>
        <p>css-maid</p>
      </div>

      <div className='font-medium'>
        <a className='mr-16 md:mr-8 md:text-sm' href='#'>
          npm
        </a>
        <a className='mr-16 md:mr-8 md:text-sm' href='#'>
          yarn
        </a>
        <a className='md:text-sm' href='#'>
          github
        </a>
      </div>
    </nav>
  );
};

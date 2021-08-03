import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className='flex w-full items-center justify-between mt-4'>
      <div className='text-blue-700 font-bold text-lg'>
        <p>css-maid</p>
      </div>

      <div className='font-medium'>
        <a className='mr-16' href='#'>
          npm
        </a>
        <a className='mr-16' href='#'>
          yarn
        </a>
        <a href='#'>github</a>
      </div>
    </nav>
  );
};

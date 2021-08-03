import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className='flex w-full items-center justify-between mt-4'>
      <div className='text-blue-700 font-bold text-lg md:text-base'>
        <p>css-maid</p>
      </div>

      <div className='font-medium'>
        <a className='mr-16 md:mr-8 md:text-sm' href='https://www.npmjs.com/package/css-maid'>
          npm
        </a>
        <a className='mr-16 md:mr-8 md:text-sm' href='https://yarnpkg.com/package/css-maid'>
          yarn
        </a>
        <a className='md:text-sm' href='https://github.com/joshxfi/css-maid'>
          github
        </a>
      </div>
    </nav>
  );
};

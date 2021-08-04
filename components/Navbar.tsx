import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className='flex w-full items-center justify-between mt-4'>
      <div className='text-blue-700 font-bold text-lg md:text-base'>
        <p>css-maid</p>
      </div>

      <div className='font-medium'>
        <a className='anchor' href='https://www.npmjs.com/package/css-maid' target='_blank' rel='noreferrer'>
          npm
        </a>
        <a className='anchor' href='https://yarnpkg.com/package/css-maid' target='_blank' rel='noreferrer'>
          yarn
        </a>
        <a className='lastAnchor' href='https://github.com/joshxfi/css-maid' target='_blank' rel='noreferrer'>
          github
        </a>
      </div>
    </nav>
  );
};

import React from "react";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import logo from "../public/img/logo.png";

const index: React.FC = () => {
  return (
    <div className='w-9/12 mx-auto font-pops'>
      <Navbar />
      <main>
        <div className='flex justify-between mt-28 md:flex-col md:mt-0'>
          <div className='pt-14'>
            <h1 className='text-5xl md:text-3xl font-bold text-blue-700'>
              CSS Reset for your <br /> React App.
            </h1>
            <p className='font-medium md:text-sm'>get started!</p>
            <div className='mt-8'>
              <div className='snippet mb-4 md:mb-2 shadow-lg'>npm i css-maid</div>
              <div className='snippet shadow-lg'>yarn add css-maid</div>
            </div>
          </div>

          <div className='relative border-b-8 border-blue-700 h-96 md:h-56 w-80 md:w-52 md:mx-auto md:mt-24'>
            <Image objectFit='cover' objectPosition='center' layout='fill' src={logo} alt='css maid logo' />
          </div>
        </div>
      </main>
    </div>
  );
};

export default index;

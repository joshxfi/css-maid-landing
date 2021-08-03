import React from "react";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import logo from "../public/img/logo.png";

const index: React.FC = () => {
  return (
    <div className='w-9/12 mx-auto font-pops'>
      <Navbar />
      <main>
        <div className='flex justify-between relative mt-28'>
          <div className='pt-14'>
            <h1 className='text-5xl font-bold text-blue-700'>
              CSS Reset for your <br /> React App.
            </h1>
            <p className='font-medium'>get started!</p>
          </div>
          <div className='h-96 w-80 relative border-b-8 border-blue-700'>
            <Image layout='fill' objectFit='cover' objectPosition='center' src={logo} alt='css maid logo' />
          </div>
        </div>
      </main>
    </div>
  );
};

export default index;

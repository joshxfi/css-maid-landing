import React from "react";
import { Navbar } from "../components/Navbar";

const index: React.FC = () => {
  return (
    <div className='w-9/12 mx-auto font-pops'>
      <Navbar />
      <main>
        <div className='flex justify-between items-center h-screen'>
          <div>
            <h1 className='text-5xl font-bold text-blue-700'>
              CSS Reset for your <br /> React App.
            </h1>
            <p className='font-medium'>get started!</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default index;

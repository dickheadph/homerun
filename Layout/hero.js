import React from 'react';
import Link from 'next/link';

//import Image from 'next/image';
function hero() {
  return (
    <div className='flex flex-wrap bg-yellow-100/60'>
      <div className='lg:w-5/12 w-full mx-auto py-[8%] px-[6%] lg:h-screen'>
        <div className='lg:text-8xl text-5xl font-bold mb-10'>
          <h2>Construction and </h2>
          <h1>
            <em className='text-orange-500'>Architecture</em>...
          </h1>
          <p className='font-bold lg:text-4xl text-xl'>
            We build<span className='text-orange-600'> Your dreams</span>
            ...
          </p>
        </div>
        <div className=''>
          <Link href={'/architectures'}>
            <button className='bg-white py-2 px-3 rounded-md font-medium border-[1px]'>
              View Listings...
            </button>
          </Link>
        </div>
      </div>
      <div className='lg:w-7/12 w-full lg:block hidden'>
        <h1>Image Here</h1>
      </div>
    </div>
  );
}

export default hero;

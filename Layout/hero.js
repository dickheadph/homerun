import React from 'react';
import Link from 'next/link';
import HomeImage from '../public/assets/Home Banner.png';
import Image from 'next/image';
function hero() {
  return (
    <div className='flex flex-wrap bg-stone-500/10'>
      <div className='lg:w-5/12 w-full mx-auto py-[5%] px-[8%]'>
        <div className='lg:text-8xl text-5xl font-bold mb-10'>
          <p className='text-base'>
            Homerun<span className='text-orange-600'>...</span>
          </p>
          <h2>
            Construction and
            <span>
              <em className='text-orange-500'> Architecture</em>.
            </span>
          </h2>
          <p className='font-bold lg:text-4xl text-xl text-center p-3'>
            We build<span className='text-orange-600'> Your dreams</span>
            ...
          </p>
        </div>
        <div className=''>
          <Link href={'/architectures'}>
            <button className='bg-white py-2 px-3 rounded-md font-medium text-sm lg:text-md border-[1px]'>
              View Listings...
            </button>
          </Link>
        </div>
      </div>
      <div className='lg:w-7/12 bg-amber-50'>
        <Image
          src={HomeImage}
          priority={true}
          alt='Hero Banner Image'
          height={'auto'}
          width={'auto'}
          className='object-cover my-[5%]'
        />
      </div>
    </div>
  );
}

export default hero;

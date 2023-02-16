//import { useState } from 'react';
import Link from 'next/link';
import { FaList, FaCircle } from 'react-icons/fa';
const Sidebar = () => {
  //   const [showSidebar, setShowSidebar] = useState(false);
  //   const sidebarHandler = (e) => {
  //     e.preventDefault();
  //     setShowSidebar((prevState) => !prevState);
  //   };
  return (
    <div className='bg-[#0003] lg:hidden inset-0 z-10 absolute pl-[60%]'>
      <h1 className='font-bold absolute top-[5%] right-9 z-20'>X</h1>
      <ul className='bg-amber-50 h-screen pt-[60%] px-4'>
        <Link href={'/'}>
          <li className='flex items-center'>< FaCircle/>Home</li>
        </Link>
        <Link href={'/listings'}>
          <li>Listings</li>
        </Link>
        <Link href={'/architectures'}>
          <li>Architectures</li>
        </Link>
        <Link href={'/projects'}>
          <li>Projects</li>
        </Link>
        <Link href={'/about'}>
          <li>About</li>
        </Link>
        <Link href={'/register'}>
          <button className='py-1 px-2 border-[1px] rounded-md text-base font-normal bg-orange-400 text-white'>
            Register
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/logo';
import Sidebar from './sidebar';
function Navbar() {
  const [showSidebar, setShowSidebar] = useState(true);
  const sidebarHandler = (e) => {
    e.preventDefault();
    setShowSidebar((prevState) => !prevState);
  };
  return (
    <div className='flex justify-between p-6 font-semibold text-lg'>
      <div>
        {/* image here */}
        <Logo />
      </div>
      <div className='lg:block hidden'>
        <ul className='flex space-x-3'>
          <Link href={'/'}>
            <li>Home</li>
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
        </ul>
      </div>
      {showSidebar ? (
        <p onClick={sidebarHandler} className='lg:hidden'>
          Y
        </p>
      ) : (
        <div onClick={sidebarHandler} className='lg:hidden'>
          <Sidebar />
        </div>
      )}
    </div>
  );
}

export default Navbar;

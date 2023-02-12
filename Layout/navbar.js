import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/Layout/logo';
import Sidebar from './sidebar';
import { BiMenu } from 'react-icons/bi';
function Navbar() {
  const [showSidebar, setShowSidebar] = useState(true);
  const sidebarHandler = (e) => {
    e.preventDefault();
    setShowSidebar((prevState) => !prevState);
    if (showSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };
  return (
    <div className='flex justify-between p-6 font-semibold text-lg items-center'>
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
        <div onClick={sidebarHandler} className='lg:hidden'>
          <BiMenu size={30} />
        </div>
      ) : (
        <div onClick={sidebarHandler}>
          <Sidebar />
        </div>
      )}
    </div>
  );
}

export default Navbar;

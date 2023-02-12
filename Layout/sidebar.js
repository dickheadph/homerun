//import { useState } from 'react';
import Link from 'next/link';
const Sidebar = () => {
  //   const [showSidebar, setShowSidebar] = useState(false);
  //   const sidebarHandler = (e) => {
  //     e.preventDefault();
  //     setShowSidebar((prevState) => !prevState);
  //   };
  return (
    <div className='bg-[#0003] lg:hidden inset-0 z-10 absolute pr-[0%]'>
      <h1>X</h1>
      <ul className='z-20 absolute'>
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
  );
};

export default Sidebar;

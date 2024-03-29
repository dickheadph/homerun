import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/Layout/logo';
import Sidebar from './sidebar';
import { BiMenu } from 'react-icons/bi';
import isAuthenticated from '@/Library/isAuth';
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

  const router = useRouter();
  const [profile, setProfile] = useState([]);
  const [hasAcc, setHasAcc] = useState(false);

  const getUser = async () => {
    const user = await isAuthenticated();
    //console.log(user);
    if (!user) {
      setHasAcc(false);
    } else if (user.status === 200) {
      setHasAcc(true);
      setProfile(user.data.profile);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className='flex justify-between p-6 font-semibold text-lg items-center lg:bg-gradient-to-r from-stone-500/10 to-amber-50 bg-stone-500/10'>
      <div>
        {/* image here */}
        <Logo />
      </div>
      <div className='lg:block hidden'>
        <ul className='flex space-x-3 mr-10'>
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
          {hasAcc ? (
            <Image
              src={profile.image}
              alt={'User Profile'}
              height={40}
              width={40}
              className='rounded-full'
              onClick={() => {
                router.push('/profile');
              }}
            />
          ) : (
            <Link href={'/auth'}>
              <button>Register</button>
            </Link>
          )}
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

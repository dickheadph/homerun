import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaCircle } from 'react-icons/fa';
const Sidebar = () => {
  const router = useRouter();
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('jwt');
  const [hasAcc, setHasAcc] = useState([]);

  const isAuthenticated = async () => {
    await axios
      .get(`http://localhost:3001/homerun/profile/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const account = res.data.profile;
        if (account) {
          setHasAcc(account);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    // const token = localStorage.getItem('jwt');
    isAuthenticated();
  }, []);
  return (
    <div className='bg-[#0003] lg:hidden inset-0 z-10 absolute pl-[60%]'>
      <h1 className='font-bold absolute top-[5%] right-9 z-20'>X</h1>
      <ul className='bg-amber-50 h-screen pt-[60%] px-4'>
        <Link href={'/'}>
          <li className='flex items-center'>
            <FaCircle />
            Home
          </li>
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
        {hasAcc ? (
          <div>
            <Image
              src={hasAcc.image}
              alt={'User Profile'}
              height={500}
              width={500}
              onClick={() => {
                router.push('/profile');
              }}
            />
            <h1 className='overflow-hidden'>{hasAcc.name}</h1>
            <Link href={'/auth'}>
              <button className='py-1 px-2 border-[1px] rounded-md text-base font-normal bg-orange-400 text-white'>
                Log Out
              </button>
            </Link>
          </div>
        ) : (
          <Link href={'/auth'}>
            <button className='py-1 px-2 border-[1px] rounded-md text-base font-normal bg-orange-400 text-white'>
              Register
            </button>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BiHomeAlt, BiLibrary, BiArch, BiHardHat } from 'react-icons/bi';

const Sidebar = () => {
  const router = useRouter();
  const cred = JSON.parse(localStorage.getItem('credentials'));
  const [profile, setProfile] = useState([]);
  const [hasAcc, setHasAcc] = useState(false);

  const isAuthenticated = async () => {
    console.log(cred);
    if (!cred) {
      setHasAcc(false);
    } else {
      await axios
        .get(`https://home-run.onrender.com/homerun/profile/${cred.id}`, {
          headers: {
            Authorization: `Bearer ${cred.token}`,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setHasAcc(true);
            setProfile(res.data.profile);
          } else {
            setHasAcc(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    isAuthenticated();
  }, []);
  return (
    <div className='bg-[#0003] lg:hidden inset-0 z-10 absolute pl-[60%]'>
      <h1 className='font-bold absolute top-[5%] right-9 z-20'>X</h1>
      <ul className='bg-amber-50 h-screen pt-[60%] px-4'>
        <Link href={'/'}>
          <li className='flex items-center'>
            <BiHomeAlt /> &nbsp; Home
          </li>
        </Link>
        <Link href={'/listings'}>
          <li className='flex items-center'>
            <BiLibrary /> &nbsp; Listings
          </li>
        </Link>
        <Link href={'/architectures'}>
          <li className='flex items-center'>
            <BiArch /> &nbsp; Architectures
          </li>
        </Link>
        <Link href={'/projects'}>
          <li className='flex items-center'>
            <BiHardHat /> &nbsp; Projects
          </li>
        </Link>
        {hasAcc ? (
          <div>
            <Image
              src={profile.image}
              alt={'User Profile'}
              height={500}
              width={500}
              onClick={() => {
                router.push('/profile');
              }}
            />
            <h1 className='overflow-hidden'>{profile.name}</h1>
            <button
              className='py-1 px-2 border-[1px] rounded-md text-base font-normal bg-orange-400 text-white'
              onClick={() => {
                router.push('/auth');
                localStorage.removeItem('credentials');
              }}>
              Log Out
            </button>
          </div>
        ) : (
          <Link href={'/auth'}>
            <button className='py-1 px-2 border-[1px] rounded-md text-base font-normal bg-orange-400/90 text-white w-full my-2'>
              Register
            </button>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;

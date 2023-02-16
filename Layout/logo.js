import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/logo.png';
const logo = () => {
  return (
    <div>
      <Link href={'/'}>
        <Image
          src={Logo}
          alt='Company Logo'
          width={50}
          height={50}
          className='rounded-full mix-blend-hard-light'
        />
      </Link>
    </div>
  );
};

export default logo;

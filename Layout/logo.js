import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/logo-text.png';
const logo = () => {
  return (
    <div>
      <Link href={'/'}>
        <Image
          src={Logo}
          alt='Company Logo'
          width={60}
          height={60}
          className='rounded-full'
        />
      </Link>
    </div>
  );
};

export default logo;

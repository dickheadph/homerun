import Image from 'next/image';
import Logo from '../public/assets/logo-text.png';
const logo = () => {
  return (
    <div>
      <Image
        src={Logo}
        alt='Company Logo'
        width={60}
        height={60}
        className='rounded-full'
      />
    </div>
  );
};

export default logo;

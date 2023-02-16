import Image from 'next/image';

const CardBanner = (props) => {
  const { name, paragraph, image } = props;
  return (
    <>
      <ul className='h-[200px] w-[350px] my-2'>
        <li className='relative'>
          <div className='absolute bg-gradient-to-b from-transparent to-[#0009] text-white inset-0 p-4 rounded-md'>
            <h1 className='absolute bottom-14 lg:text-base text-sm'>{name}</h1>
            <p className='absolute bottom-2 lg:text-base text-sm'>
              {paragraph}
            </p>
          </div>
          <Image
            src={image}
            alt='Planning'
            width={500}
            height={500}
            className='rounded-md object-cover h-[200px] w-[350px]'
          />
        </li>
      </ul>
    </>
  );
};

export default CardBanner;

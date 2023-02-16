import Image from 'next/image';

const CardBanner = (props) => {
  const { name, paragraph, image } = props;
  return (
    <>
      <ul className='h-[200px] w-[400px] my-3'>
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
            width={1000}
            height={1000}
            className='rounded-md object-fill h-[200px] w-[400px]'
          />
        </li>
      </ul>
    </>
  );
};

export default CardBanner;

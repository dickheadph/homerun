import Image from 'next/image';
import { motion } from 'framer-motion';
const CardFeatures = (props) => {
  const { name, desc, image } = props;
  return (
    <>
      <motion.div
        className='border-[1px] rounded-lg p-3 m-3 bg-amber-50/40 border-orange-200 text-zinc-800 shadow-lg'
        whileHover={{
          scale: 1.05 ,
        }}>
        <Image
          src={image}
          alt={'Image'}
          width={500}
          height={10}
          className='h-[200px] lg:h-[260px] object-cover rounded-md'
          priority={true}
        />
        <div className='my-3'>
          <h1 className='text-lg font-semibold'>{name}</h1>
          <p className='indent-8 text-justify'>{desc}</p>
        </div>
      </motion.div>
    </>
  );
};

export default CardFeatures;

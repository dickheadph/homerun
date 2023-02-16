import Image from 'next/image';
export const Planning = () => {
  return (
    <div className='m-3'>
      <h1 className='text-lg font-semibold py-3'>Planning</h1>
      <div>
        <ul className='flex justify-evenly items-center'>
          <li className='relative'>
            <div className='absolute bg-gradient-to-b from-transparent to-[#0009] text-white inset-0'>
              <h1 className='absolute bottom-5'>Name</h1>
              <p className='absolute bottom-0'>Paragraph</p>
            </div>
            <Image
              src={
                'https://images.unsplash.com/photo-1609262825865-63bcaaf7fd05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYyfHxjb25zdHJ1Y3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              }
              alt='Planning'
              width={350}
              height={100}
              className='rounded-md'
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Planning;

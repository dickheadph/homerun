import CardFeatures from './card-features';
import Architecture from '../public/assets/Architecture.webp';
import Outline from './Shared/Outline';
import Title from './Shared/Title';

const Features = () => {
  return (
    <div className='bg-stone-500/10'>
      <Outline>
        {/* planning, design, construction */}
        <Title title={'Services We Offer'} />
        <ul className='flex justify-evenly lg:flex-nowrap flex-wrap'>
          <li className='p-6'>
            <CardFeatures
              name='Planning'
              image={
                'https://images.unsplash.com/photo-1608303588026-884930af2559?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGFyY2hpdGVjdHVyZSUyMHBsYW5uaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              }
              desc='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            />
          </li>
          <li>
            <CardFeatures
              name='Architecture'
              image={Architecture}
              desc='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            />
          </li>
          <li className='p-6'>
            <CardFeatures
              name='Construction'
              image={
                'https://images.unsplash.com/photo-1575971637203-d6255d9947a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              }
              desc='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            />
          </li>
        </ul>
      </Outline>
    </div>
  );
};

export default Features;

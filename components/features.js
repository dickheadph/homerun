import React from 'react';
import CardFeatures from './card-features';
const Features = () => {
  return (
    <div className='flex flex-wrap justify-center'>
      {/* planning, design, construction */}
      <CardFeatures
        name='Planning'
        desc='We give suggestion lorem ipsom dolor latum.'
      />
      <div className='border-[1px] rounded-lg p-3 m-3'>
        <h1 className='text-center'>Architecture</h1>
        <p>We provide modern design suited to your taste.</p>
      </div>
      <CardFeatures
        name='Construction'
        desc='We turn your plan and desifn into reality lorem ipsom dolor latum.'
      />
    </div>
  );
};

export default Features;

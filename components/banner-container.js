import React from 'react';
import Planning from './Banners/planning-banner';
import Architecture from './Banners/design-banner';
import Construction from './Banners/construction-banner';
import Outline from './Shared/Outline';
import Title from './Shared/Title';
const BannerContainer = () => {
  return (
    <div className='bg-amber-50'>
      <Outline>
        <Title title={'Portfolio'} />
        <div>
          <ul className=''>
            <li>
              <Planning />
            </li>
            <li>
              <Architecture />
            </li>
            <li>
              <Construction />
            </li>
          </ul>
        </div>
      </Outline>
    </div>
  );
};

export default BannerContainer;

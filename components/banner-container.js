import React from 'react';
import Planning from './Banners/planning-banner';
import Architecture from './Banners/design-banner';
import Construction from './Banners/construction-banner';
const BannerContainer = () => {
  return (
    <div>
      <h1 className='font-bold'>BannerContainer</h1>
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
    </div>
  );
};

export default BannerContainer;

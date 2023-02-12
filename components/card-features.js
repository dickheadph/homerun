import React from 'react';

const CardFeatures = (props) => {
  return (
    <div>
      <div className='border-[1px] rounded-lg p-3 m-3'>
        <h1 className='text-center'>{props.name}</h1>
              <p>{ props.desc}</p>
      </div>
    </div>
  );
};

export default CardFeatures;

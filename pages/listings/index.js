import React from 'react';

export async function getStaticProps(context) {
  return {
    props: {
      data: {},
    },
  };
}
function Listings() {
  return <div>Listings</div>;
}

export default Listings;

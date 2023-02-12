import React from 'react';
import Card from '@/components/card';
import tours from '../../data/tours.json';
//import getData from '@/Library/getData';
export async function getStaticProps(context) {
  //const data = await getData();
  return {
    props: {
      tours,
    },
  };
}

const projects = (props) => {
  //console.log(props.tours);
  return (
    <div>
      <h1>Heres your tours</h1>
      {props.tours.map((tour) => {
        return <Card key={tour.id} name={tour.name} />;
      })}
    </div>
  );
};

export default projects;

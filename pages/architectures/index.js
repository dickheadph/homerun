//import getData from '@/Library/getData';
// import tours from '../../data/tours.json';
// import getAll from '../api/hello';
import Head from 'next/head';
import Link from 'next/link';
export async function getStaticProps(context) {
  const response = await fetch('http://localhost:3000/api/hello');
  const data = await response.json();
  console.log(data);
  return {
    props: {
      tours: data,
    },
  };
}
function Designs(props) {
  //console.log(props.tours);
  return (
    <div>
      <Head>
        <title>Homerun: Architectures</title>
      </Head>
      <h1>Heres your tours</h1>
      {props.tours.map((tour) => {
        return (
          <Link key={tour.id} href={{ pathname: `/architectures/${tour.id}` }}>
            <h1>{tour.name}</h1>
          </Link>
        );
      })}
    </div>
  );
}

export default Designs;

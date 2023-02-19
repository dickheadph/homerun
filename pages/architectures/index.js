//import getData from '@/Library/getData';
// import tours from '../../data/tours.json';
// import getAll from '../api/hello';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
const API = process.env.API_ENDPOINT;

export async function getStaticProps(context) {
  const response = await fetch(`${API}/projects`);
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
      <div className='flex flex-wrap'>
        {props.tours.map((tour) => {
          return (
            <Link
              key={tour.id}
              href={{ pathname: `/architectures/${tour.id}` }}>
              <div className=''>
                <h1>{tour.name}</h1>
                <Image
                  src={tour.image}
                  alt={tour.name}
                  height={500}
                  width={500}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Designs;

//import getData from '@/Library/getData';
// import tours from '../../data/tours.json';
// import getAll from '../api/hello';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import Image from 'next/image';
const API = process.env.API_ENDPOINT;
export async function getStaticProps(context) {
  const response = await fetch(`${API}/projects`);
=======
export async function getStaticProps(context) {
  const response = await fetch('http://localhost:3000/api/hello');
>>>>>>> adcc07f0d18946d2bb3f4f9175d73a761f2bf2f4
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

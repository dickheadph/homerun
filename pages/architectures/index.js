import Head from 'next/head';
import Link from 'next/link';
//import getData from '@/Library/getData';
import tours from '../../data/tours.json';

export async function getStaticProps(context) {
  //const data = await axios.get('url');
  //const data = await getData();
  return {
    props: {
      tours,
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

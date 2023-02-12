import { useRouter } from 'next/router';
import Link from 'next/link';
import tours from '../../data/tours.json';
//import getData from '@/Library/getData';

export async function getStaticProps({ params }) {
  //const params = staticRoute.params;

  //const data = await getData();
  // const response = await fetch('http://localhost:3000/api/hello');
  // const data = await response.json();
  return {
    props: {
      tours: tours.find((tour) => {
        return tour.id.toString() === params.id;
      }),
    },
  };
}

export async function getStaticPaths() {
  //const data = await getData();
  const paths = tours.map((tour) => {
    //console.log(paths);
    return {
      params: {
        id: tour.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

function Architectures(props) {
  const router = useRouter();

  return router.isFallback ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Link href={'/architectures'}>
        <button className='py-2 px-3 bg-yellow-200/60 border-[1px] rounded-md'>
          Go back
        </button>
      </Link>
      <h1>{props.tours.name}</h1>
    </div>
  );
}

export default Architectures;

import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const API = process.env.PROD_ENDPOINT;

export async function getStaticProps({ params }) {
  //const params = staticRoute.params;

  const response = await fetch(`${API}/homerun/projects`);
  const data = await response.json();
  console.log(data);
  return {
    props: {
      project: data.find((tour) => {
        return tour._id.toString() === params.id;
      }),
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(`${API}/homerun/projects`);
  const data = await response.json();
  //const data = await getData();
  const paths = data.map((tour) => {
    //console.log(paths);
    return {
      params: {
        id: tour._id.toString(),
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
  //console.log(props.project);

  return router.isFallback ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Head>
        <title>Architecture: {props.project.name}</title>
      </Head>
      <Link href={'/architectures'}>
        <button className='py-2 px-3 bg-yellow-200/60 border-[1px] rounded-md'>
          Go back
        </button>
      </Link>
      <h1>{props.project.name}</h1>
      <p>Auhtored by: {props.project.author}</p>
      <Image
        src={props.project.image}
        alt={props.project.name}
        height={500}
        width={500}
      />
    </div>
  );
}

export default Architectures;

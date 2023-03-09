//import getData from '@/Library/getData';
// import tours from '../../data/tours.json';
// import getAll from '../api/hello';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
const API = process.env.PROD_ENDPOINT;

export async function getStaticProps(context) {
  const response = await fetch(`${API}/homerun/projects`);
  const data = await response.json();
  //console.log(data);
  return {
    props: {
      projects: data,
    },
  };
}

function Designs(props) {
  //console.log(props.projects);
  return (
    <div>
      <Head>
        <title>Homerun: Architectures</title>
      </Head>
      <h1>Heres your tours</h1>
      <div className='flex flex-wrap'>
        {props.projects.map((project) => {
          return (
            <Link
              href={{ pathname: `/architectures/${project.id}` }}
              key={project.id}>
              <div className=''>
                <h1>{project.name}</h1>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={500}
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Designs;

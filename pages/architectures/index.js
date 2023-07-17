//import getData from '@/Library/getData';
// import tours from '../../data/tours.json';
// import getAll from '../api/hello';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
const API = process.env.API_ENDPOINT;

export async function getStaticProps(context) {
  const response = await fetch(`${API}/homerun/projects`);
  const data = await response.json();
  console.log(data);
  return {
    props: {
      projects: data,
    },
  };
}

function Designs(props) {
  //console.log(props.projects);
  return (
    <div className='bg-amber-50'>
      <Head>
        <title>Homerun: Architectures</title>
      </Head>
      <ul className='flex justify-between'>
        <li>Planning</li>
        <li>Planning</li>
        <li>Planning</li>
      </ul>
      <h1>Architectures</h1>
      <div className='flex flex-wrap w-full items-center justify-evenly'>
        {props.projects.map((project) => {
          return (
            <Link
              href={{ pathname: `/architectures/${project.id}` }}
              key={project.id}>
              <div className='justify-evenly border-[1px] border-stone-400 rounded-md'>
                <div className='relative'>
                  <h1 className='absolute text-white bottom-14'>
                    {project.name}
                  </h1>
                </div>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={500}
                    className='object-fit rounded-t-md'
                  />
                )}
                <div className='bg-white rounded-b-md'>
                  <p>Test</p>
                  <p>Test</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Designs;

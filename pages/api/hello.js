// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import tours from '../../data/tours.json';

import Projects from '@/Schema/projectsSchema';

const getAll = async (req, res) => {
  try {
    const project = await Projects.find();
    res.status(200).json(project);
  } catch (error) {
    console.log('Theres an error', error);
  }
};

export default getAll;

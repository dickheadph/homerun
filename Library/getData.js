import tours from '../data/tours.json'
const getData = async () => {
  //const response = await fetch(`http://localhost:3000/api/hello`);
  //http://localhost:3000/api/hello
  //const data = await response.json();
  const data = await tours;
  return data;
};
export default getData;

const getData = async () => {
  const response = await fetch(`http://localhost:3000/api/hello`);
  //http://localhost:3000/api/hello
  const data = await response.json();
  return data.tours;
};
export default getData;

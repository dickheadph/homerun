const Title = (props) => {
  return (
    <>
      <h1 className='text-2xl font-semibold p-3 flex items-center'>
        {props.title}
      </h1>
    </>
  );
};

export default Title;

import { useState } from 'react';

const Login = () => {
  const [hasAcc, setHassAcc] = useState(false);

  const testButton = () => {
    setHassAcc((prevState) => !prevState);
  };
  return (
    <div>
      <h1>{hasAcc ? 'Log in' : 'Sign Up'}</h1>
      <button
        className='py-2 px-3 border-[1px] rounded-md'
        onClick={testButton}>
        Test
      </button>
    </div>
  );
};

export default Login;

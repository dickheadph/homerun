import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
//const API = process.env.API_ENDPOINT;
import Logo from '../../public/assets/logo-text.png';
import Image from 'next/image';
const Login = () => {
  const router = useRouter();
  const [hasAcc, setHassAcc] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: '',
  });

  const { name, email, password, confirmPassword, image } = formData;

  const hasExistingAcc = () => {
    setHassAcc((prevState) => !prevState);
  };

  const onMutate = (e) => {
    let boolean = null;
    if (e.target.value === 'true') {
      boolean = true;
    }
    if (e.target.value === 'false') {
      boolean = false;
    }
    //if file exist
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        image: e.target.files[0],
      }));
    }

    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    //console.log(process.env.API_ENDPOINT);
    setLoading(true);
    if (hasAcc && password !== confirmPassword) {
      alert('Password does not macth');
      setLoading(false);
    } else {
      let url;
      //let fields;
      try {
        if (hasAcc) {
          url = 'https://home-run.onrender.com/homerun/users/sign-up';
          //fields = { name, email, password, confirmPassword, image };
        } else {
          url = 'https://home-run.onrender.com/homerun/users/log-in';
        }
        //console.log({ email, password });
        await axios
          .post(
            url,
            hasAcc
              ? { name, email, password, confirmPassword, image }
              : { email, password },
            {
              headers: {
                'Content-Type': hasAcc
                  ? 'multipart/form-data'
                  : 'application/json',
              },
            }
          )
          .then((res) => {
            setLoading(false);
            if (res.status === 200) {
              ///alert('Logged in succesfully');
              router.push('/');
              const data = {
                accessToken: `${res.data.token}`,
                logId: `${hasAcc ? res.data.newUser.id : res.data.user}`,
              };
              localStorage.setItem('credentials', JSON.stringify(data));
            } else {
              router.push('/auth');
              localStorage.removeItem('jwt');
              localStorage.removeItem('id');
            }
          })
          .catch((err) => {
            console.log('Error logging in. ' + err);
            setLoading(false);
          });
      } catch (error) {
        setLoading(false);
        console.log('User registration failed' + error);
      }
    }
  };
  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div className=' bg-amber-50/50'>
      <div className='flex h-screen justify-center items-start lg:mx-[36%] mx-[6%]'>
        <div className='border-[1px] p-5 rounded-md shadow-lg lg:mt-40 mt-[20%] bg-amber-100/60 w-full'>
          <div
            className='flex justify-center items-center'
            onClick={() => {
              router.push('/');
            }}>
            <Image
              src={Logo}
              alt='Logo'
              height={80}
              width={80}
              className='rounded-full'
            />
          </div>
          <button className='w-full border-[1px] rounded-md py-2 px-3 my-2 bg-white'>
            Google
          </button>
          <h1 className='text-center my-2'>{!hasAcc ? 'Log in' : 'Sign Up'}</h1>
          <form onSubmit={submitHandler} className=''>
            {hasAcc && (
              <label>
                Name
                <br />
                <input
                  className='py-2 px-3 w-full outline-none border-[1px] rounded-md my-2'
                  type='text'
                  id='name'
                  value={name}
                  onChange={onMutate}
                  required
                />
                <br />
              </label>
            )}
            <label>Email</label>
            <br />
            <input
              className='py-2 px-3 w-full outline-none border-[1px] rounded-md my-2'
              type='email'
              id='email'
              value={email}
              onChange={onMutate}
              required
            />
            <br />
            <label>Password</label>
            <br />
            <input
              className='py-2 px-3 w-full outline-none border-[1px] rounded-md my-2'
              type='password'
              id='password'
              value={password}
              onChange={onMutate}
              required
            />
            <br />
            {hasAcc && (
              <div>
                <label>Re-type Password</label>
                <br />
                <input
                  className='py-2 px-3 w-full outline-none border-[1px] rounded-md my-2'
                  type='password'
                  id='confirmPassword'
                  value={confirmPassword}
                  onChange={onMutate}
                  required
                />
                <br />
                <label>User Image</label>
                <br />
                <input
                  className='my-2'
                  type='file'
                  id='image'
                  accept='.png, .jpg, .jpeg'
                  max={1}
                  onChange={onMutate}
                />
                <br />
              </div>
            )}
            <button
              className='py-2 px-3 border-[1px] rounded-md w-full my-2 bg-orange-400/90 text-white'
              onClick={submitHandler}>
              Submit
            </button>
          </form>
          <p className='underline text-right' onClick={hasExistingAcc}>
            {hasAcc ? 'Already have an Account?' : 'No Account?'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

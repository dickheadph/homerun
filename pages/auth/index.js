import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
//const API = process.env.API_ENDPOINT;
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
        //console.log(fields);
        await axios
          .post(
            url,
            hasAcc
              ? { name, email, password, confirmPassword, image }
              : { email, password },
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          )
          .then((res) => {
            setLoading(false);
            console.log(res);
            if (res.data.status === 'success') {
              ///alert('Logged in succesfully');
              router.push('/');
              localStorage.setItem('jwt', res.data.token);
              localStorage.setItem('id', res.data.newUser.id);
            }
          })
          .catch((err) => {
            console.log('Error logging in.' + err);
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
    <div className='items-center'>
      <h1>{!hasAcc ? 'Log in' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        {hasAcc && (
          <label>
            Name
            <br />
            <input
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
              type='file'
              id='image'
              accept='.png, .jpg, .jpeg'
              max={1}
              onChange={onMutate}
            />
            <br />
          </div>
        )}
      </form>
      <button
        className='py-2 px-3 border-[1px] rounded-md'
        onClick={submitHandler}>
        Submit
      </button>
      <button
        className='py-2 px-3 border-[1px] rounded-md'
        onClick={hasExistingAcc}>
        Has Account.
      </button>
    </div>
  );
};

export default Login;

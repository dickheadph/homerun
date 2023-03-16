import axios from 'axios';

const isAuthenticated = async () => {
  const cred = JSON.parse(localStorage.getItem('credentials'));
  // const router = useRouter();
  // const [profile, setProfile] = useState([]);
  // const [hasAcc, setHasAcc] = useState(false);

  if (!cred) {
    return null;
  } else {
    try {
      const user = await axios.get(
        `https://home-run.onrender.com/homerun/profile/${cred.logId}`,
        {
          headers: {
            Authorization: `Bearer ${cred.accessToken}`,
          },
        }
      );
      return user;
    } catch (error) {
      console.log(error);
    }
  }
};

export default isAuthenticated;

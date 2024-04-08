import { useContext } from 'react';
import { Notification } from 'utils/Notification/Notification';
import { MyContext } from 'components/App';

const Home = () => {
  const { isNotifi, setIsNotyfi } = useContext(MyContext);

  return (
    <>
      <Notification isNotifi={isNotifi} setIsNotyfi={setIsNotyfi} />
    </>
  );
};

export default Home;

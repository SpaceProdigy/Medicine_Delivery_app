import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Notification } from 'utils/Notification/Notification';
import { MyContext } from 'components/App';

const Home = () => {
  const dispatch = useDispatch();

  const { isNotifi, setIsNotyfi } = useContext(MyContext);

  return (
    <>
      {/* <Loader /> */}

      <Notification isNotifi={isNotifi} setIsNotyfi={setIsNotyfi} />
    </>
  );
};

export default Home;

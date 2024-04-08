import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Notification } from 'utils/Notification/Notification';
import { MyContext } from 'components/App';
import { EmptyComponent } from 'pages/Cart/EmptyComponent/EmptyComponent';

const Home = () => {
  const dispatch = useDispatch();

  const { isNotifi, setIsNotyfi } = useContext(MyContext);

  return (
    <>
      <Notification isNotifi={isNotifi} setIsNotyfi={setIsNotyfi} />
    </>
  );
};

export default Home;

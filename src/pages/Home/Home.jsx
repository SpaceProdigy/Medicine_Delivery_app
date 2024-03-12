import { Main } from './Home.styled';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { List } from 'components/List/List';
import { useEffect } from 'react';
import { fetchDrugsThunk } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectDrugs } from '../../redux/drugsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectDrugs);

  useEffect(() => {
    dispatch(fetchDrugsThunk());
  }, [dispatch]);
  return (
    <>
      <Main>
        <Sidebar />
        <List data={data} />
      </Main>
    </>
  );
};

export default Home;

import { useContext, useEffect, useState } from 'react';
import { MyContext } from 'components/App';
import { useLocation } from 'react-router-dom';

// FRAMER MOTION
import { AnimatePresence } from 'framer-motion';

// MUI
import { Fade, Pagination } from '@mui/material';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import {
  selectProducts,
  selectProductsLoading,
} from '../../redux/productsSlice';
import { fetchProductsThunk } from '../../redux/productsOperations';

// COMPONENTS
import { Notification } from 'utils/Notification/Notification';
import ProductCard from 'components/Card/Card';
import {
  MainContainer,
  MotionItemStyled,
  MotionListStyled,
} from './Shop.styled';
import { AccordionComponent } from 'components/Accordion/Accordion';
import { Loader } from 'components/Loader/Loader';

const Shop = () => {
  const [page, setPage] = useState(1);
  const { isNotifi, setIsNotyfi, play } = useContext(MyContext);

  const dispatch = useDispatch();
  const data = useSelector(selectProducts);
  const isLoading = useSelector(selectProductsLoading);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('shop/categories')) {
      dispatch(fetchProductsThunk());
    } else {
      dispatch(fetchProductsThunk([...location.pathname].slice(6).join('')));
    }
  }, [dispatch, location.pathname]);

  return (
    <MainContainer>
      <AccordionComponent />

      <MotionListStyled>
        <AnimatePresence>
          {isLoading ? (
            <div
              style={{
                flex: 1,
              }}
            >
              <Loader />
            </div>
          ) : (
            data
              .slice(page === 1 ? 0 : page * 5 - 5, page * 5)
              ?.map(({ title, id, price, rating, description, image }) => (
                <MotionItemStyled
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={id}
                >
                  <ProductCard
                    key={id}
                    image={image}
                    description={description}
                    title={title}
                    price={price}
                    rating={rating}
                    id={id}
                  />
                </MotionItemStyled>
              ))
          )}
        </AnimatePresence>

        <Fade in={!isLoading && data.length > 0}>
          <Pagination
            color="secondary"
            count={
              Math.floor(data.length / 5) > 0 ? Math.floor(data.length / 5) : 1
            }
            onChange={(_, page) => {
              setPage(page);
              play();
            }}
          />
        </Fade>
      </MotionListStyled>

      <Notification isNotifi={isNotifi} setIsNotyfi={setIsNotyfi} />
    </MainContainer>
  );
};

export default Shop;

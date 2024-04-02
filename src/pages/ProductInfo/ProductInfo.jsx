import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MyContext } from 'components/App';

// MUI
import { Box, Typography } from '@mui/material';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByIdThunk } from '../../redux/productsOperations';
import {
  selectProductById,
  selectProductsLoading,
} from '../../redux/productsSlice';
import { selectfavorite, toggleFavorite } from '../../redux/localOperation';

// COMPONENTS
import { StyledImage, StyledInfoProduct } from './ProductInfo.styled';
import { ComponentRating } from './Rating/Raiting';
import { Loader } from 'components/Loader/Loader';
import { FavoriteButton } from 'components/FavoriteButton/FavoriteButton';
import { AddButton } from './AddButton/AddButton';
import { Notification } from 'utils/Notification/Notification';

const ProductInfo = () => {
  const location = useLocation();
  const product = useSelector(selectProductById);
  const isLoading = useSelector(selectProductsLoading);

  const favorite = useSelector(selectfavorite);
  const dispatch = useDispatch();

  const { play, theme, isNotifi, setIsNotyfi } = useContext(MyContext);

  useEffect(() => {
    dispatch(fetchProductsByIdThunk(location.pathname.slice(9)));
  }, [dispatch, location.pathname]);
  return (
    <>
      <StyledInfoProduct>
        {isLoading ? (
          <div
            style={{
              flex: 1,
            }}
          >
            <Loader />
          </div>
        ) : (
          <>
            {product && (
              <Box sx={{ maxWidth: 400 }}>
                <Typography variant="h6" textAlign="center" component="h1">
                  {product.title}
                </Typography>
                <Box sx={{ position: 'relative' }}>
                  <FavoriteButton
                    favorite={favorite}
                    dispatch={dispatch}
                    toggleFavorite={toggleFavorite}
                    id={product.id}
                    play={play}
                  />
                  <StyledImage src={product?.image} />
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 1,
                  }}
                >
                  <Typography variant="h5" color="#008000">
                    {product?.price}$
                  </Typography>
                  <ComponentRating product={product} theme={theme} />
                </Box>
                <AddButton
                  play={play}
                  id={product.id}
                  title={product.title}
                  dispatch={dispatch}
                />
                <Typography variant="body1" style={{ marginTop: 15 }}>
                  {product.description}
                </Typography>
              </Box>
            )}
          </>
        )}
        <Notification isNotifi={isNotifi} setIsNotyfi={setIsNotyfi} />
      </StyledInfoProduct>
    </>
  );
};

export default ProductInfo;

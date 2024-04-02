import { Fade, Typography } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { ButtonStyled, WrapperIcons } from './AddButton.styled.';
import { handleAdd } from '../hendleAdd';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { MyContext } from 'components/App';
import { selectProductsIdArr } from '../../../redux/localOperation';

export const AddButton = ({ play, id, title, dispatch }) => {
  const selectedArr = useSelector(selectProductsIdArr);
  const { setIsNotyfi } = useContext(MyContext);
  return (
    <ButtonStyled
      size="large"
      color="secondary"
      onClick={() => {
        handleAdd({ selectedArr, id, title }, dispatch, setIsNotyfi);
        play();
      }}
    >
      <Typography> Cart</Typography>

      <WrapperIcons>
        <Fade
          in={selectedArr.includes(id)}
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <div style={{ transition: 'all 1s ease' }}>
            <ShoppingCartCheckoutIcon fontSize="medium" />
          </div>
        </Fade>
        <Fade in={selectedArr.includes(id) === false}>
          <div style={{ transition: 'all 1s ease' }}>
            <AddShoppingCartOutlinedIcon fontSize="medium" />
          </div>
        </Fade>
      </WrapperIcons>
    </ButtonStyled>
  );
};

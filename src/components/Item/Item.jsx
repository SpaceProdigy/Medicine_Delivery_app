import {
  Accent,
  ActiveIngredient,
  Drug,
  Image,
  ImageWrapper,
  InfoWrapper,
  IngredientsWrapper,
  Link,
  Price,
  PriceWrapper,
  Title,
  Wrapper,
} from './Item.styled';

import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import stub from './../../images/stub.png';
import { useDispatch, useSelector } from 'react-redux';
import { choseDrugsThunk } from '../../redux/operations';
import { selectChoseDrugs } from '../../redux/drugsSlice';
import {
  CustomNotification,
  notification,
} from 'components/utils/notification';
import { ButtonAdd } from 'components/ButtonAdd/ButtonAdd';

const notyConfig = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
  transition: Slide,
};

export const Item = ({ id, title, price, activeIngredient }) => {
  const dispatch = useDispatch();
  const drugsChoseArr = useSelector(selectChoseDrugs);
  console.log(drugsChoseArr);
  const handleAddDrugs = async drugId => {
    if (!drugsChoseArr.includes(drugId)) {
      dispatch(choseDrugsThunk(drugId));
      toast.success('Product added to cart.', notyConfig);
    } else {
      toast.info('The item is already in the cart.', notyConfig);
    }
  };

  return (
    <>
      <Drug>
        <ImageWrapper>
          <Image src={stub} />
        </ImageWrapper>

        <Wrapper>
          <Link to={`/drugInfo/${id}`}>
            <Title>{title}</Title>
          </Link>
          <InfoWrapper>
            <IngredientsWrapper>
              <Accent>Active ingredient:</Accent>
              <ActiveIngredient>{activeIngredient}</ActiveIngredient>
            </IngredientsWrapper>

            <PriceWrapper>
              <Price>Price: {price.toFixed(2)}$</Price>
              <ButtonAdd onClick={() => handleAddDrugs(id)} />
            </PriceWrapper>
          </InfoWrapper>
        </Wrapper>
      </Drug>
      <CustomNotification message="This is an info notification!" type="info" />
    </>
  );
};

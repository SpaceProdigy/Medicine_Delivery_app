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
import { nanoid } from 'nanoid';
import stub from './../../images/stub.png';
import { useDispatch, useSelector } from 'react-redux';
import { choseDrugsThunk } from '../../redux/operations';
import { selectChoseDrugs } from '../../redux/drugsSlice';
import { ButtonAdd } from 'components/ButtonAdd/ButtonAdd';
import { useContext } from 'react';
import { MyContext } from 'components/App';

export const Item = ({ id, title, price, activeIngredient }) => {
  const dispatch = useDispatch();
  const drugsChoseArr = useSelector(selectChoseDrugs);
  const { isNotifi, setIsNotyfi } = useContext(MyContext);
  console.log(isNotifi);
  const handleAddDrugs = async drugId => {
    if (!drugsChoseArr.includes(drugId)) {
      dispatch(choseDrugsThunk(drugId));
      setIsNotyfi(prevState => {
        if (prevState?.length >= 5) {
          return prevState;
        }
        return [
          ...prevState,
          {
            message: 'Product added to cart.',
            type: 'success',
            visible: true,
            id: nanoid(),
          },
        ];
      });
    } else {
      setIsNotyfi(prevState => {
        if (prevState?.length >= 5) {
          return prevState;
        }
        return [
          ...prevState,
          {
            message: 'The item is already in the cart.',
            type: 'info',
            visible: true,
            id: nanoid(),
          },
        ];
      });
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
    </>
  );
};

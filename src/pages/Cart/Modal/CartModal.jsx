import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// HOOK_FORM||YUP
import { yupResolver } from '@hookform/resolvers/yup';
import { cardSchema } from '../YupShema';
import { useForm } from 'react-hook-form';

// REDUX
import { useDispatch } from 'react-redux';
import {
  updateHistory,
  updateInputs,
  updateOrder,
} from '../../../redux/localOperation';

// MUI
import {
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
  OutlinedInput,
} from '@mui/material';

// ICONS
import CloseIcon from '@mui/icons-material/Close';
import PaymentIcon from '@mui/icons-material/Payment';

// COMPONENTS
import { CardPay } from 'components/CardPay/CardPay';
import {
  StyledFormControl,
  Wrapper,
  WrapperButtonClose,
  WrapperInputs,
  WrapperSelect,
} from './CartModal.styled';
import { ButtonSabmit } from 'components/ButtonSabmit/ButtonSabmit';
import { Total } from '../Total/Total';
import GooglePayButton from '../GooglePayButton/GooglePayButton';

const monthsArr = Array.from(
  { length: 12 },
  (_, index) => `${index < 9 ? 0 : ''}${index + 1}`
);
const yearsArr = Array.from(
  { length: 10 },
  (_, index) => new Date().getFullYear() + index
);

export const CartModal = ({
  isModal,
  setIsModal,
  play,
  setIsPaid,
  isPaid,
  isDiscount,
  totalPrice,
  products,
  theme,
  orderSubmit,
  setOrderSubmit,
  setNewOrder,
}) => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cardSchema),
    mode: 'onBlur',
  });

  const onSubmitCard = data => {
    setIsPaid(data);
    const keys = Object.keys(orderSubmit);
    const orderedObjects = products?.filter(({ id }) =>
      keys.includes(String(id))
    );
    dispatch(
      updateHistory({
        isPaid,
        orderedObjects,
        orderInputs: orderSubmit,
        totalPrice,
        totalPriceWithDiscount: isDiscount
          ? ` ${(totalPrice * (1 - isDiscount.discount / 100)).toFixed(2)} $`
          : null,
        isDiscount,
      })
    );

    reset();
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    play();
  };

  const handleChange = event => {
    event.target.name === 'cardMonth'
      ? setMonth(event.target.value)
      : setYear(event.target.value);
  };

  const handleChangeNumber = event => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/\D/g, '');

    if (inputValue.length > 16) {
      inputValue = inputValue.slice(0, 16);
    }
    inputValue = inputValue.replace(/(\d{4})(?=\d)/g, '$1 ');

    setNumber(inputValue);
  };

  const handleChangeName = event => {
    let inputValue = event.target.value;

    inputValue = inputValue.replace(/[^a-zA-Z]\s/g, '');

    if (inputValue.length > 30) {
      inputValue = inputValue.slice(0, 30);
    }

    setName(inputValue);
  };

  return (
    <Modal
      open={isModal}
      onClose={() => {
        setIsModal(false);
        play();
        if (isPaid) {
          navigate('/history');
          setIsPaid(null);
          setNewOrder([]);
          dispatch(updateOrder([]));
          dispatch(updateInputs([]));
          setOrderSubmit(null);
        }
      }}
    >
      {!isPaid ? (
        <Wrapper>
          <WrapperButtonClose>
            <IconButton
              onClick={() => {
                setIsModal(false);
                play();
              }}
            >
              <CloseIcon color="secondary" />
            </IconButton>
          </WrapperButtonClose>

          <CardPay
            month={month}
            year={year}
            name={name}
            number={number}
            cvv={cvv}
            isFlipped={isFlipped}
            setIsFlipped={setIsFlipped}
            handleClick={handleClick}
          />

          <WrapperInputs onSubmit={handleSubmit(onSubmitCard)}>
            <StyledFormControl fullWidth>
              <InputLabel color="info" htmlFor="cardNumber">
                Card number
              </InputLabel>
              <OutlinedInput
                {...register('cardNumber')}
                id="cardNumber"
                color="info"
                name="cardNumber"
                label="Card number"
                placeholder="Enter your number card"
                value={number}
                onChange={handleChangeNumber}
              />
              <FormHelperText style={{ height: 30, color: '#B22222' }}>
                {errors?.cardNumber?.message}
              </FormHelperText>
            </StyledFormControl>

            <StyledFormControl fullWidth>
              <InputLabel color="info" htmlFor="cardName">
                Name on card
              </InputLabel>
              <OutlinedInput
                {...register('cardName')}
                id="cardName"
                color="info"
                name="cardName"
                label="Name on card"
                placeholder="Enter name on card"
                value={name}
                onChange={handleChangeName}
              />
              <FormHelperText style={{ height: 30, color: '#B22222' }}>
                {errors?.cardName?.message}
              </FormHelperText>
            </StyledFormControl>

            <WrapperSelect>
              <StyledFormControl fullWidth>
                <InputLabel htmlFor="cardMonth" color="info">
                  Month
                </InputLabel>
                <Select
                  {...register('cardMonth')}
                  color="info"
                  name="cardMonth"
                  label="Month"
                  id="cardMonth"
                  value={month}
                  onChange={handleChange}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        background: theme.palette.background.default,
                      },
                    },
                  }}
                >
                  {monthsArr.map(number => (
                    <MenuItem key={number} value={number}>
                      {number}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText style={{ height: 30, color: '#B22222' }}>
                  {errors?.cardMonth?.message}
                </FormHelperText>
              </StyledFormControl>
              <StyledFormControl fullWidth>
                <InputLabel htmlFor="cardYear" color="info">
                  Year
                </InputLabel>

                <Select
                  color="info"
                  {...register('cardYear')}
                  name="cardYear"
                  id="cardYear"
                  value={year}
                  label="Year"
                  onChange={handleChange}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        background: theme.palette.background.default,
                      },
                    },
                  }}
                >
                  {yearsArr.map(number => (
                    <MenuItem key={number} value={number}>
                      {number}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText error>
                  {errors?.cardYear?.message}
                </FormHelperText>
              </StyledFormControl>

              <StyledFormControl fullWidth>
                <InputLabel color="info" htmlFor="cardCVV">
                  CVV
                </InputLabel>
                <OutlinedInput
                  {...register('cardCVV')}
                  id="cardCVV"
                  color="info"
                  name="cardCVV"
                  label="CVV"
                  placeholder="code"
                  onChange={e => setCvv(e.target.value)}
                  onInput={e => {
                    e.target.value =
                      Math.max(1, Math.min(9999, parseInt(e.target.value))) ||
                      '';
                  }}
                  value={cvv}
                />
                <FormHelperText style={{ height: 30, color: '#B22222' }}>
                  {errors?.cardCVV?.message}
                </FormHelperText>
              </StyledFormControl>
            </WrapperSelect>
            <ButtonSabmit name={'Pay'} icon={<PaymentIcon />} play={play} />
            <div style={{ marginTop: 10, width: '100%' }}>
              <GooglePayButton
                orderSubmit={orderSubmit}
                isDiscount={isDiscount}
                totalPrice={totalPrice}
                play={play}
                setIsPaid={setIsPaid}
                isPaid={isPaid}
                products={products}
              />
            </div>
          </WrapperInputs>
          <div style={{ marginTop: 10 }}>
            <Total isDiscount={isDiscount} totalPrice={totalPrice} />
          </div>
        </Wrapper>
      ) : (
        <Wrapper>
          <WrapperButtonClose>
            <IconButton
              onClick={() => {
                setIsModal(false);
                play();
                if (isPaid) {
                  navigate('/history');
                  setIsPaid(null);
                  setNewOrder([]);
                  dispatch(updateOrder([]));
                  dispatch(updateInputs([]));
                  setOrderSubmit(null);
                }
              }}
            >
              <CloseIcon color="secondary" />
            </IconButton>
          </WrapperButtonClose>
          <Typography variant="h5">Congratulations</Typography>
          <Typography variant="subtitle2">
            Your order is successfully placed, expect delivery.
          </Typography>
        </Wrapper>
      )}
    </Modal>
  );
};

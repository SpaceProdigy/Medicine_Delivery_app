import { useContext, useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use-size';

// UTILS
import { isEqual } from 'utils/isEqual';

// REACT-HOOK-FORM/YUP
import { useForm } from 'react-hook-form';
import { schema } from './YupShema';
import { yupResolver } from '@hookform/resolvers/yup';

// MUI
import { Box } from '@mui/material';

// FRAMER_MOTION
import { AnimatePresence } from 'framer-motion';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { selectCartProducts } from '../../redux/productsSlice';
import { fetchCartProductThunk } from '../../redux/productsOperations';
import { selectInputs, updateInputs } from '../../redux/localOperation';

// CONTEXT
import { MyContext } from 'components/App';

// COMPONENTS
import { CartWrapper, MotionList, SectionCart } from './Cart.styled';
import { EmptyComponent } from './EmptyComponent/EmptyComponent';
import { ContactInfo } from './ContactInfo/ContactInfo';
import { CartItem } from './CartItem/CartItem';
import { PromoCode } from './PromoCode/PromoCode';
import { Total } from './Total/Total';
import { CartModal } from './Modal/CartModal';
import { ButtonSabmit } from 'components/ButtonSabmit/ButtonSabmit';

const Cart = () => {
  const { setNewOrder, selectedProductsIds } = useContext(MyContext);
  const dispatch = useDispatch();
  const selectedProducts = useSelector(selectCartProducts);
  const inputsValue = useSelector(selectInputs);
  const [isPaid, setIsPaid] = useState(null);
  const [updatedSchema, setUpdatedSchema] = useState(schema);
  const [activeProductId, setActiveProductid] = useState();
  const [products, setProducts] = useState(selectedProducts ?? []);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isDiscount, setIsDiscount] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [orderSubmit, setOrderSubmit] = useState(null);

  const { play, theme } = useContext(MyContext);

  const { height, width } = useWindowSize();

  useEffect(() => {
    setProducts(selectedProducts);
  }, [selectedProducts]);

  useEffect(() => {
    if (selectedProducts.length === products.length) {
      const newOrder = products.map(({ id }) => id);

      setNewOrder(newOrder);
    }
  }, [products, selectedProducts, setNewOrder]);

  useEffect(() => {
    if (selectedProductsIds.length > 0) {
      dispatch(fetchCartProductThunk(selectedProductsIds));
    } else {
      dispatch(fetchCartProductThunk([]));
    }
  }, [dispatch, selectedProductsIds]);

  useEffect(() => {
    setProducts(selectedProducts);
  }, [selectedProducts]);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(updatedSchema),
    defaultValues: inputsValue ?? {},
  });

  const actualInputs = watch();
  const prevInputsRef = useRef(actualInputs);

  useEffect(() => {
    if (!isEqual(actualInputs, prevInputsRef.current)) {
      dispatch(updateInputs(actualInputs));
      prevInputsRef.current = actualInputs;
    }
  }, [actualInputs, dispatch]);

  const onSubmit = data => {
    setIsModal(true);
    setOrderSubmit(data);
  };

  const handleDeselect = event => {
    if (Number(event.target.id) !== activeProductId) {
      setActiveProductid(false);
    }
  };

  const total = products.reduce(
    (acc, { id, price }) => acc + Number(watch()[id]) * price,
    0
  );

  useEffect(() => {
    setTotalPrice(total);
  }, [total]);

  return (
    <>
      <SectionCart>
        <AnimatePresence>
          {selectedProductsIds?.length > 0 ? (
            <CartWrapper onSubmit={handleSubmit(onSubmit)}>
              <ContactInfo
                register={register}
                errors={errors}
                control={control}
              />

              <MotionList
                onClick={event => handleDeselect(event)}
                axis="y"
                onReorder={setProducts}
                values={products}
                layoutScroll
              >
                {products?.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    dispatch={dispatch}
                    selectedProductsIds={selectedProductsIds}
                    setActiveProductid={setActiveProductid}
                    activeProductId={activeProductId}
                    theme={theme}
                    play={play}
                    register={register}
                    errors={errors}
                    setUpdatedSchema={setUpdatedSchema}
                  />
                ))}
              </MotionList>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  margin: '0 0 40px 0',
                  gap: 1,
                  width: '100%',
                }}
              >
                <ButtonSabmit play={play} />

                <Total isDiscount={isDiscount} totalPrice={totalPrice} />

                <PromoCode
                  register={register}
                  watch={watch}
                  setIsDiscount={setIsDiscount}
                />
              </Box>
            </CartWrapper>
          ) : (
            <EmptyComponent />
          )}
        </AnimatePresence>
      </SectionCart>
      {isPaid && (
        <Confetti
          key={isPaid ? 'confettiKeyOn' : 'confettiKeyOff'}
          run={isPaid}
          width={width}
          height={height * 2}
        />
      )}
      <CartModal
        products={products}
        play={play}
        setIsModal={setIsModal}
        isModal={isModal}
        setIsPaid={setIsPaid}
        isPaid={isPaid}
        isDiscount={isDiscount}
        totalPrice={totalPrice}
        theme={theme}
        orderSubmit={orderSubmit}
        setOrderSubmit={setOrderSubmit}
        setNewOrder={setNewOrder}
      />
    </>
  );
};

export default Cart;

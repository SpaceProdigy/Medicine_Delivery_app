import { useContext, useEffect, useRef, useState } from 'react';

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
import {
  selectCartProducts,
  selectProductsLoading,
} from '../../redux/productsSlice';
import { fetchCartProductThunk } from '../../redux/productsOperations';

// COMPONENTS
import {
  ButtonSabmit,
  CartWrapper,
  MotionList,
  SectionCart,
} from './Cart.styled';
import { EmptyComponent } from './EmptyComponent/EmptyComponent';
import { ContactInfo } from './ContactInfo/ContactInfo';

import { CartItem } from './CartItem/CartItem';

// CONTEXT
import { MyContext } from 'components/App';

// ICONS
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { PromoCode } from './PromoCode/PromoCode';
import { Total } from './Total/Total';
import { useNavigate } from 'react-router-dom';
import GooglePayButton from './GooglePayButton/GooglePayButton';
import {
  selectInputs,
  updateHistory,
  updateInputs,
  updateOrder,
} from '../../redux/localOperation';
import { isEqual } from 'utils/Notification/isEqual';
import { Loader } from 'components/Loader/Loader';

const Cart = () => {
  const { setNewOrder, selectedProductsIds } = useContext(MyContext);
  const dispatch = useDispatch();
  const selectedProducts = useSelector(selectCartProducts);
  const inputsValue = useSelector(selectInputs);
  const isLoading = useSelector(selectProductsLoading);

  const [updatedSchema, setUpdatedSchema] = useState(schema);
  const [activeProductId, setActiveProductid] = useState();
  const [products, setProducts] = useState(selectedProducts ?? []);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isDiscount, setIsDiscount] = useState(null);
  const { play, theme } = useContext(MyContext);
  const navigate = useNavigate();

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
    reset,
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
    const keys = Object.keys(data);
    const orderedObjects = products.filter(({ id }) =>
      keys.includes(String(id))
    );
    dispatch(
      updateHistory({
        orderedObjects,
        orderInputs: data,
        totalPrice,
        totalPriceWithDiscount: isDiscount
          ? ` ${(totalPrice * (1 - isDiscount.discount / 100)).toFixed(2)} $`
          : null,
        isDiscount,
      })
    );
    setNewOrder([]);
    dispatch(updateOrder([]));
    dispatch(updateInputs([]));
    reset();
    navigate('/history');
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
        {!isLoading ? (
          <>
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
                  <AnimatePresence>
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
                  </AnimatePresence>
                </MotionList>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '0 0 40px 0',
                    gap: 1,
                    width: '100%',
                  }}
                >
                  <GooglePayButton
                    isDiscount={isDiscount}
                    totalPrice={totalPrice}
                    navigate={navigate}
                    play={play}
                  />
                  <ButtonSabmit
                    variant="contained"
                    size="large"
                    type="submit"
                    onClick={play}
                  >
                    Order
                    <LocalMallIcon />
                  </ButtonSabmit>
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
          </>
        ) : (
          <Loader />
        )}
      </SectionCart>
    </>
  );
};

export default Cart;

import { forwardRef, useEffect } from 'react';
import * as yup from 'yup';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Typography,
} from '@mui/material';

import {
  ButtonClose,
  MotionButtonReorder,
  MotionItem,
  StyledInput,
  StyledLink,
  Title,
  Wrapper,
} from './CartItem.styled';

// ICONS
import { IoIosClose } from 'react-icons/io';
import { TbBorderNone } from 'react-icons/tb';
import stub from '../../../images/stub.png';

// REDUX
import { deleteProductIds } from '../../../redux/localOperation';

export const CartItem = forwardRef(function CartItem(
  {
    item,
    dispatch,
    selectedProductsIds,
    setActiveProductid,
    activeProductId,
    theme,
    play,
    errors,
    register,
    setUpdatedSchema,
  },
  ref
) {
  const handleDeleteItem = id => {
    if (selectedProductsIds?.length > 0) {
      dispatch(deleteProductIds(id));
      play();
    }
  };

  const handleMouseDown = id => {
    if (id === activeProductId) {
      return;
    }
    setActiveProductid(id);
    play();
  };

  useEffect(() => {
    setUpdatedSchema(prevSchema => {
      const newSchema = yup.object().shape({
        ...prevSchema.fields,
        [item.id]: yup
          .string()
          .required('Quantity is a required field')
          .test(
            'is-number-and-range',
            'Quantity must be a number between 1 and 99',
            value => {
              if (!isNaN(value) && Number(value) >= 1 && Number(value) <= 99) {
                return true;
              } else {
                return false;
              }
            }
          ),
      });
      return newSchema;
    });
  }, [item.id, setUpdatedSchema]);

  return (
    <MotionItem
      id={item.id}
      isactive={activeProductId === item.id ? 'true' : undefined}
      value={item}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ButtonClose type="button" onClick={() => handleDeleteItem(item.id)}>
        <IoIosClose color={theme.palette.secondary.main} size={25} />
      </ButtonClose>
      <MotionButtonReorder
        type="button"
        whileTap={{ scale: 0.7 }}
        onMouseDown={() => handleMouseDown(item.id)}
      >
        <TbBorderNone
          id={item.id}
          color={
            activeProductId === item.id ? 'green' : theme.palette.secondary.main
          }
          size={20}
        />
      </MotionButtonReorder>
      <div
        style={{
          backgroundImage: `url(${item?.image ?? stub})`,
          width: 70,

          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        alt={item.title}
      />
      <Wrapper id={item.id}>
        <Title variant="subtitle1" component="h2" fontWeight={500}>
          <StyledLink to={`/product/${item.id}`}> {item.title}</StyledLink>
        </Title>

        <Typography variant="h6" component="div" id={item.id} fontWeight={500}>
          {item.price.toFixed(2)}$
        </Typography>
        <FormControl>
          <InputLabel
            id={`${item.title}Lable`}
            size="small"
            color="success"
            htmlFor={item.title}
          >
            Quantity
          </InputLabel>
          <StyledInput
            ref={ref}
            size="small"
            id={`${item.title}Input`}
            label="Quantity"
            name={`${item.title}`}
            color="success"
            onInput={e => {
              e.target.value =
                Math.max(1, Math.min(99, parseInt(e.target.value))) || '';
            }}
            defaultValue={1}
            {...register(String(item.id))}
          />
          <FormHelperText
            sx={{
              height: 40,
              overflowY: 'auto',
              '&::-webkit-scrollbar': {
                width: '5px',
              },
              '::-webkit-scrollbar-thumb': {
                borderRadius: '5px',
              },
            }}
            id={`${item.title}Error`}
            error
          >
            {errors[item.id]?.message}
          </FormHelperText>
        </FormControl>
      </Wrapper>
    </MotionItem>
  );
});

import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import { coupons } from '../../../COUPONS';
import { StyledInput } from './PromoCode.styled';
import { useEffect, useState } from 'react';

export const PromoCode = ({ watch, register, setIsDiscount }) => {
  const [isInput, setIsInput] = useState(true);

  const isValid = coupons.find(
    ({ couponsKey }) => couponsKey === watch().promoCode
  );

  useEffect(() => {
    setIsDiscount(isValid);
  }, [isValid, setIsDiscount]);

  const handleInput = e => {
    setIsInput(e.target.value === '');

    return (e.target.value =
      e.target.value.length > 30
        ? e.target.value.slice(0, 30).replace(/\s/g, '')
        : e.target.value.replace(/\s/g, ''));
  };

  return (
    <>
      <FormControl sx={{ width: '100%', marginTop: 2, maxWidth: 400 }}>
        <InputLabel
          id={`promoCodeLabel`}
          style={{
            color:
              !isInput &&
              (!isValid && watch().promoCode?.length > 0
                ? '#d32f2f'
                : isValid
                ? '#2e7d32'
                : '#666'),
          }}
          size="normal"
          color={!!isValid ? 'success' : 'info'}
        >
          Promo Code
        </InputLabel>
        <StyledInput
          label="Promo Code"
          placeholder="Enter your promo code."
          color={!!isValid ? 'success' : 'info'}
          onInput={handleInput}
          size="medium"
          isvalid={!!isValid ? 'true' : undefined}
          error={!isValid && watch().promoCode?.length > 0}
          {...register('promoCode')}
        />

        <FormHelperText
          id={`promoCode`}
          style={{ color: isValid && '#008000', height: 20 }}
          error={!isValid && watch().promoCode?.length > 0}
        >
          {!isValid && watch().promoCode?.length > 0 && " Discount is't valid"}
          {isValid && `Discount ${isValid?.discount}%`}
        </FormHelperText>
      </FormControl>
    </>
  );
};

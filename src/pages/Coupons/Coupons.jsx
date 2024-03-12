import { useState } from 'react';
import { coupons } from 'COUPONS';
import {
  CouponsItem,
  CouponsList,
  CouponsSection,
  Text,
  TextDiscount,
  TextKey,
} from './Coupons.styled';

const Coupons = () => {
  const [copyText, setCopyText] = useState(false);
  const [copyDiscount, setCopyDiscount] = useState(null);

  const handleCopyText = text => {
    try {
      navigator.clipboard.writeText(text);
      setCopyText(true);
      setCopyDiscount(text);
      setTimeout(() => {
        setCopyText(false);
      }, 2000);
    } catch (error) {
      setCopyText(false);
      setCopyDiscount(null);
      console.error('Error to copy', error.message);
    }
  };

  return (
    <CouponsSection>
      <CouponsList>
        {coupons.map(({ id, discount, couponsKey }) => (
          <CouponsItem
            key={id}
            $isCopy={copyText && couponsKey === copyDiscount}
            onClick={() => handleCopyText(couponsKey)}
          >
            <Text>Discount</Text>
            <TextDiscount>{discount}%</TextDiscount>
            <TextKey>{couponsKey}</TextKey>
          </CouponsItem>
        ))}
      </CouponsList>
    </CouponsSection>
  );
};

export default Coupons;

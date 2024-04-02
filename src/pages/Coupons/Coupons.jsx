import { useState } from 'react';
import { coupons } from 'COUPONS';
import {
  CouponsItem,
  CouponsList,
  CouponsSection,
  MotionItem,
  Text,
  TextDiscount,
  TextKey,
} from './Coupons.styled';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Coupons = () => {
  const [iscopyText, setISCopyText] = useState(false);
  const [copyDiscount, setCopyDiscount] = useState(null);

  const handleCopyText = text => {
    try {
      setISCopyText(true);
      setCopyDiscount(text);
      setTimeout(() => {
        setISCopyText(false);
      }, 2000);
    } catch (error) {
      setISCopyText(false);
      setCopyDiscount(null);
      console.error('Error to copy', error.message);
    }
  };

  return (
    <CouponsSection>
      <CouponsList>
        {coupons.map(({ id, discount, couponsKey }) => (
          <CopyToClipboard
            key={id}
            text={couponsKey}
            onCopy={() => handleCopyText(couponsKey)}
          >
            <MotionItem
              whileTap={{ scale: 0.8 }}
              $isCopy={iscopyText && couponsKey === copyDiscount}
            >
              <Text variant="h6" component="div">
                Discount
              </Text>
              <TextDiscount variant="h6" component="div">
                {discount}%
              </TextDiscount>
              <TextKey variant="button" component="div">
                {couponsKey}
              </TextKey>
            </MotionItem>
          </CopyToClipboard>
        ))}
      </CouponsList>
    </CouponsSection>
  );
};

export default Coupons;

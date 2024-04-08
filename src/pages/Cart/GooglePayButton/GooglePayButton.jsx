import { default as GooglePayBtn } from '@google-pay/button-react';
import { useDispatch } from 'react-redux';
import { updateHistory } from '../../../redux/localOperation';

const GooglePayButton = ({
  isDiscount,
  totalPrice,
  play,
  setIsPaid,
  products,
  isPaid,
  orderSubmit,
}) => {
  const dispatch = useDispatch();

  const handlePaymentData = paymentRequest => {
    try {
      setIsPaid(paymentRequest);
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <GooglePayBtn
        onClick={event => {
          play();
        }}
        buttonSizeMode="fill"
        buttonType="pay"
        style={{ width: '100%', maxWidth: 400 }}
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: isDiscount
              ? `${(totalPrice * (1 - isDiscount.discount / 100)).toFixed(2)}`
              : String(totalPrice.toFixed(2)),
            currencyCode: 'USD',
            countryCode: 'US',
          },
          callbackIntents: ['PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={handlePaymentData}
        onPaymentAuthorized={paymentData => {
          return { transactionState: 'SUCCESS' };
        }}
        existingPaymentMethodRequired="false"
      />
    </>
  );
};

export default GooglePayButton;

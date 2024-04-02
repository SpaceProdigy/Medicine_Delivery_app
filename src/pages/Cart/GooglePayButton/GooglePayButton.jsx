import { default as GooglePayBtn } from '@google-pay/button-react';
import { useEffect, useState } from 'react';

const GooglePayButton = ({ isDiscount, totalPrice, play, navigate }) => {
  const [isPaid, setIsPaid] = useState(null);

  useEffect(() => {
    if (isPaid) {
      navigate('/history');
    }
    return () => {
      setIsPaid(null);
    };
  }, [isPaid, navigate]);

  const handlePaymentData = paymentRequest => {
    try {
      console.log('load payment data', paymentRequest);
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
        console.log('paymentData', paymentData);
        return { transactionState: 'SUCCESS' };
      }}
      existingPaymentMethodRequired="false"
    />
  );
};

export default GooglePayButton;

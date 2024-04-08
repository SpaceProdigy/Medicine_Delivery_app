export function detectCardType(cardNumber) {
  const cleanedNumber = cardNumber.replace(/\D/g, '');

  if (/^4/.test(cleanedNumber)) {
    return 'Visa';
  } else if (/^5[1-5]/.test(cleanedNumber)) {
    return 'MasterCard';
  } else if (/^3[47]/.test(cleanedNumber)) {
    return 'American Express';
  } else if (/^6(?:011|5[0-9]{2})/.test(cleanedNumber)) {
    return 'Discover';
  } else if (/^(?:2131|1800|35\d{3})\d{11}$/.test(cleanedNumber)) {
    return 'JCB';
  } else {
    return 'Unknown';
  }
}

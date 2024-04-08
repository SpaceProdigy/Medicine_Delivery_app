import * as yup from 'yup';

export const schema = yup.object({
  fullName: yup
    .string()
    .required('Full Name is a required field')
    .min(2, 'Minimum length 2 characters.')
    .max(100, 'Minimum length 100 characters.'),

  address: yup
    .string()
    .required('Address is a required field')
    .min(2, 'Minimum length 5 characters.')
    .max(200, 'Minimum length 200 characters.'),

  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is a required field'),

  tel: yup
    .string()
    .required('Phone is a required field')
    .matches(
      /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
      'Please enter a valid phone number'
    ),
});

export const cardSchema = yup.object({
  cardName: yup
    .string()
    .required('Card Name is a required')
    .matches(/^[a-zA-Z]+$/, 'Card Name must contain only Latin letters')
    .min(2, 'Minimum length 2 characters.')
    .max(30, 'Minimum length 30 characters.'),

  cardNumber: yup
    .string()
    .required('Card Number is required')
    .length(19, 'Card Number must be exactly 16 digits'),
  cardYear: yup.string().required('required'),
  cardMonth: yup.string().required('required'),
  cardCVV: yup.string().required('required').min(3, 'min 3'),
});

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

export const addFieldToSchema = fieldName => {
  return schema.shape({
    [fieldName]: yup
      .string()
      .matches(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number')
      .required('Phone is a required field'),
  });
};

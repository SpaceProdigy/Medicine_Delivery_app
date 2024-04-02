import { Typography } from '@mui/material';

export const Total = ({ isDiscount, totalPrice }) => {
  return (
    <Typography variant="h6" component={'p'}>
      {`Total:`}
      <Typography
        variant={isDiscount ? 'body2' : 'h6'}
        component={'span'}
        sx={
          isDiscount && {
            textDecorationLine: 'line-through',
            color: '#B22222',
          }
        }
      >
        {` ${totalPrice?.toFixed(2)} $`}
      </Typography>
      <Typography variant="h6" component={'span'} sx={{ color: '#008000' }}>
        {isDiscount &&
          ` ${
            totalPrice &&
            (totalPrice * (1 - isDiscount.discount / 100)).toFixed(2)
          } $`}
      </Typography>
    </Typography>
  );
};

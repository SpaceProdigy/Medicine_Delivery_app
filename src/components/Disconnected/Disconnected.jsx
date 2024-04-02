import { Typography } from '@mui/material';
import { Wrapper } from './Disconnected.styled';
import image from '../../images/disconnected.png';

export const Disconnected = () => {
  return (
    <Wrapper>
      <img src={image} width={100} alt="Disconnected icon" />
      <Typography align="center" variant="cption" component="div">
        Check your internet connection.
      </Typography>
    </Wrapper>
  );
};

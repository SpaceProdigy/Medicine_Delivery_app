import { Box, styled } from '@mui/material';

export const StyledInfoProduct = styled(Box)`
  margin-top: 70px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 40px;
`;

export const StyledImage = styled('div')`
  min-width: 250px;
  min-height: 200px;
  max-width: 400px;
  background-color: #fff;
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

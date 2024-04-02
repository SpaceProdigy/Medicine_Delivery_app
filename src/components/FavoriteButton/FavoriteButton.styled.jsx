import { IconButton, styled } from '@mui/material';

export const ButtonFavoriteStyled = styled(IconButton)`
  position: absolute;
  z-index: 10;
  top: 5px;
  right: 5px;
  color: rgb(250, 175, 0);
  transition: scale 300ms linear;
  &:hover {
    scale: 1.1;
  }
`;

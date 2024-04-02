import { Button, styled } from '@mui/material';

export const ButtonStyled = styled(Button)`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 5px;
  transition: scale 300ms linear;
  &:hover {
    scale: 1.1;
  }
`;

export const WrapperIcons = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

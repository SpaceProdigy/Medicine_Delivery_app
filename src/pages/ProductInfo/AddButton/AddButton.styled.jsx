import { Button, styled } from '@mui/material';

export const ButtonStyled = styled(Button)`
  display: flex;
  gap: 5px;
  align-items: flex-end;
  padding: 5px;
  transition: background-color 300ms linear, color 300ms linear;
  background-color: #008000;
  width: 100%;
  margin-top: 10px;
  &:hover {
    background-color: #ffd700;
    color: ${({ theme }) => theme.palette.primary.main};
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

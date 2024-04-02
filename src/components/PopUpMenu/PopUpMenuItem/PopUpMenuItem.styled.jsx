import { Button, styled, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const ButtonStyled = styled(Button)`
  background-color: inherit;
  border: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
`;

export const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 25px;
  margin: 10px;
`;

export const BoxStyled = styled(Box)`
  border-radius: 8px;
  background-color: ${({ active, theme }) =>
    active === 'true' ? theme?.appBar?.linkActive : 'inherit'};

  transition: background-color 300ms linear;

  &:hover {
    background-color: ${({ theme }) =>
      theme?.appBar?.popUpMenuHover ?? 'inherit'};
  }
`;

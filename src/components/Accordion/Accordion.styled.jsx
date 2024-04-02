import { Accordion, styled, Box } from '@mui/material';

import { NavLink } from 'react-router-dom';

export const AccordionStyled = styled(Accordion)`
  background-color: ${({ theme }) =>
    theme?.accordion?.primary.main ?? 'inherit'};
`;

export const BoxStyled = styled(Box)`
  border-radius: 8px;
  background-color: ${({ active, theme }) =>
    active ? theme?.appBar?.linkActive : 'inherit'};

  transition: background-color 300ms linear;

  &:hover {
    background-color: ${({ theme }) =>
      theme?.appBar?.popUpMenuHover ?? 'inherit'};
  }
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

import { AppBar, Box, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled as cStylet } from 'styled-components';

export const Logo = cStylet.img`
  width: 30px;
  height: 30px;
`;

export const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const AppBarStyled = styled(AppBar)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 1920px;
`;

export const WrapperStyled = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const BoxStyled = styled(Box)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

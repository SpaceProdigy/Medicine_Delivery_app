import {
  Accordion,
  Container,
  List,
  ListItem,
  styled,
  Button,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const MainContainer = styled(Container)`
  padding: 0;
  margin-top: 55px;
  margin-bottom: 50px;
`;

export const ListStyled = styled(List)`
  padding: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 30px;
`;

export const AccordionStyled = styled(Accordion)`
  background-color: ${({ theme }) =>
    theme?.accordion?.primary.main ?? 'inherit'};
`;

export const ItemStyled = styled(ListItem)`
  height: 300px;
  width: 270px;
  padding: 0;
  border-radius: 5px;
  overflow-y: hidden;

  box-shadow: ${({ theme }) =>
    theme.palette.type === 'light' ? theme?.card?.cardBoxShadow : 'inherit'};
`;

export const MotionListStyled = motion(ListStyled);
export const MotionItemStyled = motion(ItemStyled);

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

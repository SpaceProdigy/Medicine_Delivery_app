import { Accordion, Box, List, ListItem, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const StyledList = styled(List)`
  margin-top: 70px;
  padding: 0;
  margin-bottom: 40px;
`;

export const StyledItem = styled(ListItem)`
  width: 100%;
  padding: 0;
`;

export const WrapperInfoItem = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
  }
`;

export const StyledImage = styled('div')`
  width: 100px;
  height: 100px;
  background-color: #fff;
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: scale 1s ease;
  &:hover {
    scale: 1.1;
  }
`;

export const AccordionStyled = styled(Accordion)`
  transition: background-color 1s ease;
  background-color: ${({ theme }) =>
    theme?.accordion?.primary.main ?? 'inherit'};
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #ffd700;
  }
`;

export const StyledSubItem = styled(Box)`
  display: flex;
  height: 120px;
  width: 100%;
  align-items: center;
  border: 1px solid
    ${({ theme }) => (theme?.type === 'dark' ? 'rgb(243, 246, 249)' : '#111')};
  padding: 10px;
  border-radius: 5px;
  gap: 5px;
  margin-top: 10px;

  &:first-of-type {
    margin-top: 0;
  }
`;
